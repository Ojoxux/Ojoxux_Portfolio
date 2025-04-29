import React, { useState, useEffect } from 'react'
import { EditorTabs } from '@/components/molecules/EditorTabs'
import { EditorContent } from '@/components/molecules/EditorContent'
import { LineNumber } from '@/components/atoms/LineNumber'
import { StatusBar } from '@/components/molecules/StatusBar'
import { AboutMeContentProps } from './types'
import { highlightCode } from '@/utils/shiki'

export const AboutMeContent: React.FC<AboutMeContentProps> = ({
  currentFile,
  openFiles,
  fileContent,
  onFileSelect,
  onCloseFile,
}) => {
  const [highlightedHtml, setHighlightedHtml] = useState<string>('')
  const [lineCount, setLineCount] = useState<number>(0)

  useEffect(() => {
    if (fileContent?.content) {
      let isMounted = true
      const lang = fileContent.language || 'text'
      highlightCode(fileContent.content, lang)
        .then(html => {
          if (isMounted) {
            setHighlightedHtml(html)
            setLineCount(fileContent.content.split('\n').length)
          }
        })
        .catch(err => {
          console.error('Failed to highlight code:', err)
          if (isMounted) {
            setHighlightedHtml(`<pre><code>${fileContent.content}</code></pre>`)
            setLineCount(fileContent.content.split('\n').length)
          }
        })

      return () => {
        isMounted = false
      }
    } else {
      setHighlightedHtml('')
      setLineCount(0)
    }
  }, [fileContent])

  if (!fileContent) return null

  return (
    <div className="h-full flex flex-col">
      <EditorTabs
        openFiles={openFiles}
        currentFile={currentFile}
        onFileSelect={onFileSelect}
        onCloseFile={onCloseFile}
      />

      <div className="flex-1 flex overflow-y-auto py-2 relative">
        <div className="w-[50px] flex-shrink-0 bg-[#282a36] text-[#6272a4] text-right pr-2 pl-2 select-none">
          {[...Array(lineCount)].map((_, i) => (
            <LineNumber key={i} number={i + 1} />
          ))}
        </div>

        <div className="flex-1 pl-4">
          <EditorContent highlightedHtml={highlightedHtml} />
        </div>
      </div>

      <StatusBar language={fileContent.language || 'text'} />
    </div>
  )
}
