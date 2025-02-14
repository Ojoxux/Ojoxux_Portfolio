import { useState, useCallback, useEffect, useRef } from 'react'
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  TETROMINOS,
  INITIAL_SPEED,
  LEVEL_SPEED_MULTIPLIER,
  POINTS,
  LEVEL_REQUIREMENTS,
  TetrominoType,
  SOFT_DROP_SPEED,
} from '@/utils/constants/tetris'

interface Position {
  x: number
  y: number
}

export interface GameState {
  board: (string | null)[][]
  clearingLines: number[]
  currentPiece: {
    type: TetrominoType
    position: Position
    shape: number[][]
    isDropping: boolean
  } | null
  nextPiece: {
    type: TetrominoType
    position: Position
    shape: number[][]
  } | null
  score: number
  level: number
  linesCleared: number
  isGameOver: boolean
  isPaused: boolean
  lastTime: number
  dropAccumulator: number
}

export const useTetris = () => {
  // 新しいピースを生成する関数を先に定義
  const generateNewPiece = useCallback(() => {
    const types = Object.keys(TETROMINOS) as TetrominoType[]
    const type = types[Math.floor(Math.random() * types.length)]
    // shape 配列をディープクローン
    const shape = TETROMINOS[type].shape.map(row => [...row])
    return {
      type,
      shape,
      position: {
        x: Math.floor(BOARD_WIDTH / 2) - Math.floor(shape[0].length / 2),
        y: -2,
      },
      isDropping: false,
    }
  }, [])

  // 初期状態を定義
  const createInitialState = (): GameState => ({
    board: Array(BOARD_HEIGHT)
      .fill(null)
      .map(() => Array(BOARD_WIDTH).fill(null)),
    clearingLines: [],
    currentPiece: null,
    nextPiece: null,
    score: 0,
    level: 1,
    linesCleared: 0,
    isGameOver: false,
    isPaused: false,
    lastTime: performance.now(),
    dropAccumulator: 0,
  })

  const [gameState, setGameState] = useState<GameState>(createInitialState())

  const gameStateRef = useRef<GameState>(gameState)
  useEffect(() => {
    gameStateRef.current = gameState
  }, [gameState])

  // レベルアップのチェック関数
  const checkLevelUp = useCallback((score: number, currentLevel: number) => {
    const nextLevel = LEVEL_REQUIREMENTS.findIndex(req => score < req)
    return nextLevel === -1 ? currentLevel : nextLevel
  }, [])

  // 衝突判定
  const checkCollision = useCallback(
    (piece: GameState['currentPiece'], board: GameState['board'], position: Position) => {
      if (!piece) return true

      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const newX = position.x + x
            const newY = position.y + y

            if (
              newX < 0 ||
              newX >= BOARD_WIDTH ||
              newY >= BOARD_HEIGHT ||
              (newY >= 0 && board[newY][newX])
            ) {
              return true
            }
          }
        }
      }
      return false
    },
    []
  )

  // ラインの完成チェックと消去を修正
  const clearLines = useCallback((board: GameState['board']) => {
    // 新しいボードを空の状態で作成（行数は BOARD_HEIGHT 固定）
    const newBoard: Array<Array<string | null>> = Array.from({ length: BOARD_HEIGHT }, () =>
      Array(BOARD_WIDTH).fill(null)
    )
    let newRow = BOARD_HEIGHT - 1 // 新しいボードの下端から書き込み開始
    let clearedLinesCount = 0
    const linesToClear: number[] = []

    // 下から上へ走査し、完全に埋まっている行はクリア対象、それ以外は下端にコピー
    for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
      if (board[y].every(cell => cell !== null)) {
        clearedLinesCount++
        linesToClear.push(y)
        // この行はコピーせず消す
      } else {
        // 現在の行をディープコピーして、newBoard の下端に配置
        newBoard[newRow] = board[y].slice()
        newRow--
      }
    }

    return {
      newBoard,
      clearedLines: clearedLinesCount,
      linesToClear,
    }
  }, [])

  // ゲームオーバー判定を修正
  const checkGameOver = useCallback((piece: GameState['currentPiece']) => {
    if (!piece) return false

    // ピースが完全に画面外にある場合のみゲームオーバー
    return piece.shape.some((row, y) => {
      return row.some(value => {
        if (!value) return false
        const boardY = piece.position.y + y
        // ピースが画面上部（y < 0）にあり、かつ実際のブロックが存在する場合のみゲームオーバー
        return boardY < 0 && value === 1
      })
    })
  }, [])

  // ゲームの初期化関数
  const initGame = useCallback(() => {
    const firstPiece = generateNewPiece()
    const secondPiece = generateNewPiece()
    setGameState({
      ...createInitialState(),
      currentPiece: firstPiece,
      nextPiece: secondPiece,
    })
  }, [generateNewPiece])

  // スコア計算関数を修正
  const calculateScore = useCallback((clearedLines: number) => {
    if (clearedLines === 0) return 0

    switch (clearedLines) {
      case 1:
        return POINTS.SINGLE
      case 2:
        return POINTS.DOUBLE
      case 3:
        return POINTS.TRIPLE
      case 4:
        return POINTS.TETRIS
      default:
        return 0
    }
  }, [])

  // ヘルパー関数：ピースをディープクローンする
  const clonePiece = useCallback(
    (piece: {
      type: TetrominoType
      shape: number[][]
      position: Position
      isDropping?: boolean
    }) => ({
      type: piece.type,
      shape: piece.shape.map(row => [...row]),
      position: { ...piece.position },
      isDropping: false, // クローン時は常に false に設定
    }),
    []
  )

  // freezePiece を最初に定義する
  const freezePiece = useCallback(
    (state: GameState) => {
      // 現在のブロックをボード内に固定
      const newBoard = state.board.map(row => [...row])
      if (state.currentPiece) {
        state.currentPiece.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value) {
              const boardX = state.currentPiece!.position.x + x
              const boardY = state.currentPiece!.position.y + y
              if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                newBoard[boardY][boardX] = state.currentPiece!.type
              }
            }
          })
        })
      }

      // ライン消去 & スコア更新処理（必要に応じて調整してください）
      const { newBoard: updatedBoard, clearedLines } = clearLines(newBoard)
      const additionalScore = calculateScore(clearedLines)
      const newScore = state.score + additionalScore
      const newLevel = checkLevelUp(newScore, state.level)

      // 次のブロックを昇格して新たな nextPiece を生成する
      return {
        ...state,
        board: updatedBoard,
        currentPiece: {
          ...clonePiece(state.nextPiece!),
          position: {
            x: Math.floor(BOARD_WIDTH / 2) - Math.floor(state.nextPiece!.shape[0].length / 2),
            y: -2,
          },
        },
        nextPiece: generateNewPiece(),
        score: newScore,
        level: newLevel,
        linesCleared: state.linesCleared + clearedLines,
      }
    },
    [clearLines, calculateScore, checkLevelUp, generateNewPiece, clonePiece]
  )

  const hardDrop = useCallback(() => {
    setGameState(prev => {
      if (!prev.currentPiece || prev.isGameOver || prev.isPaused) return prev

      let newY = prev.currentPiece.position.y
      const currentX = prev.currentPiece.position.x

      // 現在のピースを最下点まで移動
      while (
        !checkCollision(prev.currentPiece, prev.board, {
          x: currentX,
          y: newY + 1,
        })
      ) {
        newY++
      }

      // ボードのコピー作成
      const newBoard = prev.board.map(row => [...row])
      const lockedPiece = { ...prev.currentPiece, position: { x: currentX, y: newY } }

      // 現在のピースをボードに固定
      lockedPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            const boardY = newY + y
            if (boardY >= 0 && boardY < BOARD_HEIGHT) {
              newBoard[boardY][currentX + x] = lockedPiece.type
            }
          }
        })
      })

      // ゲームオーバーチェック（必要に応じて実装）
      const isGameOver = checkGameOver(lockedPiece)
      if (isGameOver) {
        return {
          ...prev,
          board: newBoard,
          currentPiece: null,
          isGameOver: true,
        }
      }

      // ラインクリアの処理（ライン数、スコア、レベル更新など）
      const { newBoard: updatedBoard, clearedLines } = clearLines(newBoard)
      const additionalScore = calculateScore(clearedLines)
      const newScore = prev.score + additionalScore
      const newLevel = checkLevelUp(newScore, prev.level)

      return {
        ...prev,
        board: updatedBoard,
        // nextPiece をディープクローンして currentPiece に昇格させる
        currentPiece: {
          ...clonePiece(prev.nextPiece!),
          // 初期位置を設定（中央上部へ配置）
          position: {
            x: Math.floor(BOARD_WIDTH / 2) - Math.floor(prev.nextPiece!.shape[0].length / 2),
            y: -2,
          },
        },
        // 次のピースは generateNewPiece で新しく生成（この内部でも clone を行っていること）
        nextPiece: generateNewPiece(),
        score: newScore,
        level: newLevel,
        linesCleared: prev.linesCleared + clearedLines,
      }
    })
  }, [
    checkCollision,
    clearLines,
    generateNewPiece,
    calculateScore,
    checkLevelUp,
    checkGameOver,
    clonePiece,
  ])

  // ピースを移動
  const movePiece = useCallback(
    (dx: number, dy: number) => {
      // ピース移動処理
      console.log(`movePiece called with dx: ${dx}, dy: ${dy}`)
      setGameState(prev => {
        if (!prev.currentPiece || prev.isGameOver || prev.isPaused) return prev

        const newPosition = {
          x: prev.currentPiece.position.x + dx,
          y: prev.currentPiece.position.y + dy,
        }

        // 衝突判定
        if (checkCollision(prev.currentPiece, prev.board, newPosition)) {
          if (dy > 0) {
            // 現在の位置でピースを固定
            const newBoard = prev.board.map(row => [...row])
            prev.currentPiece.shape.forEach((row, y) => {
              row.forEach((value, x) => {
                if (value) {
                  const boardY = prev.currentPiece!.position.y + y
                  const boardX = prev.currentPiece!.position.x + x
                  if (boardY >= 0 && boardY < BOARD_HEIGHT) {
                    newBoard[boardY][boardX] = prev.currentPiece!.type
                  }
                }
              })
            })

            // ゲームオーバーチェック
            const isGameOver = prev.currentPiece.shape.some((row, y) => {
              return row.some(value => {
                if (!value) return false
                const boardY = prev.currentPiece!.position.y + y
                return boardY < 0
              })
            })

            if (isGameOver) {
              return {
                ...prev,
                board: newBoard,
                currentPiece: null,
                isGameOver: true,
              }
            }

            // ラインクリア処理
            const { newBoard: updatedBoard, clearedLines, linesToClear } = clearLines(newBoard)
            const additionalScore = calculateScore(clearedLines)
            const newScore = prev.score + additionalScore
            const newLevel = checkLevelUp(newScore, prev.level)

            return {
              ...prev,
              board: updatedBoard,
              clearingLines: linesToClear,
              // nextPiece をディープクローンして currentPiece に昇格
              currentPiece: {
                ...clonePiece(prev.nextPiece!),
                position: {
                  x: Math.floor(BOARD_WIDTH / 2) - Math.floor(prev.nextPiece!.shape[0].length / 2),
                  y: -2,
                },
              },
              nextPiece: generateNewPiece(),
              score: newScore,
              level: newLevel,
              linesCleared: prev.linesCleared + clearedLines,
            }
          }
          return prev
        }

        return {
          ...prev,
          currentPiece: {
            ...prev.currentPiece,
            position: newPosition,
            isDropping: dy > 0,
          },
        }
      })
    },
    [checkCollision, clearLines, generateNewPiece, calculateScore, checkLevelUp, clonePiece]
  )

  // レベルに応じた現在のドロップ速度を計算
  const getCurrentSpeed = useCallback((level: number) => {
    return INITIAL_SPEED * Math.pow(LEVEL_SPEED_MULTIPLIER, level - 1)
  }, [])

  // ソフトドロップ状態を追加
  const [isSoftDropping, setIsSoftDropping] = useState(false)

  // 自動落下処理
  useEffect(() => {
    if (!gameState?.currentPiece || !gameState?.board) return
    if (gameState.isGameOver || gameState.isPaused) return

    // ソフトドロップ中なら SOFT_DROP_SPEED、通常時は level に応じた速度とする
    const speed = isSoftDropping ? SOFT_DROP_SPEED : getCurrentSpeed(gameState.level)
    const dropInterval = setInterval(() => {
      setGameState(prev => {
        if (!prev?.currentPiece || !prev?.board) return prev

        const newPosition = {
          x: prev.currentPiece.position.x,
          y: prev.currentPiece.position.y + 1,
        }

        // 衝突判定
        if (checkCollision(prev.currentPiece, prev.board, newPosition)) {
          return freezePiece(prev)
        }

        return {
          ...prev,
          currentPiece: {
            ...prev.currentPiece,
            position: newPosition,
            isDropping: isSoftDropping,
          },
        }
      })
    }, speed)

    return () => clearInterval(dropInterval)
  }, [
    gameState?.currentPiece,
    gameState?.isGameOver,
    gameState?.isPaused,
    gameState?.level,
    gameState?.board,
    isSoftDropping,
    checkCollision,
    freezePiece,
    getCurrentSpeed,
  ])

  // 一時停止のトグル
  const togglePause = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isPaused: !prev.isPaused,
    }))
  }, [])

  // ピースを回転（壁蹴り処理を改善）
  const rotatePiece = useCallback(() => {
    setGameState(prev => {
      if (!prev.currentPiece || prev.isGameOver || prev.isPaused) return prev

      const rotatedShape = prev.currentPiece!.shape[0].map((_, index) =>
        prev.currentPiece!.shape.map(row => row[row.length - 1 - index])
      )

      const rotatedPiece = {
        ...prev.currentPiece,
        shape: rotatedShape,
      }

      // 壁蹴りテストパターンを拡張
      const kicks = [
        [0, 0], // 通常位置
        [-1, 0], // 左
        [1, 0], // 右
        [-2, 0], // 左2
        [2, 0], // 右2
        [0, -1], // 上
        [0, 1], // 下
      ]

      for (const [kickX, kickY] of kicks) {
        const kickedPosition = {
          x: prev.currentPiece.position.x + kickX,
          y: prev.currentPiece.position.y + kickY,
        }

        if (!checkCollision(rotatedPiece, prev.board, kickedPosition)) {
          return {
            ...prev,
            currentPiece: {
              ...rotatedPiece,
              position: kickedPosition,
            },
          }
        }
      }

      return prev // 回転できない場合は現状維持
    })
  }, [checkCollision])

  // setupGame関数の修正
  const setupGame = useCallback(() => {
    initGame()
  }, [initGame])

  useEffect(() => {
    setupGame()
  }, [setupGame])

  // キーボード操作のイベントリスナーを追加
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameState.isGameOver || gameState.isPaused) return

      switch (event.key) {
        case 'ArrowLeft':
          movePiece(-1, 0)
          break
        case 'ArrowRight':
          movePiece(1, 0)
          break
        case 'ArrowDown':
          movePiece(0, 1)
          break
        case 'ArrowUp':
          rotatePiece()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameState, movePiece, rotatePiece, hardDrop])

  // 例：ピースの位置が有効かどうかをチェックする関数
  const isValidPosition = useCallback(
    (
      piece: GameState['currentPiece'],
      board: (string | null)[][],
      newPos: { x: number; y: number }
    ): boolean => {
      if (!piece) return false
      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const boardY = newPos.y + y
            const boardX = newPos.x + x
            if (
              boardX < 0 ||
              boardX >= BOARD_WIDTH ||
              boardY >= board.length ||
              (boardY >= 0 && board[boardY][boardX] !== null)
            ) {
              return false
            }
          }
        }
      }
      return true
    },
    []
  )

  // ソフトドロップ: ピースを1セル下へ移動し、移動可能かを判定
  const softDrop = useCallback(() => {
    if (!gameState.currentPiece) return // 何もしない

    const newPos = {
      ...gameState.currentPiece.position,
      y: gameState.currentPiece.position.y + 1,
    }

    if (isValidPosition(gameState.currentPiece, gameState.board, newPos)) {
      setGameState(prev => {
        if (!prev.currentPiece) return prev // 存在しない場合は更新せずに返す
        return {
          ...prev,
          currentPiece: {
            ...prev.currentPiece!, // non-null アサーションで currentPiece が確実に存在することを示す
            position: newPos,
          },
        }
      })
    } else {
      setGameState(prev => freezePiece(prev))
    }
  }, [gameState.currentPiece, gameState.board, freezePiece, isValidPosition])

  return {
    board: gameState?.board ?? createInitialState().board,
    currentPiece: gameState?.currentPiece ?? null,
    nextPiece: gameState?.nextPiece ?? null,
    score: gameState?.score ?? 0,
    level: gameState?.level ?? 1,
    linesCleared: gameState?.linesCleared ?? 0,
    isGameOver: gameState?.isGameOver ?? false,
    isPaused: gameState?.isPaused ?? false,
    initGame,
    togglePause,
    clearingLines: gameState?.clearingLines ?? [],
    setupGame,
    movePiece,
    rotatePiece,
    hardDrop,
    softDrop,
    setIsSoftDropping,
    freezePiece,
    getCurrentSpeed,
  }
}
