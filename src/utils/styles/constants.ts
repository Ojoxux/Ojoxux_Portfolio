import { themeConfig } from '../theme/config'

export const styles = {
  // レイアウト
  container: 'container mx-auto px-4',
  section: 'py-16 md:py-24',

  // フレックスとグリッド
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  gridCols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',

  // テキスト
  heading1: 'text-4xl md:text-6xl font-bold text-gradient',
  heading2: 'text-3xl md:text-4xl font-bold mb-6',
  heading3: 'text-2xl font-bold mb-4',
  paragraph: 'text-slate-300 leading-relaxed',

  // カード
  card: `
    bg-background-dark/80 
    backdrop-blur-sm 
    rounded-lg 
    p-6 
    shadow-lg 
    hover:shadow-primary/20 
    transition-shadow 
    duration-300
  `,

  // アニメーション
  fadeIn: 'animate-fadeIn',
  slideIn: 'animate-slideIn',

  // ゲーム関連
  gameBlock: `
    w-6 h-6 
    border border-primary-dark/30 
    rounded-sm
  `,

  // フォーム
  input: `
    w-full 
    bg-background-dark/50 
    border border-primary/20 
    rounded-md 
    px-4 py-2 
    focus:outline-none 
    focus:border-primary 
    transition-colors
  `,

  // その他
  glassmorphism: `
    bg-background-dark/80 
    backdrop-blur-sm 
    border border-primary/10 
    rounded-lg
  `,
}

export const TRANSITIONS = {
  default: 'all 0.3s ease',
  slow: 'all 0.6s ease',
  fast: 'all 0.15s ease',
}

export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
}

export const GRADIENTS = {
  primary: `linear-gradient(to right, ${themeConfig.colors.primary.light}, ${themeConfig.colors.primary.main})`,
  background: `linear-gradient(to bottom right, ${themeConfig.colors.background.dark}, ${themeConfig.colors.primary.dark})`,
}
