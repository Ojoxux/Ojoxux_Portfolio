type ShadeNumber = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type ColorShades = {
  [key in ShadeNumber]: string
}

type ColorConfig = {
  primary: ColorShades
  gray: ColorShades
  background: {
    dark: string
    darker: string
    lighter: string
  }
  success: {
    light: string
    main: string
    dark: string
  }
  error: {
    light: string
    main: string
    dark: string
  }
  warning: {
    light: string
    main: string
    dark: string
  }
  info: {
    light: string
    main: string
    dark: string
  }
}

export const colors: ColorConfig = {
  primary: {
    50: '#ff79c6', // Dracula Pink
    100: '#ff79c6',
    200: '#ff79c6',
    300: '#ff79c6',
    400: '#ff79c6',
    500: '#ff79c6',
    600: '#ff79c6',
    700: '#ff79c6',
    800: '#ff79c6',
    900: '#ff79c6',
  },

  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  background: {
    dark: '#282a36', // Dracula Background
    darker: '#21222c',
    lighter: '#44475a', // Dracula Current Line
  },

  success: {
    light: '#86efac',
    main: '#22c55e',
    dark: '#15803d',
  },

  error: {
    light: '#fca5a5',
    main: '#ef4444',
    dark: '#b91c1c',
  },

  warning: {
    light: '#fed7aa',
    main: '#f97316',
    dark: '#c2410c',
  },

  info: {
    light: '#93c5fd',
    main: '#3b82f6',
    dark: '#1d4ed8',
  },
}

export type Colors = typeof colors
