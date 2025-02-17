import { ReactNode } from 'react'

export interface SocialButtonProps {
  onClick: () => void
  icon: ReactNode
  label?: string
}
