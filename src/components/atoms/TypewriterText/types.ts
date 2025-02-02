import { StyleProps } from '@/types/styles'

export interface TypewriterTextProps extends StyleProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
  showCursor?: boolean
}
