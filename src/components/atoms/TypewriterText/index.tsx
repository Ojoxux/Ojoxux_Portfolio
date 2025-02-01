'use client'

import { useTypewriter } from '@/hooks/useTypewriter'
import { TypewriterTextProps } from './types'

export const TypewriterText = ({
  text,
  speed,
  delay,
  className = '',
  onComplete,
}: TypewriterTextProps) => {
  const { displayText, isTyping } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  })

  return (
    <span className={className}>
      {displayText}
      <span className={`${!isTyping ? 'animate-pulse' : 'opacity-0'}`}>_</span>
    </span>
  )
}
