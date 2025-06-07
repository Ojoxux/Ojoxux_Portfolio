/**
 * 拡張された学歴情報の型定義
 */
export type EnhancedEducation = {
  name: string
  nameEn: string
  departmentEn: string
  years: number
  totalYears: number
  currentYear?: number
  inProgress: boolean
  specialization?: string
  motto?: string
  description?: string
  activities?: string[]
  location?: string
}

/**
 * アニメーション用のバリアント設定
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
