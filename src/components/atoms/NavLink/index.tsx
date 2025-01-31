import { NavLinkProps } from './types'
import Link from 'next/link'

export const NavLink = ({ path, label, isActive }: NavLinkProps) => {
  const isContactMe = path === '/contact-me'

  return (
    <Link
      href={path}
      className={`
        px-8 h-full flex items-center border-r border-[#44475a] 
        ${isContactMe ? 'border-l' : ''} 
        hover:bg-[#44475a] transition-colors relative text-sm
        ${isActive ? 'text-[#ff79c6]' : 'text-gray-400'}
        ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ff79c6]' : ''}
      `}
    >
      {label}
    </Link>
  )
}
