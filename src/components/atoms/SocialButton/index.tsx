import { SocialButtonProps } from './types'

export const SocialButton = ({ onClick, icon, label }: SocialButtonProps) => (
  <button
    onClick={onClick}
    className="text-[#6272A4] hover:text-white transition-colors flex items-center gap-2"
  >
    {label && <span className="text-sm">{label}</span>}
    {icon}
  </button>
)
