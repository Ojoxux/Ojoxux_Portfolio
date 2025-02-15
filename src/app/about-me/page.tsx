'use client'

import React from 'react'
import AboutMeContent from '@/components/organisms/AboutMeContent'
import { EditorLayout } from '@/components/templates/EditorLayout'

const AboutMePage: React.FC = () => {
  return (
    <EditorLayout>
      <div className="min-h-screen flex items-center justify-center bg-[#44475a] p-8">
        <AboutMeContent />
      </div>
    </EditorLayout>
  )
}

export default AboutMePage
