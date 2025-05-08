'use client'

import { WindowControls } from '@/components/atoms/WindowControls'
import type { EditorHeaderProps } from '@/components/molecules/EditorHeader/types'
import type { FC } from 'react'

export const EditorHeader: FC<EditorHeaderProps> = ({ fileName, fileType, className = '' }) => (
  <div className={`flex items-center justify-between mb-2 px-2 ${className}`}>
    <div className='flex items-center gap-2'>
      <WindowControls />
      <div className='flex items-center gap-2 ml-2'>
        <span className='text-[#6272a4] text-sm'>{fileName}</span>
        <span className='text-[#6272a4] text-xs'>• {fileType}</span>
      </div>
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-[#6272a4] text-xs'>Ln 1, Col 1</span>
      <span className='text-[#6272a4] text-xs'>Spaces: 2</span>
      <span className='text-[#6272a4] text-xs'>UTF-8</span>
    </div>
  </div>
)
