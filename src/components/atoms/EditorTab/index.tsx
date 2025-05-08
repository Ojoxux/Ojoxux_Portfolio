import { SvgIcon } from '@/components/atoms/SvgIcon'
import type { EditorTabProps } from './types'

export const EditorTab: React.FC<EditorTabProps> = ({
  fileName,
  isActive,
  extension,
  onSelect,
  onClose,
}) => {
  const isOjxFile = extension === 'ojx'

  return (
    <div
      onClick={onSelect}
      className={`
          h-full px-4 flex items-center gap-2 cursor-pointer group border-r border-[#44475a]
          relative transition-colors duration-150
          ${isActive ? 'bg-[#282a36] text-[#f8f8f2]' : 'bg-[#21222c] text-[#6272a4] hover:bg-[#282a36]/50'}
          ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ff79c6]' : ''}
        `}
    >
      {isOjxFile ? (
        <SvgIcon
          style={{ width: '24px', height: '24px', display: 'inline-block' }}
          src='/assets/ojx-logo.svg'
          alt='Ojx Logo'
        />
      ) : (
        <span className='text-[#ff79c6] flex-shrink-0'>{extension}</span>
      )}
      <span className='text-xs whitespace-nowrap'>{fileName}</span>
      <button
        onClick={e => {
          e.stopPropagation()
          onClose(e)
        }}
        className='opacity-0 group-hover:opacity-100 hover:text-[#ff5555] transition-opacity flex-shrink-0'
      >
        ×
      </button>
    </div>
  )
}
