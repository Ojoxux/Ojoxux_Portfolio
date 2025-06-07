'use client'

import { AboutMeHeader } from '@/components/organisms/AboutMeHeader'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { InternshipExperience } from '@/components/organisms/InternshipExperience'
import { AcademicHistory } from '@/components/organisms/AcademicHistory'
import { SkillsSection } from '@/components/organisms/SkillsSection'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { useRedirectIfNotDesktop } from '@/hooks/useRedirectIfNotDesktop'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useInView } from 'framer-motion'

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
}

const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutMePage() {
  // テストのために一旦コメントアウト
  // useRedirectIfNotDesktop()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Lenisの初期化
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: false,
    })

    // アニメーションループの設定
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <EditorLayout>
      <div className='w-full'>
        {/* ヘッダーセクション */}
        <AboutMeHeader />

        {/* コンテンツセクション */}
        <SkillsSection />

        <div className='container mx-auto px-4 py-16'>
          <SectionHeader className='mt-4 mb-8' title='Experience' />

          <AnimatedSection>
            <InternshipExperience />
          </AnimatedSection>
        </div>

        {/* Academic History - フルワイドスで表示 */}
        <AnimatedSection className='mt-8 w-full overflow-hidden'>
          <AcademicHistory />
        </AnimatedSection>
      </div>
    </EditorLayout>
  )
}
