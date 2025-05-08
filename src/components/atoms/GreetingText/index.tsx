import { TypewriterText } from '@/components/atoms/TypewriterText'
import type { GreetingTextProps } from './types'

export const GreetingText = ({ text, onComplete }: GreetingTextProps) => {
  return (
    <div className='font-mono text-gray-200'>
      <TypewriterText text={text} delay={0} speed={50} onComplete={onComplete} />
    </div>
  )
}
