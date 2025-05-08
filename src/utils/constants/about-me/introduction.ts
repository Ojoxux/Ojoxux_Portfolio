import { FileContent } from '@/components/molecules/DirectoryTree/types'

export const introduction: FileContent = {
  path: '/src/about-me/introduction.ojx',
  language: 'typescript',
  content: `/*──────────────────────────────────────────
 * Ojoxux – Self-Intro Code v0.1.0
 *   イミュータブルな自己紹介データ。
 *─────────────────────────────────────────*/

/* 型定義（純粋さが大事） */
type School = Readonly<{ name: string; years: number }>
export type DevProfile = Readonly<{
  handle: string
  role: 'Student Frontend Developer'
  tagline: string
  mission: string
  hp: number
  arsenal: ReadonlyArray<string>
  education: ReadonlyArray<School>
  favorites: Readonly<{
    lang: string
    snack: string
    motto: string
  }>
}>

/* プロフィールデータ */
export const me: DevProfile = {
  handle: 'Ojoxux',
  role: 'Student Frontend Developer',
  tagline: '20歳、日本の学生フロントエンド開発者。カフェインを燃料に滑らかなUIを生成中☕️✨',
  mission: 'クリックした瞬間、思わずニヤリとするようなデザイン駆動プロダクトを創る。',
  hp: 80,
  arsenal: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  education: [
    { name: '山形県立鶴岡工業高校 – 情報通信科', years: 3 },
    { name: '新潟コンピュータ専門学校 – IT総合学科 情報システム専攻', years: 3 },
  ],
  favorites: {
    lang: 'TypeScript',
    snack: '堅揚げポテト うす塩味',
    motto: 'Ship > Perfect',
  },
}

/* ---- utils ---- */
const calculateCoffeeBoost = (hp: number): string => {
  if (hp >= 100) return '覚醒モード✨'
  if (hp > 70)  return '絶好調☕️☕️☕️'
  if (hp > 50)  return 'まあまあかな☕️'
  return 'コーヒー飲みたい…'
}

/* プロフィールから要約文を生成 */
const createSummary = (profile: DevProfile): string => \`
  Handle: \${profile.handle} (\${profile.role})
  Mission: \${profile.mission}
  Arsenal: \${profile.arsenal.join(', ')}
  Boost: \${calculateCoffeeBoost(profile.hp)}\`

export const meta = {
  version: '0.1.0',
  lastUpdated: '2025-04-28',
}

/* ---- EOF ---- */`,
}
