import React from 'react'
import { AboutMeContentProps } from './types'

const AboutMeContent: React.FC<AboutMeContentProps> = ({
  currentFile,
  openFiles,
  fileContent,
  onFileSelect,
  onCloseFile,
}) => {
  if (!fileContent) return null

  const lines = fileContent.content.split('\n')

  return (
    <div className="h-full flex flex-col">
      {/* タブバー */}
      <div className="h-10 bg-[#21222c] flex items-center border-b border-[#44475a]">
        <div className="flex h-full">
          {openFiles.map(path => {
            const isActive = path === currentFile
            const fileName = path.split('/').pop()

            return (
              <div
                key={path}
                onClick={() => onFileSelect(path)}
                className={`
                  h-full px-4 flex items-center gap-2 cursor-pointer group border-r border-[#44475a]
                  relative transition-colors duration-150
                  ${isActive ? 'bg-[#282a36] text-[#f8f8f2]' : 'bg-[#21222c] text-[#6272a4] hover:bg-[#282a36]/50'}
                  ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ff79c6]' : ''}
                `}
              >
                <span className="text-[#ff79c6]">ts</span>
                <span>{fileName}</span>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    onCloseFile(path)
                  }}
                  className="opacity-0 group-hover:opacity-100 hover:text-[#ff5555] transition-opacity"
                >
                  ×
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* エディタ本体 */}
      <div className="flex-1 overflow-auto">
        <div className="flex">
          {/* 行番号 */}
          <div className="w-[50px] flex-shrink-0 bg-[#282a36] text-[#6272a4] text-right pr-4 select-none border-r border-[#44475a]">
            {lines.map((_, i) => (
              <div key={i} className="h-6 text-sm leading-6">
                {String(i + 1).padStart(2, '0')}
              </div>
            ))}
          </div>

          {/* コード */}
          <div className="flex-1 relative">
            {/* インデントガイド */}
            <div
              className="absolute top-0 left-0 h-full w-px bg-[#44475a]/30"
              style={{ left: '16px' }}
            />
            <div
              className="absolute top-0 left-0 h-full w-px bg-[#44475a]/30"
              style={{ left: '32px' }}
            />

            {/* コードコンテンツ */}
            <pre className="p-0 m-0">
              <code className="block px-4 text-[#f8f8f2] text-sm leading-6">
                {lines.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line || '\n'}
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* ミニマップ */}
          <div className="w-[60px] flex-shrink-0 bg-[#282a36] border-l border-[#44475a]" />
        </div>
      </div>

      {/* ステータスバー */}
      <div className="h-6 bg-[#191a21] text-[#6272a4] flex items-center px-4 text-xs border-t border-[#44475a]">
        <div className="flex items-center gap-4">
          <span>{fileContent.language}</span>
          <span>UTF-8</span>
          <span>LF</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#50fa7b]" />
            Prettier
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutMeContent
