import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#21222C] h-[44px] border-t border-[#44475A] flex items-center justify-start px-4">
      <div className="flex items-center gap-4">
        <span className="text-[#6272A4] text-sm">find me in:</span>
        <Link
          href="https://github.com/Ojoxux"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6272A4] hover:text-white transition-colors"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://instagram.com/ojoxux__18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6272A4] hover:text-white transition-colors"
        >
          <FaInstagram size={20} />
        </Link>
      </div>
    </nav>
  )
}
