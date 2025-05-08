import { useMediaQuery } from '@/hooks/useMediaQuery'
import { projectContentMapping, projectFiles } from '@/utils/constants/projects'
import { getCurrentProjectName, isDemoFile, isImageFile } from '@/utils/editor/fileUtils'
import { highlightCode } from '@/utils/shiki'
import { useEffect, useState } from 'react'

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
