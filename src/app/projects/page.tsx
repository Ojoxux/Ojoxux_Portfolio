'use client'

import React, { useState, useEffect } from 'react'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { ActivityBar } from '@/components/molecules/ActivityBar'
import { EditorTitleBar } from '@/components/molecules/EditorTitleBar'
import { EditorContent } from '@/components/molecules/EditorContent'
import { LineNumber } from '@/components/atoms/LineNumber'
import { StatusBar } from '@/components/molecules/StatusBar'
import { highlightCode } from '@/utils/shiki'
import { motion, AnimatePresence } from 'framer-motion'
import {
  projectFiles,
  projectsFileStructure,
  projectContentMapping,
} from '@/utils/constants/projects'
import { EditorTabs } from '@/components/molecules/EditorTabs'
import { DirectoryTree } from '@/components/molecules/DirectoryTree'
import { isImageFile, isDemoFile, getCurrentProjectName } from '@/utils/editor/fileUtils'
import { useEditorTabs } from '@/utils/editor/useEditorTabs'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useRedirectIfNotDesktop } from '@/hooks/useRedirectIfNotDesktop'

export default function ProjectsPage() {
  useRedirectIfNotDesktop()
  // タブ管理は共通フックで
  const { openFiles, currentFile, setCurrentFile, handleFileSelect, handleCloseFile } =
    useEditorTabs('/teamind/teamind.ojx')

  // ProjectsPage のロジックはカスタムフックスに移行
  const { highlightedHtml, lineCount, prefersReducedMotion, projectName } =
    useProjectsPage(currentFile)

  return (
    <EditorLayout>
      <div className="min-h-[calc(100vh-48px)] w-full pt-3 flex justify-center bg-[#282a36]">
        <div className="w-[1600px] h-[700px] bg-[#282a36] rounded-xl border border-[#6272a4]/30 shadow-2xl overflow-hidden backdrop-blur-sm">
          <EditorTitleBar title="projects - VS Code" />

          <div className="h-[calc(100%-2.5rem)] flex">
            <ActivityBar className="px-5" />
            <div className="flex-1 flex">
              <DirectoryTree
                fileStructure={projectsFileStructure}
                currentFile={currentFile}
                onFileSelect={handleFileSelect}
                className="border-r border-[#44475a] w-[280px] flex-shrink-0"
                rootDirectory="/"
              />
              <div className="flex-1 bg-[#282a36]">
                <div className="h-full flex flex-col">
                  {/* タブバー */}
                  <EditorTabs
                    openFiles={openFiles}
                    currentFile={currentFile}
                    onFileSelect={setCurrentFile}
                    onCloseFile={handleCloseFile}
                  />

                  {/* コンテンツパネル */}
                  <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {isDemoFile(currentFile) ? (
                        <motion.div
                          key="demo"
                          initial={!prefersReducedMotion ? { opacity: 0, x: -20 } : { opacity: 1 }}
                          animate={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
                          exit={!prefersReducedMotion ? { opacity: 0, x: 20 } : { opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center h-full"
                        >
                          <div className="bg-[#44475a]/30 rounded-lg p-8 text-center">
                            <p className="text-lg text-[#f8f8f2] mb-2">Demo Coming Soon</p>
                            {projectName && (
                              <p className="text-sm text-[#6272a4]">
                                {projectName === 'teamind' &&
                                  'NCC AI Hackathon project for summarizing and tagging Teams recordings.'}
                                {projectName === 'bachimegu' &&
                                  'アニメグッズの交換を管理するためのPWAアプリケーション'}
                                {projectName === 'github-contribution-island' &&
                                  'GitHubのコントリビューションを3D島として可視化するインタラクティブなアプリ'}
                                {projectName === 'nomitto' &&
                                  '飲み会のセッティングと管理をサポートする、お酒好きのためのアプリ'}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ) : isImageFile(currentFile) ? (
                        <motion.div
                          key="image"
                          initial={!prefersReducedMotion ? { opacity: 0 } : { opacity: 1 }}
                          animate={!prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
                          exit={!prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center h-full p-4"
                        >
                          <div className="max-w-full max-h-full overflow-hidden rounded-lg">
                            <div className="text-center text-[#f8f8f2]">
                              <p className="mb-4">デモ画像: {currentFile}</p>
                              <div className="bg-[#44475a]/30 p-12 rounded-lg">
                                <p>demo.png (デモ画像が追加されます)</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="content"
                          initial={!prefersReducedMotion ? { opacity: 0, x: 20 } : { opacity: 1 }}
                          animate={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
                          exit={!prefersReducedMotion ? { opacity: 0, x: -20 } : { opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 flex overflow-y-auto py-2 relative h-full"
                        >
                          <div className="w-[50px] flex-shrink-0 bg-[#282a36] text-[#6272a4] text-right pr-2 pl-2 select-none">
                            {[...Array(lineCount)].map((_, i) => (
                              <LineNumber key={i} number={i + 1} />
                            ))}
                          </div>
                          <div className="flex-1 pl-4">
                            <EditorContent highlightedHtml={highlightedHtml} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <StatusBar
                    language={
                      isDemoFile(currentFile)
                        ? 'typescript'
                        : isImageFile(currentFile)
                          ? 'image'
                          : 'markdown'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorLayout>
  )
}

// ProjectsPage のロジック抽出したカスタムフックス
export const useProjectsPage = (currentFile: string | null) => {
  const [highlightedHtml, setHighlightedHtml] = useState<string>('')
  const [lineCount, setLineCount] = useState<number>(0)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  // プロジェクト名取得
  const projectName = getCurrentProjectName(currentFile)

  // コードハイライト
  // MEMO: できればuseEffectを使いたくないが、Shikiのハイライトがうまくいかないため、useEffectを使っている
  useEffect(() => {
    if (currentFile) {
      if (!isDemoFile(currentFile) && !isImageFile(currentFile)) {
        const mappedPath = projectContentMapping[currentFile]
        const content = mappedPath ? projectFiles[mappedPath] : null
        if (content) {
          const loadShiki = async () => {
            try {
              const html = await highlightCode(content.content, content.language)
              setHighlightedHtml(html)
              setLineCount(content.content.split('\n').length)
            } catch {
              setHighlightedHtml(`<pre><code>${content.content}</code></pre>`)
              setLineCount(content.content.split('\n').length)
            }
          }
          loadShiki()
        }
      } else {
        // Reset when currentFile is a demo or image file
        setHighlightedHtml('')
        setLineCount(0)
      }
    } else {
      // Reset when currentFile is null
      setHighlightedHtml('')
      setLineCount(0)
    }
  }, [currentFile])

  return { highlightedHtml, lineCount, prefersReducedMotion, projectName }
}
