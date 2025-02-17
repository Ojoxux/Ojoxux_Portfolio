import { FaInstagram } from 'react-icons/fa'
import { SocialButton } from '@/components/atoms/SocialButton'
import { Divider } from '@/components/atoms/Divider'
import { SocialLinksProps } from './types'
export const SocialLinks = ({ onInstagramClick }: SocialLinksProps) => (
  <div className="flex items-center">
    <span className="text-[#6272A4] text-sm">find me in:</span>
    <Divider />
    <div className="flex items-center gap-4">
      <SocialButton onClick={onInstagramClick} icon={<FaInstagram size={20} />} />
    </div>
  </div>
)
