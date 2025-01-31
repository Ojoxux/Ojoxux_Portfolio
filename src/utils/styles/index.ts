import { styles, getStyle } from './mixins'
import * as variants from './variants'

export { styles, getStyle, variants }

// 共通のスタイルユーティリティ
export const layout = {
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  padding: {
    page: 'px-4 py-8 md:px-6 md:py-12 lg:px-8',
    section: 'py-12 md:py-16 lg:py-20',
    card: 'p-4 md:p-6',
  },
}

export const typography = {
  fontFamily: {
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
}

export const effects = {
  transition: {
    fast: 'all 0.15s ease',
    default: 'all 0.3s ease',
    slow: 'all 0.6s ease',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
}

// ユーティリティ関数
export const getResponsiveValue = (value: string | Record<string, string>): string => {
  if (typeof value === 'string') return value

  return Object.entries(value)
    .map(([breakpoint, val]) => (breakpoint === 'base' ? val : `${breakpoint}:${val}`))
    .join(' ')
}
