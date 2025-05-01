'use client'

import { useEffect, useState, useRef } from 'react'
import { useTetris } from '@/hooks/useTetris'
import { TetrisGameProps } from './types'
import { TitleScreen } from './components/TitleScreen'
import { GameScreen } from './components/GameScreen'

export const TetrisGame = ({ className = '', onScoreUpdate, onGameOver }: TetrisGameProps) => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null!)
  const {
    board,
    currentPiece,
    score,
    level,
    linesCleared,
    isGameOver: gameOver,
    isPaused,
    initGame,
    nextPiece,
    togglePause,
    clearingLines,
    setupGame,
    hardDrop,
    setIsSoftDropping,
  } = useTetris()

  useEffect(() => {
    setupGame()
  }, [setupGame])

  const handleGameStart = () => {
    setIsGameStarted(true)
    initGame()
  }

  const handleCloseGame = () => {
    setIsGameStarted(false)
  }

  // キー操作のイベントリスナーを追加
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keysToDisable = ['ArrowUp', 'ArrowLeft', 'ArrowRight', ' ']
      if (keysToDisable.includes(e.key)) {
        e.preventDefault()
      }
      if (e.key === 'ArrowDown') {
        // ArrowDown キー押下でソフトドロップを有効化
        setIsSoftDropping(true)
        e.preventDefault()
      } else if (e.key === ' ') {
        hardDrop()
        e.preventDefault()
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        // ArrowDown キー離したらソフトドロップを無効化
        setIsSoftDropping(false)
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown, { capture: true, passive: false })
    window.addEventListener('keyup', handleKeyUp, { capture: true, passive: false })
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true })
      window.removeEventListener('keyup', handleKeyUp, { capture: true })
    }
  }, [hardDrop, setIsSoftDropping])

  useEffect(() => {
    if (isGameStarted) {
      document.body.style.overflow = 'hidden' // ゲーム中はスクロールを無効化
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isGameStarted])

  useEffect(() => {
    if (onScoreUpdate) {
      onScoreUpdate(score)
    }
  }, [score, onScoreUpdate])

  useEffect(() => {
    if (gameOver && onGameOver) {
      onGameOver()
    }
  }, [gameOver, onGameOver])

  return (
    <div className={`relative ${className}`}>
      <TitleScreen onStart={handleGameStart} />
      {isGameStarted && (
        <GameScreen
          nodeRef={nodeRef}
          board={board}
          currentPiece={currentPiece}
          score={score}
          level={level}
          linesCleared={linesCleared}
          isGameOver={gameOver}
          isPaused={isPaused}
          nextPiece={nextPiece}
          clearingLines={clearingLines}
          initGame={initGame}
          togglePause={togglePause}
          onClose={handleCloseGame}
          className=""
        />
      )}
    </div>
  )
}
