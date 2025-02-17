import { EditorWindowControl } from '@/components/atoms/EditorWindowControl'

interface EditorTitleBarProps {
  title: string
}

export const EditorTitleBar: React.FC<EditorTitleBarProps> = ({ title }) => {
  return (
    <div className="h-10 bg-[#21222c] flex items-center px-4 gap-2 border-b border-[#44475a]">
      <EditorWindowControl />
      <div className="flex-1 text-center text-[#6272a4] text-sm">{title}</div>
    </div>
  )
}
