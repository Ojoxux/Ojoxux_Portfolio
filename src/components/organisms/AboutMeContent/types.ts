import { FileContent } from '@/components/molecules/DirectoryTree/types'

export interface AboutMeContentProps {
  currentFile: string
  openFiles: string[]
  fileContent: FileContent
  onFileSelect: (path: string) => void
  onCloseFile: (path: string) => void
}
