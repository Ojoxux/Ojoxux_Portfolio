import React from 'react'
import { EditorTabs } from '@/components/molecules/EditorTabs'
import { EditorContent } from '@/components/molecules/EditorContent'
import { LineNumber } from '@/components/atoms/LineNumber'
import { StatusBar } from '@/components/molecules/StatusBar'
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
      <EditorTabs
        openFiles={openFiles}
        currentFile={currentFile}
        onFileSelect={onFileSelect}
        onCloseFile={onCloseFile}
      />

      <div className="flex-1 overflow-auto">
        <div className="flex">
          {/* 行番号 */}
          <div className="w-[50px] flex-shrink-0 bg-[#282a36] text-[#6272a4] text-right pr-4 select-none border-r border-[#44475a]">
            {lines.map((_, i) => (
              <LineNumber key={i} number={i + 1} />
            ))}
          </div>

          <EditorContent content={lines} />

          {/* ミニマップ */}
          <div className="w-[60px] flex-shrink-0 bg-[#282a36] border-l border-[#44475a]" />
        </div>
      </div>

      <StatusBar language={fileContent.language} />
    </div>
  )
}

export default AboutMeContent
