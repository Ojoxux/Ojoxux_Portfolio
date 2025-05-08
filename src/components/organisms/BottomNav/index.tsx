import { Divider } from '@/components/atoms/Divider'
import { SocialButton } from '@/components/atoms/SocialButton'
import { SocialLinks } from '@/components/molecules/SocialLinks'
import { FaGithub } from 'react-icons/fa'
import type { BottomNavProps } from './types'

export const BottomNav = ({ onGithubClick, onInstagramClick }: BottomNavProps) => {
  return (
    <nav className='fixed bottom-0 left-0 w-full bg-[#21222C] h-[44px] border-t border-[#44475A] flex items-center justify-between px-4'>
      <SocialLinks onGithubClick={onGithubClick} onInstagramClick={onInstagramClick} />
      <div className='flex items-center'>
        <Divider />
        <SocialButton onClick={onGithubClick} icon={<FaGithub size={20} />} label='@Ojoxux' />
      </div>
    </nav>
  )
}
