'use client'

import { BottomNav } from '@/components/organisms/BottomNav'
import { EditorNav } from '@/components/organisms/EditorNav'
import type { EditorLayoutProps } from './types'

export const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <div className='min-h-screen bg-[#282a36]'>
      <EditorNav />
      <main className={'min-h-[calc(100vh-88px)] w-full pl-0 pr-0 flex items-center'}>
        {children}
      </main>
      <BottomNav
        onGithubClick={() => window.open('https://github.com/Ojoxux', '_blank')}
        onInstagramClick={() => window.open('https://instagram.com/ojoxux__18', '_blank')}
      />
    </div>
  )
}
