import type { Config } from 'tailwindcss'
import { colors } from './src/utils/theme/colors'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'apple-jp': [
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'YuGothic',
          'Yu Gothic',
          'Meiryo',
          'sans-serif',
        ],
        'sf-pro': ['var(--font-sf-pro)', 'sans-serif'],
        'apple-garamond': ['var(--font-instrument-serif)', 'serif'],
      },
      colors: {
        primary: colors.primary,
        gray: colors.gray,
        background: colors.background,
        success: colors.success,
        error: colors.error,
        warning: colors.warning,
        info: colors.info,
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        slideIn: 'slideIn 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        spin: 'spin 1s linear infinite',
        'cursor-blink': 'blink 1s step-end infinite',
        'text-reveal': 'textReveal 1.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        textReveal: {
          '0%': { color: 'rgb(71, 85, 105)' },
          '100%': { color: 'rgb(255, 255, 255)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
