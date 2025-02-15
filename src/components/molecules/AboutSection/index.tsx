import React from 'react'
import { AboutSectionProps } from './types'

const AboutSection: React.FC<AboutSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-[#8be9fd] mb-2">{title}</h2>
      <div className="text-base text-[#f8f8f2]">{children}</div>
    </section>
  )
}

export default AboutSection
