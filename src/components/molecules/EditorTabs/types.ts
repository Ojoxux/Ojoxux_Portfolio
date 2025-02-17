export interface EditorTabsProps {
  openFiles: string[]
  currentFile: string
  onFileSelect: (path: string) => void
  onCloseFile: (path: string) => void
}
