'use client'

import { useTypewriter } from '@/hooks/useTypewriter'
import { TypewriterTextProps } from './types'

export const TypewriterText = ({
  text,
  speed,
  delay,
  className = '',
  onComplete,
  showCursor = false,
}: TypewriterTextProps) => {
  const { displayText, isTyping } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  })

  return (
    <span className={className} style={{ whiteSpace: 'pre' }}>
      {displayText}
      {(showCursor || isTyping) && <span className="animate-cursor-blink">_</span>}
    </span>
  )
}
