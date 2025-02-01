import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
  onComplete?: () => void
}

export const useTypewriter = ({ text, speed = 50, delay = 0, onComplete }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const startTyping = useCallback(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
      onComplete?.()
    }
  }, [currentIndex, onComplete, speed, text])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (delay > 0 && currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, delay)
    } else {
      startTyping()
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [currentIndex, delay, startTyping])

  return { displayText, isTyping }
}
