import { FileStructure, FileContent } from '@/components/molecules/DirectoryTree/types'

export const fileStructure: FileStructure[] = [
  {
    name: 'portfolio-site',
    type: 'directory',
    path: '/',
    children: [
      {
        name: 'src',
        type: 'directory',
        path: '/src',
        children: [
          {
            name: 'about-me',
            type: 'directory',
            path: '/src/about-me',
            children: [
              {
                name: 'introduction.ojx',
                type: 'file',
                path: '/src/about-me/introduction.ojx',
              },
              {
                name: 'skills.ojx',
                type: 'file',
                path: '/src/about-me/skills.ojx',
              },
              {
                name: 'experience.ojx',
                type: 'file',
                path: '/src/about-me/experience.ojx',
              },
              {
                name: 'contact.ojx',
                type: 'file',
                path: '/src/about-me/contact.ojx',
              },
            ],
          },
          {
            name: '.ojoxuxrc',
            type: 'file',
            path: '/src/.ojoxuxrc',
          },
        ],
      },
    ],
  },
]

export const fileContents: Record<string, FileContent> = {
  '/src/about-me/introduction.ojx': {
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
  },

  '/src/about-me/skills.ojx': {
    path: '/src/about-me/skills.ojx',
    language: 'javascript',
    content: `/*
 * スキルセット定義 v1.3
 *   宣言的なスキルデータ。副作用なし。
 */

// スキルレベル（不変データとして定義）
const SkillLevel = Object.freeze({
  MASTER: '★★★★★',        //完全に理解した
  ADVANCED: '★★★★☆',      //チョットデキル
  INTERMEDIATE: '★★★☆☆',  //フツウ
  BASIC: '★★☆☆☆',         //触ったことアル
  BEGINNER: '★☆☆☆☆',        //ナニモワカラナイ
});

type Skill = Readonly<{ name: string; level: string }>
type SkillCategory = Readonly<{
  category: string;
  skills: ReadonlyArray<Skill>;
}>;

// スキルデータ（もちろんイミュータブル）
const mySkills: ReadonlyArray<SkillCategory> = [
  {
    category: 'フロントエンド',
    skills: [
      { name: 'React', level: SkillLevel.ADVANCED },
      { name: 'Next.js', level: SkillLevel.INTERMEDIATE },
      { name: 'TypeScript', level: SkillLevel.INTERMEDIATE },
      { name: 'HTML', level: SkillLevel.MASTER },
      { name: 'CSS', level: SkillLevel.ADVANCED },
      { name: 'JavaScript', level: SkillLevel.ADVANCED },
      { name: 'Tailwind CSS', level: SkillLevel.ADVANCED },
    ],
  },
  {
    category: 'バックエンド',
    skills: [
      { name: 'Node.js', level: SkillLevel.ADVANCED },
      { name: 'Express', level: SkillLevel.INTERMEDIATE },
      { name: 'Go', level: SkillLevel.BEGINNER },
      { name: 'PHP', level: SkillLevel.BEGINNER },
      { name: 'Laravel', level: SkillLevel.BEGINNER },
      { name: 'Hono', level: SkillLevel.BEGINNER },
    ],
  },
  {
    category: 'その他',
    skills: [
      { name: 'C', level: SkillLevel.ADVANCED },
      { name: 'C++ (AtCoder)', level: SkillLevel.ADVANCED },
      { name: 'C# (WinForms)', level: SkillLevel.ADVANCED },
      { name: 'C# (Unity)', level: SkillLevel.INTERMEDIATE },
      { name: 'Java', level: SkillLevel.INTERMEDIATE },
      { name: 'Python(AtCoder)', level: SkillLevel.INTERMEDIATE },
      { name: 'Flutter', level: SkillLevel.BEGINNER },
      { name: 'Swift (iOS)', level: SkillLevel.BEGINNER },
      { name: 'Firebase', level: SkillLevel.INTERMEDIATE },
      { name: 'Supabase', level: SkillLevel.INTERMEDIATE },
      { name: 'Docker', level: SkillLevel.BEGINNER },
      { name: 'Figma', level: SkillLevel.ADVANCED },
    ],
  },
];

// 特定カテゴリのスキルをフィルタリングする関数（例）
const filterSkillsByCategory = (categoryName: string) => 
  (skills: ReadonlyArray<SkillCategory>): ReadonlyArray<SkillCategory> =>
    skills.filter(c => c.category === categoryName);

// フロントエンドスキルだけ取り出す（例）
// const frontendSkills = filterSkillsByCategory('フロントエンド')(mySkills);

// 学習ロードマップ（これも不変リスト）
const learningRoadmap: ReadonlyArray<string> = [
  '// TODO: パフォーマンス最適化の技法を習得',
  '// TODO: アクセシビリティ(a11y)への深い理解',
  '// TODO: バックエンドフレームワーク探索 (NestJS?)',
];

// 状態を変えないログ出力（のフリ）
// console.log('--- Skill Inventory Defined ---');
// console.log('Learning Roadmap:', learningRoadmap.join('\n'));

export const meta = {
  version: '0.1.0',
  lastUpdated: '2025-04-28',
}

/* ---- EOF ---- */`,
  },
  '/src/about-me/experience.ojx': {
    path: '/src/about-me/experience.ojx',
    language: 'javascript',
    content: `/*
 * 経験ログ Ver.α
 *   過去の冒険の記録（イミュータブル）。
 */

// 型定義 (Readonly を添えて)
interface Job {
  readonly company: string;
  readonly duration: string;
  readonly role: string;
  readonly platform?: string;
  readonly technologies: ReadonlyArray<string>;
  readonly responsibilities: ReadonlyArray<string>;
}

interface Experience {
  readonly internships: ReadonlyArray<Job>;
  readonly personalProjects: ReadonlyArray<string>;
}

// 経験データ (const = 再代入不可)
const experienceData: Experience = {
  internships: [
    {
      company: "株式会社REHATCH",
      duration: "参加中",
      role: "フロントエンドエンジニア",
      platform: "キャリア開発支援プラットフォーム「LEAPLACE」",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      responsibilities: [
        "機能追加",
        "既存機能の保守・改修",
        "Firebase APIの実装",
        "フルスタックな経験積み中"
      ]
    },
    {
      company: "合同会社DESIGN STUDIO K",
      duration: "短期",
      role: "フロントエンド実装",
      technologies: ["HTML", "CSS", "JavaScript"],
      responsibilities: [
        "Webサイトのフロントエンド実装",
        "コードのリファクタリング"
      ]
    },
    {
      company: "株式会社ソネット",
      duration: "短期",
      role: "ソフトウェア開発",
      technologies: ["C#", "Windows Form App"],
      responsibilities: ["業務用ソフトウェア開発"]
    }
  ],
  personalProjects: [
    "このポートフォリオサイト開発",
    "OSSコントリビュート",
    "UI/UXデザインの研究"
  ]
};

// データからインターンシップだけを取得する関数（例）
const getInternships = (exp: Experience): ReadonlyArray<Job> => exp.internships;

// データから個人プロジェクトだけを取得する関数（例）
const getPersonalProjects = (exp: Experience): ReadonlyArray<string> => exp.personalProjects;

// 使用例（コメントアウト）
// const currentInternships = getInternships(experienceData);

export const meta = {
  version: '0.1.0',
  lastUpdated: '2025-04-28',
}

/* ---- EOF ---- */`,
  },
  '/src/about-me/contact.ojx': {
    path: '/src/about-me/contact.ojx',
    language: 'javascript',
    content: `/*
 * 連絡先エンドポイント定義
 *   データは不変。ここから世界に繋がる（かもしれない）。
 */

// 連絡先情報の型 (もちろん Readonly)
interface ContactInfo {
  readonly email: string;
  readonly github: string;
  readonly twitter?: string;
  readonly linkedin?: string;
}

// 連絡先データ (const)
const contactData: ContactInfo = {
  email: "j.okuyama.engineering@gmail.com",
  github: "https://github.com/Ojoxux",
  twitter: "https://twitter.com/Ojoxux",
};

// リンク種別を定義 (代数的データ型っぽく)
type LinkType = 'Email' | 'GitHub' | 'Twitter' | 'LinkedIn';

// リンク情報を生成する関数
const createLink = (type: LinkType, info: ContactInfo): { label: LinkType; value: string; link: string } | null => {
  switch (type) {
    case 'Email': return { label: type, value: info.email, link: \`mailto:\${info.email}\` };
    case 'GitHub': return { label: type, value: info.github, link: info.github };
    case 'Twitter': return info.twitter ? { label: type, value: info.twitter, link: info.twitter } : null;
    case 'LinkedIn': return info.linkedin ? { label: type, value: info.linkedin, link: info.linkedin } : null;
    default: return null;
  }
};

// 利用可能なリンク種別
const availableLinkTypes: LinkType[] = ['Email', 'GitHub', 'Twitter'];

// リンク情報を生成 (Maybe モナド的な発想で null をフィルタ)
const socialLinks = availableLinkTypes
  .map(type => createLink(type, contactData))
  .filter(link => link !== null);

// 表示用文字列を生成する関数（例）
// const formatLinks = (links: typeof socialLinks): string =>
//   links.map(l => l ? \`\${l.label}: \${l.link}\` : '').join('\n');

// 使用例（コメントアウト）
// console.log(formatLinks(socialLinks));

export const meta = {
  version: '0.1.0',
  lastUpdated: '2025-04-28',
}

/* ---- EOF ---- */`,
  },
  '/src/.ojoxuxrc': {
    path: '/src/.ojoxuxrc',
    language: 'json',
    content: `{
      // .ojoxuxrc – Seriously unserious global settings
      "theme": "dracula",
      /* どれだけカフェインを摂取したか (0-10) */
      "coffeeLevel": 8,
      /* 行番号を好きな数列で表示 */
      "lineNumberMode": "fibonacci",   // alt: "prime", "binary"
      /* 編集中にランダムで出る小ネタ */
      "easterEgg": {
        "asciiArt": true,              // cowsay が突然出る
        "rickRoll": false              // true にすると…？
      },    
      /* 開発中に励ましてくれるやつ */
      "motivation": [
        "Keep calm and npm run dev 🚀",
        "One more commit, one more coffee ☕️"
      ],    
      
      "meta": {
        "version": "0.1.0",
        "lastUpdated": "2025-04-28"
      }
    }`,
  },
}
