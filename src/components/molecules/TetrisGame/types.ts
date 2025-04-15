import { RefObject } from 'react'
import { DraggableEventHandler } from 'react-draggable'
import { GameState } from '@/hooks/useTetris'

export interface TetrisGameProps {
  className?: string
  onScoreUpdate?: (score: number) => void
  onGameOver?: () => void
}

export interface TitleScreenProps {
  onStart: () => void
  onClose?: () => void
  className?: string
}

export interface GameScreenProps {
  nodeRef: RefObject<HTMLDivElement>
  position?: { x: number; y: number }
  onDrag?: DraggableEventHandler
  board: GameState['board']
  currentPiece: GameState['currentPiece']
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

export interface ScoreBoardProps {
  score: number
  level: number
  linesCleared: number
}

export interface ControlsInfoProps {
  className?: string
}

export interface NextPiecePreviewProps {
  piece: GameState['nextPiece']
}
