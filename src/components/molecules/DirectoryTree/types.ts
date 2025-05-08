export interface DirectoryTreeProps {
  className?: string
  currentFile: string | null
  onFileSelect: (path: string) => void
  rootDirectory?: string
  fileStructure: FileStructure[]
}

export interface FileStructure {
  name: string
  type: 'file' | 'directory'
  path: string
  icon?: string
  children?: FileStructure[]
}

export interface FileContent {
  path: string
  content: string
  language: string
}
