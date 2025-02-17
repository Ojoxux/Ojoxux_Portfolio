import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { BottomNavProps } from './types'

export const BottomNav = ({}: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#21222C] h-[44px] border-t border-[#44475A] flex items-center justify-between px-4">
      <div className="flex items-center">
        <span className="text-[#6272A4] text-sm">find me in:</span>
        <div className="h-[24px] w-[1px] bg-[#44475A] mx-4" />
        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com/ojoxux__18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6272A4] hover:text-white transition-colors"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-[24px] w-[1px] bg-[#44475A] mr-4" />
        <Link
          href="https://github.com/Ojoxux"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6272A4] hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="text-sm">@Ojoxux</span>
          <FaGithub size={20} />
        </Link>
      </div>
    </nav>
  )
}
