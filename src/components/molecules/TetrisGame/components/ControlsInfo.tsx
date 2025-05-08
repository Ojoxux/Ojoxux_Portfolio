import type { ControlsInfoProps } from '../types'

export const ControlsInfo = ({ className = '' }: ControlsInfoProps) => (
  <div
    className={`bg-[#282a36]/80 rounded-lg border border-[#6272a4]/30 p-3 space-y-2 ${className}`}
  >
    <div className='text-[#6272a4] mb-2'>Controls:</div>
    <div className='grid grid-cols-2 gap-2 text-xs'>
      <span className='text-[#6272a4]'>↑:</span>
      <span className='text-[#8be9fd]'>Rotate</span>
      <span className='text-[#6272a4]'>←→:</span>
      <span className='text-[#8be9fd]'>Move</span>
      <span className='text-[#6272a4]'>↓:</span>
      <span className='text-[#8be9fd]'>Soft Drop</span>
      <span className='text-[#6272a4]'>Space:</span>
      <span className='text-[#8be9fd]'>Hard Drop</span>
      <span className='text-[#6272a4]'>P:</span>
      <span className='text-[#8be9fd]'>Pause</span>
    </div>
  </div>
)
