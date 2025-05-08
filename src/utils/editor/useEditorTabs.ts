import { useCallback, useState } from 'react'

/**
 * エディタのタブ管理用カスタムフック
 * @param initialFile 初期表示ファイルパス
 */
export const useEditorTabs = (initialFile: string) => {
  const [openFiles, setOpenFiles] = useState<string[]>([initialFile])
  const [currentFile, setCurrentFile] = useState<string>(initialFile)

  /** ファイルを選択・追加 */
  const handleFileSelect = useCallback(
    (path: string): void => {
      if (!openFiles.includes(path)) {
        setOpenFiles(prev => [...prev, path])
      }
      setCurrentFile(path)
    },
    [openFiles]
  )

  /** ファイルを閉じる */
  const handleCloseFile = useCallback(
    (path: string): void => {
      setOpenFiles(prev => {
        const newOpenFiles = prev.filter(file => file !== path)
        if (path === currentFile && newOpenFiles.length > 0) {
          setCurrentFile(newOpenFiles[newOpenFiles.length - 1])
        }
        return newOpenFiles
      })
    },
    [currentFile]
  )

  return {
    openFiles,
    currentFile,
    setCurrentFile,
    handleFileSelect,
    handleCloseFile,
  } as const
}
