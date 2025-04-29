'use client'

import React, { useState } from 'react'
import { AboutMeContent } from '@/components/organisms/AboutMeContent'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { DirectoryTree } from '@/components/molecules/DirectoryTree'
import { ActivityBar } from '@/components/molecules/ActivityBar'
import { EditorTitleBar } from '@/components/molecules/EditorTitleBar'
import { fileContents } from '@/utils/constants/files'

export default function AboutMePage() {
  // 開いているファイルのパスを配列で管理
  const [openFiles, setOpenFiles] = useState<string[]>(['/src/about-me/introduction.ojx'])
  const [currentFile, setCurrentFile] = useState('/src/about-me/introduction.ojx')

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
      <div className="min-h-[calc(100vh-48px)] w-full pt-3 flex justify-center bg-[#282a36]">
        <div className="w-[1600px] h-[700px] bg-[#282a36] rounded-xl border border-[#6272a4]/30 shadow-2xl overflow-hidden backdrop-blur-sm">
          <EditorTitleBar title="about-me - VS Code" />

          <div className="h-[calc(100%-2.5rem)] flex">
            <ActivityBar className="px-5" />

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
