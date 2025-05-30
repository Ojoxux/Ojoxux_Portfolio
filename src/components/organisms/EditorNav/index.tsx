'use client'

import { Logo } from '@/components/atoms/Logo'
import { NavLink } from '@/components/atoms/NavLink'
import { routes } from '@/utils/constants/navigation'
import { styles } from '@/utils/styles/constants'
import { usePathname } from 'next/navigation'

export const EditorNav = () => {
  const pathname = usePathname()
  const mainRoutes = routes.filter(route => route.path !== '/contact-me')
  const contactRoute = routes.find(route => route.path === '/contact-me')

  return (
    <nav
      className={`relative z-10 w-full bg-[#282a36] border-b border-[#44475a] font-[var(--font-fira-code)] text-sm ${styles.glassmorphism}`}
    >
      <div className='flex justify-between h-12'>
        <div className='flex'>
          <Logo />
          <div className='flex'>
            {mainRoutes.map(item => (
              <NavLink key={item.path} {...item} isActive={pathname === item.path} />
            ))}
          </div>
        </div>
        <div className='flex ml-auto'>
          {contactRoute && <NavLink {...contactRoute} isActive={pathname === contactRoute.path} />}
        </div>
      </div>
    </nav>
  )
}
