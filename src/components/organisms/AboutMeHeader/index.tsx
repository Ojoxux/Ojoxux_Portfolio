'use client'

import { PROFILE } from '@/utils/constants/about-me'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { SectionHeader } from '@/components/molecules/SectionHeader'

export const AboutMeHeader = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className='w-full py-8 text-white relative'>
      <div className='px-0 lg:container mx-auto'>
        <div>
          <SectionHeader title='About' position='first' />
        </div>

        <div className='py-8 min-h-[70vh] flex items-center'>
          <motion.div ref={ref} className='relative -ml-14'>
            <motion.h2
              className='font-sf-pro font-extrabold text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-tighter leading-[0.85] text-[#c3a5fd] -mt-64'
              style={{ textShadow: '0 0 40px rgba(195, 165, 253, 0.2)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-10%' }}
            >
              AboutMe
            </motion.h2>
          </motion.div>
        </div>

        <div className='-mt-48 max-w-2xl'>
          <p className='text-xl text-[#a4b0be] font-inter'>{PROFILE.tagline}</p>
          <p className='mt-4 text-xl text-[#a4b0be] font-inter'>{PROFILE.mission}</p>
        </div>
      </div>
    </div>
  )
}
