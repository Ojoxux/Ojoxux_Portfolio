'use client'

import { type FC } from 'react'
import { type EditorStatusBarProps } from '@/components/molecules/EditorStatusBar/types'

export const EditorStatusBar: FC<EditorStatusBarProps> = ({
  fileType,
  lineCount,
  className = '',
}) => (
  <div className={`flex items-center justify-between mt-2 px-2 ${className}`}>
    <div className="flex items-center gap-2">
      <span className="text-[#6272a4] text-xs">{fileType}</span>
      <span className="text-[#6272a4] text-xs">•</span>
      <span className="text-[#6272a4] text-xs">{lineCount} lines</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[#6272a4] text-xs">100%</span>
      <span className="text-[#6272a4] text-xs">•</span>
      <span className="text-[#6272a4] text-xs">UTF-8</span>
    </div>
  </div>
)
