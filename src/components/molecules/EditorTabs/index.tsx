import { EditorTab } from '@/components/atoms/EditorTab'
import type { EditorTabsProps } from './types'

export const EditorTabs: React.FC<EditorTabsProps> = ({
  openFiles,
  currentFile,
  onFileSelect,
  onCloseFile,
}) => {
  return (
    <div className='h-10 bg-[#21222c] flex items-center border-b border-[#44475a]'>
      <div className='flex h-full'>
        {openFiles.map(path => {
          const isActive = path === currentFile
          const fileName = path.split('/').pop()
          const extension = 'ojx'

          return (
            <EditorTab
              key={path}
              fileName={fileName || ''}
              extension={extension}
              isActive={isActive}
              onSelect={() => onFileSelect(path)}
              onClose={e => {
                e.stopPropagation()
                onCloseFile(path)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
