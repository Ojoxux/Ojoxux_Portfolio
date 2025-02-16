import React, { useState } from 'react'
import { DirectoryTreeProps, FileStructure } from './types'
import { fileStructure } from '@/utils/constants/files'

export const DirectoryTree: React.FC<DirectoryTreeProps> = ({
  className = '',
  currentFile,
  onFileSelect,
}) => {
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set(['/']))

  const toggleDir = (path: string) => {
    const newExpanded = new Set(expandedDirs)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedDirs(newExpanded)
  }

  const renderItem = (item: FileStructure, level: number = 0) => {
    const isExpanded = expandedDirs.has(item.path)
    const isCurrentFile = item.path === currentFile
    const paddingLeft = `${level * 16}px`

    if (item.type === 'file') {
      return (
        <div
          key={item.path}
          className={`
            px-2 py-1 cursor-pointer hover:bg-[#44475a]/50
            ${isCurrentFile ? 'bg-[#44475a] text-[#f8f8f2]' : 'text-[#6272a4]'}
          `}
          style={{ paddingLeft }}
          onClick={() => onFileSelect(item.path)}
        >
          {item.icon} {item.name}
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
          <span className="mr-2">{isExpanded ? '▼' : '▶'}</span>
          {item.name}
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
      <div className="p-2 text-sm">{fileStructure.map(item => renderItem(item))}</div>
    </div>
  )
}
