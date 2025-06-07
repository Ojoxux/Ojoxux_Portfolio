import type { FC } from 'react'

type SectionDividerProps = {
  title: string
  position?: 'first' | 'middle'
  variant?: 'default' | 'overlay'
}

export const SectionDivider: FC<SectionDividerProps> = ({
  title,
  position = 'middle',
  variant = 'default',
}) => {
  // overlayバリアントの場合、オーバーレイスタイルを適用
  if (variant === 'overlay') {
    return (
      <div className='absolute top-0 left-0 w-full flex justify-center'>
        <div className='px-2 py-1 -mt-3 text-[#ff79c6] font-mono'>
          <span className='mr-1 opacity-70'>{'// '}</span>
          <span className='mr-1'>{'<'}</span>
          <span>{title}</span>
          <span className='ml-1'>/&gt;</span>
          <span className='ml-1 opacity-70'>{'// '}</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${position === 'first' ? 'mt-0 mb-8' : 'my-8'} font-mono text-xs text-[#6272a4]`}
    >
      <div className='flex items-center'>
        <div className='flex-grow border-t border-[#44475a]' />
        <div className='mx-4'>
          {'// '}
          <span className='text-[#ff79c6]'>{`< ${title} />`}</span>
          {' //'}
        </div>
        <div className='flex-grow border-t border-[#44475a]' />
      </div>
    </div>
  )
}
