import { colors } from './colors'
import { themeConfig } from './config'

export const theme = {
  colors,
  config: themeConfig,

  // メディアクエリ
  mediaQueries: {
    sm: `@media (min-width: ${themeConfig.breakpoints.sm})`,
    md: `@media (min-width: ${themeConfig.breakpoints.md})`,
    lg: `@media (min-width: ${themeConfig.breakpoints.lg})`,
    xl: `@media (min-width: ${themeConfig.breakpoints.xl})`,
  },

  // z-index管理
  zIndex: {
    modal: 1000,
    overlay: 900,
    drawer: 800,
    header: 700,
    dropdown: 600,
  },
}

export type Theme = typeof theme

type ShadeNumber = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type ColorWithShades = keyof Pick<typeof colors, 'primary' | 'gray'>

// テーマのユーティリティ関数
export const getColor = (color: ColorWithShades, shade: ShadeNumber = 500) => {
  return colors[color][shade]
}

export const getBreakpoint = (breakpoint: keyof typeof themeConfig.breakpoints) => {
  return themeConfig.breakpoints[breakpoint]
}
