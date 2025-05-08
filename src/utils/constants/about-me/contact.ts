import type { FileContent } from '@/components/molecules/DirectoryTree/types'

export const contact: FileContent = {
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
//   links.map(l => l ? \`\${l.label}: \${l.link}\` : '').join('\\n');

// 使用例（コメントアウト）
// console.log(formatLinks(socialLinks));

export const meta = {
  version: '0.1.0',
  lastUpdated: '2025-04-28',
}

/* ---- EOF ---- */`,
}
