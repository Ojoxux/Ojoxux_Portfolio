export interface Route {
  path: string
  label: string
  icon?: React.ComponentType
}

export interface NavigationItem extends Route {
  children?: NavigationItem[]
}

export interface NavigationProps {
  items: NavigationItem[]
  className?: string
}
