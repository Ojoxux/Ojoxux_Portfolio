export const styles = {
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  glassmorphism: 'bg-background-dark/80 backdrop-blur-sm border border-primary/10 rounded-lg',
  textGradient: 'bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary',
  hideScrollbar: 'scrollbar-none',
  truncate: 'truncate',
  transition: 'transition-all duration-300 ease-in-out',
}

export type StyleKey = keyof typeof styles

export const getStyle = (key: StyleKey): string => styles[key]
