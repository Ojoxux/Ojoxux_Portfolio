import React, { useState } from 'react'
import { DirectoryTreeProps, FileStructure } from './types'
import { SvgIcon } from '@/components/atoms/SvgIcon'

const getAllDirectoryPaths = (items: FileStructure[]): string[] => {
  let paths: string[] = []
  items.forEach(item => {
    if (item.type === 'directory') {
      paths.push(item.path) // Add the directory path
      if (item.children) {
        // Recursively get paths from children
        paths = paths.concat(getAllDirectoryPaths(item.children))
      }
    }
  })
  return paths
}

export const DirectoryTree: React.FC<DirectoryTreeProps> = ({
  className = '',
  currentFile,
  onFileSelect,
  rootDirectory,
  fileStructure,
}) => {
  const initialExpandedPaths = getAllDirectoryPaths(fileStructure)
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set(initialExpandedPaths))

  const toggleDir = (path: string) => {
    const newExpanded = new Set(expandedDirs)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedDirs(newExpanded)
  }

  const getFilteredFileStructure = (): FileStructure[] => {
    if (!rootDirectory) {
      return fileStructure
    }

    const findNodeByPath = (items: FileStructure[], path: string): FileStructure | null => {
      for (const item of items) {
        if (item.path === path) {
          return item
        }

        if (item.children && item.children.length > 0) {
          const foundInChildren = findNodeByPath(item.children, path)
          if (foundInChildren) {
            return foundInChildren
          }
        }
      }

      return null
    }

    const rootNode = findNodeByPath(fileStructure, rootDirectory)

    if (rootNode) {
      return [
        {
          ...rootNode,
          path: '/',
          name: rootNode.name,
        },
      ]
    }

    return fileStructure
  }

  const filteredFileStructure = getFilteredFileStructure()

  // フォルダ要素をクリックしたときに、フォルダ配下のファイルをレンダリングする
  const renderItem = (item: FileStructure, level: number = 0) => {
    const isExpanded = expandedDirs.has(item.path)
    const isCurrentFile = item.path === currentFile
    const paddingLeft = `${level * 16 + 16}px`
    const isOjxFile = item.type === 'file' && item.path.endsWith('.ojx')
    const isOjxRcFile = item.type === 'file' && item.name === '.ojoxuxrc'

    if (item.type === 'file') {
      return (
        <div
          key={item.path}
          className={`
            px-2 py-1 cursor-pointer hover:bg-[#44475a]/50 flex items-center space-x-2
            ${isCurrentFile ? 'bg-[#44475a] text-[#f8f8f2]' : 'text-[#6272a4]'}
          `}
          style={{ paddingLeft }}
          onClick={() => onFileSelect(item.path)}
        >
          {isOjxFile ? (
            <SvgIcon
              src="/assets/ojx-logo.svg"
              alt="Ojx Logo"
              style={{ width: '24px', height: '24px', display: 'inline-block', flexShrink: 0 }}
            />
          ) : isOjxRcFile ? (
            <SvgIcon
              src="/assets/ojx-rc-logo.svg"
              alt=".ojoxuxrc icon"
              style={{ width: '24px', height: '24px', display: 'inline-block', flexShrink: 0 }}
            />
          ) : (
            <span className="w-6 inline-block text-center flex-shrink-0">
              {/* ここにデフォルトファイルアイコン（例: 📄）や item.icon を表示するロジック */}📄
            </span>
          )}
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
        </div>
      )
    }

    return (
      <div key={item.path}>
        <div
          className="px-2 py-1 cursor-pointer hover:bg-[#44475a]/50 text-[#f8f8f2] flex items-center"
          style={{ paddingLeft }}
          onClick={() => toggleDir(item.path)}
        >
          <span className="mr-2 w-4 inline-block text-center flex-shrink-0">
            {isExpanded ? '▼' : '▶'}
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
        </div>
        {isExpanded && item.children?.map(child => renderItem(child, level + 1))}
      </div>
    )
  }

  return (
    <div
      className={`w-[280px] bg-[#282a36]/90 backdrop-blur-md rounded-xl border border-[#6272a4]/30 shadow-xl font-mono ${className}`}
    >
      {/* エクスプローラーヘッダー */}
      <div className="h-12 px-4 flex items-center text-[#f8f8f2] text-sm border-b border-[#6272a4]/30">
        EXPLORER
      </div>
      {/* ディレクトリ構造 */}
      <div className="p-2 text-sm">{filteredFileStructure.map(item => renderItem(item))}</div>
    </div>
  )
}
