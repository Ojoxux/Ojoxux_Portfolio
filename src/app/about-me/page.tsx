'use client'

import React, { useState } from 'react'
import AboutMeContent from '@/components/organisms/AboutMeContent'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { DirectoryTree } from '@/components/molecules/DirectoryTree'
import { fileContents } from '@/utils/constants/files'

const AboutMePage: React.FC = () => {
  // 開いているファイルのパスを配列で管理
  const [openFiles, setOpenFiles] = useState<string[]>(['/src/about-me/introduction.ts'])
  const [currentFile, setCurrentFile] = useState('/src/about-me/introduction.ts')

  const handleFileSelect = (path: string) => {
    // 既に開いているファイルの場合は、そのファイルをアクティブにする
    if (!openFiles.includes(path)) {
      setOpenFiles([...openFiles, path])
    }
    setCurrentFile(path)
  }

  const handleCloseFile = (path: string) => {
    const newOpenFiles = openFiles.filter(file => file !== path)
    setOpenFiles(newOpenFiles)
    // 閉じたファイルが現在のファイルだった場合、最後のファイルをアクティブにする
    if (path === currentFile && newOpenFiles.length > 0) {
      setCurrentFile(newOpenFiles[newOpenFiles.length - 1])
    }
  }

  return (
    <EditorLayout>
      <div className="min-h-[calc(100vh-48px)] w-full flex items-center justify-center bg-[#282a36]">
        <div className="w-[1300px] h-[700px] bg-[#282a36] rounded-xl border border-[#6272a4]/30 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* タイトルバー */}
          <div className="h-10 bg-[#21222c] flex items-center px-4 gap-2 border-b border-[#44475a]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5555] hover:bg-[#ff6e6e] transition-colors" />
              <div className="w-3 h-3 rounded-full bg-[#f1fa8c] hover:bg-[#f4fb9d] transition-colors" />
              <div className="w-3 h-3 rounded-full bg-[#50fa7b] hover:bg-[#6dff93] transition-colors" />
            </div>
            <div className="flex-1 text-center text-[#6272a4] text-sm">
              about-me - Ojoxux Editor
            </div>
          </div>

          <div className="h-[calc(100%-2.5rem)] flex">
            {/* Activity Bar */}
            <div className="w-12 bg-[#21222c] flex flex-col items-center py-4 space-y-4">
              <button className="w-8 h-8 flex items-center justify-center text-[#bd93f9] hover:text-[#ff79c6] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-[#f8f8f2] bg-[#44475a] rounded">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </button>
            </div>

            {/* Side Bar & Editor */}
            <div className="flex-1 flex">
              <DirectoryTree
                currentFile={currentFile}
                onFileSelect={handleFileSelect}
                className="border-r border-[#44475a] w-[280px] flex-shrink-0"
              />

              <div className="flex-1 bg-[#282a36]">
                <AboutMeContent
                  currentFile={currentFile}
                  openFiles={openFiles}
                  fileContent={fileContents[currentFile]}
                  onFileSelect={setCurrentFile}
                  onCloseFile={handleCloseFile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorLayout>
  )
}

export default AboutMePage
