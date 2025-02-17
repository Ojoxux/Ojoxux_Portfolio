import { EditorWindowControlProps } from './types'

export const EditorWindowControl: React.FC<EditorWindowControlProps> = ({
  onClose,
  onMinimize,
  onMaximize,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={onClose}
        className="w-3 h-3 rounded-full bg-[#ff5555] hover:bg-[#ff6e6e] transition-colors cursor-pointer"
      />
      <div
        onClick={onMinimize}
        className="w-3 h-3 rounded-full bg-[#f1fa8c] hover:bg-[#f4fb9d] transition-colors cursor-pointer"
      />
      <div
        onClick={onMaximize}
        className="w-3 h-3 rounded-full bg-[#50fa7b] hover:bg-[#6dff93] transition-colors cursor-pointer"
      />
    </div>
  )
}
