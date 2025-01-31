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
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed', // main
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
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
    dark: '#0A1929',
    darker: '#060d15',
    lighter: '#112942',
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
