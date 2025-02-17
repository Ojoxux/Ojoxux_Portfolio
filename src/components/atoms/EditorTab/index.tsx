import { EditorTabProps } from './types'

export const EditorTab: React.FC<EditorTabProps> = ({
  fileName,
  isActive,
  extension,
  onSelect,
  onClose,
}) => {
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
      <span className="text-[#ff79c6]">{extension}</span>
      <span>{fileName}</span>
      <button
        onClick={onClose}
        className="opacity-0 group-hover:opacity-100 hover:text-[#ff5555] transition-opacity"
      >
        ×
      </button>
    </div>
  )
}
