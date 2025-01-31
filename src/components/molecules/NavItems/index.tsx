'use client'

import { NavLink } from '@/components/atoms/NavLink'
import { usePathname } from 'next/navigation'
import { routes } from '@/utils/routes'
import { styles } from '@/utils/styles/constants'

export const NavItems = () => {
  const pathname = usePathname()

  return (
    <div className={`${styles.flexBetween} flex-1`}>
      <div className="flex">
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
