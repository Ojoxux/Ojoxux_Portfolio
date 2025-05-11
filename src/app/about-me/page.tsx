'use client'

import { AboutMeHeader } from '@/components/organisms/AboutMeHeader'
import { ExperienceSection } from '@/components/organisms/ExperienceSection'
import { SkillsSidebar } from '@/components/organisms/SkillsSidebar'
import { SpecializationCards } from '@/components/organisms/SpecializationCards'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { useRedirectIfNotDesktop } from '@/hooks/useRedirectIfNotDesktop'

export default function AboutMePage() {
  useRedirectIfNotDesktop()

  return (
    <EditorLayout>
      <div className='flex flex-col lg:flex-row gap-8 w-full max-w-[98%] mx-auto py-10'>
        <div className='flex-1'>
          <AboutMeHeader />
          <SpecializationCards />
          <ExperienceSection />
        </div>
        <div className='w-full lg:w-80'>
          <SkillsSidebar />
        </div>
      </div>
    </EditorLayout>
  )
}
