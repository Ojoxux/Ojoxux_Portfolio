'use client'

import { DesktopOnlyMessage } from '@/components/molecules/DesktopOnlyMessage'
import { EditorHeader } from '@/components/molecules/EditorHeader'
import { EditorStatusBar } from '@/components/molecules/EditorStatusBar'
import type { FC } from 'react'

export const OnlyDesktop: FC = () => (
  <div className='flex flex-col items-center justify-center min-h-screen bg-[#282a36] text-[#f8f8f2] font-mono'>
    <div className='bg-[#44475a]/80 rounded-xl p-4 shadow-2xl border border-[#6272a4]/40 w-[700px]'>
      <EditorHeader fileName='desktop-only.tsx' fileType='TypeScript' />
      <div className='bg-[#282a36] rounded-lg overflow-hidden'>
        <DesktopOnlyMessage />
      </div>
      <EditorStatusBar fileType='Ojoxux' lineCount={8} />
    </div>
  </div>
)
