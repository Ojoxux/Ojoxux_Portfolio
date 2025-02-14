import TetrisBlock from '@/components/atoms/TetrisBlock/index'
import { TETROMINOS } from '@/utils/constants/tetris'
import { NextPiecePreviewProps } from '../types'

export const NextPiecePreview = ({ piece }: NextPiecePreviewProps) => {
  if (!piece) return null

  return (
    <div className="bg-[#282a36]/80 rounded-lg border border-[#6272a4]/30 p-3">
      <div className="text-[#6272a4] mb-2">Next:</div>
      <div className="grid gap-[1px] bg-[#282a36]/80 p-1 rounded-lg w-fit mx-auto">
        {piece.shape.map((row, y) => (
          <div key={y} className="flex gap-[1px]">
            {row.map((cell, x) => (
              <TetrisBlock
                key={`${x}-${y}`}
                color={cell ? TETROMINOS[piece.type].color : undefined}
                active={!!cell}
                className="w-4 h-4"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
