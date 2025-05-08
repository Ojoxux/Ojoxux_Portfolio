import type { LineNumberProps } from './types'

export const LineNumber: React.FC<LineNumberProps> = ({ number }) => (
  <div className='h-6 text-sm leading-6'>{String(number).padStart(2, '0')}</div>
)
