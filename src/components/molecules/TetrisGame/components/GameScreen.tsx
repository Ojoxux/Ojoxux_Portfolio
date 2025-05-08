import { TetrisBlock } from '@/components/atoms/TetrisBlock'
import type { GameState } from '@/hooks/useTetris'
import { TETROMINOS, type TetrominoType } from '@/utils/constants/tetris'
import type { FC, RefObject } from 'react'
import { useState, useEffect, Fragment } from 'react'
import Draggable from 'react-draggable'
import { ControlsInfo } from './ControlsInfo'
import { NextPiecePreview } from './NextPiecePreview'
import { ScoreBoard } from './ScoreBoard'
import './styles/GameScreen.css'

interface GameScreenProps {
  nodeRef: RefObject<HTMLDivElement>
  board: (string | null)[][]
  currentPiece?: GameState['currentPiece']
  score: number
  level: number
  linesCleared: number
  isGameOver: boolean
  isPaused: boolean
  nextPiece: GameState['nextPiece']
  clearingLines: number[]
  initGame: () => void
  togglePause: () => void
  onClose?: () => void
  className?: string
}

export const GameScreen: FC<GameScreenProps> = ({
  nodeRef,
  board,
  currentPiece,
  score,
  level,
  linesCleared,
  isGameOver,
  isPaused,
  nextPiece,
  clearingLines,
  initGame,
  togglePause,
  onClose,
  className = '',
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // アニメーション完了後にクラスを削除
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setIsAnimating(true)
    setTimeout(() => {
      if (onClose) onClose()
    }, 600)
  }

  return (
    <Draggable handle='.handle' nodeRef={nodeRef} bounds='body'>
      <div
        ref={nodeRef}
        className={`relative z-20 ${className} ${isAnimating ? (isClosing ? 'genie-close' : 'genie-open') : ''}`}
        style={{
          transformOrigin: 'bottom right',
          position: 'fixed',
          top: '2.5rem',
          right: '2.5rem',
        }}
      >
        <div className='relative w-[600px] bg-[#282a36]/95 backdrop-blur-md rounded-xl border border-[#6272a4]/30 shadow-2xl'>
          {/* エディタ風タブバー（ドラッグハンドル） */}
          <div className='h-10 bg-[#282a36]/60 border-b border-[#6272a4]/30 rounded-t-xl flex items-center px-4 gap-2 handle cursor-move'>
            <div className='flex items-center gap-1.5'>
              <div
                onClick={handleClose}
                className='w-3 h-3 rounded-full bg-[#ff5555] cursor-pointer'
              />
              <div className='w-3 h-3 rounded-full bg-[#f1fa8c]' />
              <div className='w-3 h-3 rounded-full bg-[#50fa7b]' />
            </div>
            <span className='text-sm text-[#f8f8f2] ml-2'>tetris.exe</span>
          </div>

          {/* メインコンテンツ */}
          <div className='flex gap-4 p-4'>
            {/* ゲームボード（コードエディタ風：行番号ガターとグリッドを同一コンテナに統合） */}
            <div className='relative bg-gradient-to-b from-[#282a36] to-[#44475a] rounded-lg shadow-xl border border-[#6272a4] p-4'>
              <div className='grid grid-cols-[auto,1fr] gap-1 bg-[#282a36] rounded-lg p-2'>
                {board.map((row, y) => (
                  <Fragment key={y}>
                    {/* 行番号ガター */}
                    <div className='text-[#6272a4] text-xs w-6 h-6 leading-6 text-right'>
                      {String(y + 1).padStart(2, '0')}
                    </div>
                    {/* ゲームボードの各行 */}
                    <div className='flex gap-1'>
                      {row.map((cell, x) => {
                        // 現在のピースの位置をチェック
                        const isCurrentPiece = currentPiece?.shape.some((shapeRow, shapeY) =>
                          shapeRow.some((value, shapeX) => {
                            const pieceY = currentPiece.position.y + shapeY
                            const pieceX = currentPiece.position.x + shapeX
                            return value && pieceY === y && pieceX === x
                          })
                        )
                        return (
                          <TetrisBlock
                            key={`${x}-${y}`}
                            color={
                              isCurrentPiece
                                ? TETROMINOS[currentPiece?.type].color
                                : cell
                                  ? TETROMINOS[cell as TetrominoType].color
                                  : undefined
                            }
                            active={!!cell || !!isCurrentPiece || false}
                            isClearing={clearingLines.includes(y)}
                            isDropping={
                              currentPiece?.isDropping && (cell !== null || isCurrentPiece)
                            }
                            className='w-6 h-6'
                          />
                        )
                      })}
                    </div>
                  </Fragment>
                ))}
              </div>

              {/* オーバーレイ（ゲームオーバー / ポーズ時） */}
              {(isGameOver || isPaused) && (
                <div className='absolute inset-0 flex items-center justify-center bg-[#282a36]/80 backdrop-blur-sm rounded-lg'>
                  <div className='text-center p-8 bg-[#282a36]/90 rounded-xl border border-[#50fa7b]/30 shadow-lg'>
                    <p className='text-4xl font-bold text-[#50fa7b] mb-6'>
                      {isGameOver ? 'GAME OVER' : 'PAUSED'}
                    </p>
                    <button
                      onClick={initGame}
                      className='px-8 py-3 bg-[#50fa7b] text-[#282a36] rounded-lg hover:bg-[#8be9fd] transition-all transform hover:scale-105 shadow-lg'
                    >
                      {isGameOver ? 'Try Again' : 'Resume'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* サイドパネル */}
            <div className='flex-1 space-y-3 text-sm'>
              <ScoreBoard score={score} level={level} linesCleared={linesCleared} />
              <NextPiecePreview piece={nextPiece} />
              <ControlsInfo />
              <button
                onClick={togglePause}
                className='w-full px-3 py-1.5 bg-[#44475a] text-[#8be9fd] rounded-lg border border-[#6272a4]/30 hover:bg-[#6272a4] transition-all'
              >
                {isPaused ? 'Resume (P)' : 'Pause (P)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}
