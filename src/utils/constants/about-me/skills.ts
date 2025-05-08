import { FileContent } from '@/components/molecules/DirectoryTree/types'

export const skills: FileContent = {
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
// console.log('Learning Roadmap:', learningRoadmap.join('\\n'));

export const meta = {
  version: '0.1.0',
  lastUpdated: '2025-04-28',
}

/* ---- EOF ---- */`,
}
