import type { ScoreBoardProps } from '../types'

export const ScoreBoard = ({ score, level, linesCleared }: ScoreBoardProps) => (
  <div className='bg-[#282a36]/80 rounded-lg border border-[#6272a4]/30 p-3 space-y-2'>
    <div className='flex justify-between'>
      <span className='text-[#6272a4]'>Score:</span>
      <span className='text-[#8be9fd] font-bold'>{score}</span>
    </div>
    <div className='flex justify-between'>
      <span className='text-[#6272a4]'>Level:</span>
      <span className='text-[#8be9fd] font-bold'>{level}</span>
    </div>
    <div className='flex justify-between'>
      <span className='text-[#6272a4]'>Lines:</span>
      <span className='text-[#8be9fd] font-bold'>{linesCleared}</span>
    </div>
  </div>
)
