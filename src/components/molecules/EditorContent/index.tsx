'use client'

import type React from 'react'
import type { EditorContentProps } from './types'

export const EditorContent: React.FC<EditorContentProps> = ({ highlightedHtml }) => {
  if (!highlightedHtml) {
    return <div className='flex-1 p-4 text-syntax-default'>Loading code...</div>
  }

  return (
    <div className='flex-1'>
      {/* インデントガイド (必要であれば残す) */}
      {/* <div className="absolute top-0 left-0 h-full w-px bg-[#44475a]/30" style={{ left: '16px' }} /> */}
      {/* <div className="absolute top-0 left-0 h-full w-px bg-[#44475a]/30" style={{ left: '32px' }} /> */}

      {/* Shikiが生成したHTMLを表示 */}
      {/* Shikiの出力には通常<pre>が含まれるので、ここでは<pre>を削除 */}
      <div className='w-[900px] max-w-full'>
        <div
          className='text-sm leading-6 text-[#f8f8f2]'
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>
    </div>
  )
}
