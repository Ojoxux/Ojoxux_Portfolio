'use client'

import { useRedirectIfNotDesktop } from '@/hooks/useRedirectIfNotDesktop'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { HomeHero } from '@/components/organisms/HomeHero'
import { TetrisGame } from '@/components/molecules/TetrisGame'

export default function Home() {
  useRedirectIfNotDesktop()
  return (
    <EditorLayout>
      <div className="grid grid-cols-2 gap-32 min-h-screen">
        {/* 左側のHomeHero */}
        <div className="flex items-center translate-y-[-5%]">
          <HomeHero className="px-12" />
        </div>

        {/* 右側のTetrisGame */}
        <div className="relative flex items-center justify-center translate-y-[3%]">
          <TetrisGame className="-ml-[15%]" />
        </div>
      </div>
    </EditorLayout>
  )
}
