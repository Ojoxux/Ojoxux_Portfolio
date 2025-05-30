'use client'

import { NavLink } from '@/components/atoms/NavLink'
import { routes } from '@/utils/constants/navigation'
import { styles } from '@/utils/styles/constants'
import { usePathname } from 'next/navigation'

export const NavItems = () => {
  const pathname = usePathname()

  return (
    <div className={`${styles.flexBetween} flex-1`}>
      <div className='flex'>
        {routes
          .filter(item => item.path !== '/contact-me')
          .map(item => (
            <NavLink key={item.path} {...item} isActive={pathname === item.path} />
          ))}
      </div>
      <div>
        {routes
          .filter(item => item.path === '/contact-me')
          .map(item => (
            <NavLink key={item.path} {...item} isActive={pathname === item.path} />
          ))}
      </div>
    </div>
  )
}
