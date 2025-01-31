export const themeConfig = {
  colors: {
    primary: {
      light: '#9F7AEA',
      main: '#7C3AED',
      dark: '#553C9A',
    },
    background: {
      dark: '#0A1929',
      main: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
    },
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  typography: {
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
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '600ms',
    },
    timing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
}

export type ThemeConfig = typeof themeConfig
