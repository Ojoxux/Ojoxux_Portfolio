import type { FileContent } from '@/components/molecules/DirectoryTree/types'

export const experience: FileContent = {
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
}
