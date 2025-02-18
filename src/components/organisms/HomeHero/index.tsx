'use client'

import { TypewriterText } from '@/components/atoms/TypewriterText'
import { motion } from 'framer-motion'
import { heroContent } from '@/utils/constants/hero'
import { HomeHeroProps } from './types'
import { GreetingText } from '@/components/atoms/GreetingText'
import { useState } from 'react'

export const HomeHero = ({ className = '' }: HomeHeroProps) => {
  const [showName, setShowName] = useState(false)
  const [showRole, setShowRole] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [showSecondComment, setShowSecondComment] = useState(false)
  const [showGithub, setShowGithub] = useState(false)
  const [showGithubUrl, setShowGithubUrl] = useState(false)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      className={`w-full flex flex-col justify-center ${className}`}
    >
      {/* グリーティング */}
      <GreetingText text={heroContent.greeting} onComplete={() => setShowName(true)} />

      {/* 名前 */}
      {showName && (
        <div className="text-4xl md:text-6xl font-bold text-white mt-2">
          <TypewriterText
            text={heroContent.name}
            delay={0}
            speed={50}
            onComplete={() => setShowRole(true)}
          />
        </div>
      )}

      {/* 役割 */}
      {showRole && (
        <div className="font-mono text-[#bd93f9] mt-2 text-xl md:text-2xl">
          <TypewriterText
            text={heroContent.role}
            delay={0}
            speed={50}
            onComplete={() => setShowComments(true)}
          />
        </div>
      )}

      {/* コメント */}
      {showComments && (
        <div className="mt-8 font-mono text-gray-200">
          <TypewriterText
            text={heroContent.comments[0]}
            delay={0}
            speed={50}
            className="block"
            onComplete={() => setShowSecondComment(true)}
          />
          {showSecondComment && (
            <TypewriterText
              text={heroContent.comments[1]}
              delay={0}
              speed={50}
              className="block"
              onComplete={() => setShowGithub(true)}
            />
          )}
          {showGithub && (
            <div className="mt-2 flex">
              <TypewriterText
                text={heroContent.githubLink.constText}
                delay={0}
                speed={50}
                className="text-[#ff79c6]"
                onComplete={() => setShowGithubUrl(true)}
                showCursor={!showGithubUrl}
              />
              {showGithubUrl && (
                <>
                  <TypewriterText
                    text={
                      heroContent.githubLink.quote +
                      heroContent.githubLink.url +
                      heroContent.githubLink.suffix
                    }
                    delay={0}
                    speed={50}
                    className="text-[#f1fa8c]"
                    showCursor={true}
                  />
                </>
              )}
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
