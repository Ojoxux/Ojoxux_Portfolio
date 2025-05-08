import type { colors } from '../utils/theme/colors'
import type { themeConfig } from '../utils/theme/config'

// テーマの型定義
export interface Theme {
  colors: typeof colors
  config: typeof themeConfig
}

// コンポーネントの共通Props
export interface StyleProps {
  className?: string
  style?: React.CSSProperties
}

// サイズバリエーション
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// カラーバリエーション
export type ColorVariant = 'primary' | 'success' | 'error' | 'warning' | 'info'

// アニメーションバリエーション
export type AnimationVariant = 'fadeIn' | 'slideIn' | 'bounce' | 'pulse' | 'spin'

// レスポンシブブレイクポイント
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// スペーシング
export type Spacing = keyof typeof themeConfig.spacing

// グラデーション方向
export type GradientDirection =
  | 'to-r'
  | 'to-l'
  | 'to-t'
  | 'to-b'
  | 'to-tr'
  | 'to-tl'
  | 'to-br'
  | 'to-bl'

// コンポーネント固有の型
export interface ButtonProps extends StyleProps {
  variant?: ColorVariant
  size?: Size
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export interface InputProps extends StyleProps {
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
}

export interface CardProps extends StyleProps {
  padding?: Size
  hover?: boolean
  children: React.ReactNode
}

// アニメーション関連の型
export interface AnimationProps extends StyleProps {
  variant: AnimationVariant
  delay?: number
  duration?: number
  children: React.ReactNode
}

// レイアウト関連の型
export interface ContainerProps extends StyleProps {
  maxWidth?: Breakpoint
  padding?: Spacing
  center?: boolean
  children: React.ReactNode
}

// テキスト関連の型
export interface TextProps extends StyleProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption'
  gradient?: boolean
  children: React.ReactNode
}

// ゲーム関連の型
export interface GameBlockProps extends StyleProps {
  color?: string
  active?: boolean
  onClick?: () => void
}

export interface ScoreProps extends StyleProps {
  value: number
  label?: string
  variant?: 'default' | 'large'
}

// Emotion用の型拡張
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors
    config: typeof themeConfig
  }
}
