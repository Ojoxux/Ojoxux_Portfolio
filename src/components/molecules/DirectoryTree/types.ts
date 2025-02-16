export interface DirectoryTreeProps {
  className?: string
  currentFile: string
  onFileSelect: (path: string) => void
}

export interface FileStructure {
  name: string
  type: 'file' | 'directory'
  path: string
  children?: FileStructure[]
  icon?: string
}

export interface FileContent {
  path: string
  content: string
  language: string
}
