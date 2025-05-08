import type { FileContent } from '@/components/molecules/DirectoryTree/types'

export const bachimegu: FileContent = {
  path: '/src/projects/bachimegu.ojx',
  language: 'markdown',
  content: `# ばちめぐ - アニメグッズ交換管理アプリ

## 概要
アニメグッズの交換を管理するための PWA アプリケーションです。ユーザーは交換相手との取引情報を記録し、発送日などを管理できます。「ばちらめぐる」ファンのために特別にデザインされています。

## 主な機能
- アカウント登録・ログイン機能
- 取引管理（交換/譲渡/買取）
- 発送日のカレンダー表示
- 取引検索・フィルタリング
- オフライン対応

## 技術スタック

### フロントエンド
- Next.js 15.2.4
- React 19.0.0
- TypeScript
- next-pwa（開発予定）

### バックエンド
- Supabase（認証・データベース）
- Hono（API フレームワーク、Swagger UI）

### スタイリング
- TailwindCSS
- Radix UI（コンポーネントライブラリ）
- Framer Motion（アニメーション）

### フォーム・バリデーション
- react-hook-form
- zod

### UI/UX
- next-themes（ダークモード）
- sonner（トースト通知）
- nprogress（ローディングインジケーター）

### 開発ツール
- ESLint
- Prettier
- PostCSS

### デプロイ
- Vercel

## 今後の機能追加
- グッズカテゴリーごとに管理する
- 相手の Twitter リンクカード的なやつ
- 追跡番号はいらない
- パフォーマンスチューニング`,
}
