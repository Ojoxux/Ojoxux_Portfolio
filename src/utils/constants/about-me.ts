// About Me ページで使用するデータ定義
// 型定義
export type DevProfile = Readonly<{
  handle: string
  role: string
  tagline: string
  mission: string
  arsenal: ReadonlyArray<string>
  education: ReadonlyArray<
    Readonly<{ name: string; years: number; nameEn: string; departmentEn: string }>
  >
  favorites: Readonly<{
    lang: string
    snack: string
    motto: string
  }>
}>

export type Job = Readonly<{
  company: string
  duration: string
  role: string
  platform?: string
  technologies: ReadonlyArray<string>
  responsibilities: ReadonlyArray<string>
}>

export type Experience = Readonly<{
  internships: ReadonlyArray<Job>
  personalProjects: ReadonlyArray<string>
}>

export type Skill = Readonly<{ name: string; level: string }>
export type SkillCategory = Readonly<{
  category: string
  skills: ReadonlyArray<Skill>
}>

export type SpecializationCardType = Readonly<{
  icon: string
  title: string
  description: string
}>

// スキルレベル定義
export const SKILL_LEVEL = Object.freeze({
  MASTER: '★★★★★',
  ADVANCED: '★★★★☆',
  INTERMEDIATE: '★★★☆☆',
  BASIC: '★★☆☆☆',
  BEGINNER: '★☆☆☆☆',
})

// プロフィール情報
export const PROFILE: DevProfile = {
  handle: 'Ojoxux',
  role: 'Student Frontend Developer',
  tagline:
    '新潟のコンピュータ専門学校に通う学生フロントエンドエンジニアです。モダンなUI開発を日々学んでいます。',
  mission: 'ユーザーに新しい体験をもたらすWebサイトやアプリケーションの開発を目指しています。',
  arsenal: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  education: [
    {
      name: '山形県立鶴岡工業高校 – 情報通信科',
      years: 3,
      nameEn: 'Tsuruoka Technical High School',
      departmentEn: 'Information & Communication Technology',
    },
    {
      name: '新潟コンピュータ専門学校 – IT総合学科 情報システム専攻',
      years: 3,
      nameEn: 'Niigata Computer College',
      departmentEn: 'Information Technology & Systems',
    },
  ],
  favorites: {
    lang: 'TypeScript',
    snack: '堅揚げポテト うす塩味',
    motto: 'Ship > Perfect',
  },
}

// スキル情報
export const SKILLS: ReadonlyArray<SkillCategory> = [
  {
    category: 'フロントエンド',
    skills: [
      { name: 'React', level: SKILL_LEVEL.ADVANCED },
      { name: 'Next.js', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'TypeScript', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'HTML', level: SKILL_LEVEL.MASTER },
      { name: 'CSS', level: SKILL_LEVEL.ADVANCED },
      { name: 'JavaScript', level: SKILL_LEVEL.ADVANCED },
      { name: 'Tailwind CSS', level: SKILL_LEVEL.ADVANCED },
    ],
  },
  {
    category: 'バックエンド',
    skills: [
      { name: 'Node.js', level: SKILL_LEVEL.ADVANCED },
      { name: 'Express', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'Go', level: SKILL_LEVEL.BEGINNER },
      { name: 'PHP', level: SKILL_LEVEL.BEGINNER },
      { name: 'Laravel', level: SKILL_LEVEL.BEGINNER },
      { name: 'Hono', level: SKILL_LEVEL.BEGINNER },
    ],
  },
  {
    category: 'その他',
    skills: [
      { name: 'C', level: SKILL_LEVEL.ADVANCED },
      { name: 'C++ (AtCoder)', level: SKILL_LEVEL.ADVANCED },
      { name: 'C# (WinForms)', level: SKILL_LEVEL.ADVANCED },
      { name: 'C# (Unity)', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'Java', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'Python(AtCoder)', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'Flutter', level: SKILL_LEVEL.BEGINNER },
      { name: 'Swift (iOS)', level: SKILL_LEVEL.BEGINNER },
      { name: 'Firebase', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'Supabase', level: SKILL_LEVEL.INTERMEDIATE },
      { name: 'Docker', level: SKILL_LEVEL.BEGINNER },
      { name: 'Figma', level: SKILL_LEVEL.ADVANCED },
    ],
  },
]

// 学習ロードマップ
export const LEARNING_ROADMAP: ReadonlyArray<string> = [
  'パフォーマンス最適化の技法を習得',
  'アクセシビリティ(a11y)への深い理解',
  'バックエンドフレームワーク探索 (NestJS?)',
]

// 経験情報
export const EXPERIENCE: Experience = {
  internships: [
    {
      //company: '株式会社REHATCH',
      company: 'hogehoge',
      duration: '参加中',
      role: 'フロントエンドエンジニア',
      platform: 'キャリア開発支援プラットフォーム「LEAPLACE」',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      responsibilities: ['新機能追加', '既存機能の保守・改修'],
    },
    {
      // company: '合同会社DESIGN STUDIO K',
      company: 'fugafuga',
      duration: '短期',
      role: 'フロントエンド実装',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      responsibilities: ['Webサイトのフロントエンド実装', 'コードのリファクタリング'],
    },
    {
      // company: '株式会社ソネット',
      company: 'hogefuga',
      duration: '短期',
      role: 'ソフトウェア開発',
      technologies: ['C#', 'Windows Form App'],
      responsibilities: ['業務用ソフトウェア開発'],
    },
  ],
  personalProjects: ['このポートフォリオサイト開発', 'OSSコントリビュート', 'UI/UXデザインの研究'],
}

// 専門分野カード
export const SPECIALIZATION_CARDS: ReadonlyArray<SpecializationCardType> = [
  {
    icon: 'code',
    title: 'Frontend Dev',
    description:
      'React、Next.js、TypeScriptを使った滑らかなUIの実装。Tailwind CSSでモダンなデザインを構築。',
  },
  {
    icon: 'server',
    title: 'Backend Integration',
    description: 'Node.js、Express、Firebase、Supabaseを使ったバックエンド開発経験あり。',
  },
  {
    icon: 'tool',
    title: 'App Development',
    description: 'C#、Java、Pythonなど複数言語での開発経験。実務向けアプリケーション開発。',
  },
  {
    icon: 'project',
    title: 'Project Experience',
    description:
      '複数のインターンシップや個人プロジェクトを通じた実装経験。OSSコントリビュートにも挑戦中。',
  },
]

// メタデータ
export const META = {
  version: '1.0.0',
  lastUpdated: '2023-05-11',
}
