import type { Route } from '@/types/navigation'

export interface NavLinkProps extends Route {
  isActive: boolean
}
