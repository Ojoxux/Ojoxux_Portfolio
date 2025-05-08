import type { FileContent } from '@/components/molecules/DirectoryTree/types'

export const teamind: FileContent = {
  path: '/src/projects/teamind.ojx',
  language: 'markdown',
  content: `# Teamind

## 概要
NCC の AI ハッカソンで開発した Teams 録画要約・タグ付けアプリ。専門学校の授業録画を AI が自動で要約し、検索しやすくします。

## 背景と目的
専門学校の授業、特にオンライン授業やハイブリッド授業では、Teams での録画が増えていますが、後で特定の内容を見返すのが困難です。「AI が自動で文字起こしして内容をまとめる」という学生のニーズに応えるため開発しました。

## 主な機能
- Teams 録画ファイルのアップロード
- WhisperAI による文字起こし
- Claude (LLM) による要約生成
- 要約内容に基づいたタグの自動付与
- 要約・タグの検索機能

## 実装ステータス
- **実装済み**:
  - ユーザー認証（Supabase Auth）
  - 動画アップロード機能
  - 自動サムネイル生成機能
  - 関連画面（アップロードUI・一覧・再生ビューなど）

- **実装予定（優先）**:
  - Whisper を使った音声文字起こし処理
  - Claude を使った要約文生成
  - 要約結果の保存・表示
  - Claude による自動タグ生成
  - 授業ごとのまとめ／一覧画面
  - タグでの絞り込み・検索機能

- **将来追加機能**:
  - チャプター自動分割（Whisperのタイムスタンプ活用）
  - 再生位置を保存できるピン機能（＋メモ）

## 技術スタック

### フロントエンド
- Next.js（App Router, Turbopack）
- React
- Chakra UI / Icons
- Framer Motion（アニメーション）
- Jotai（ローカル状態）
- React Query（API状態管理）
- Supabase JS Client（認証・DB）
- Next Themes（ダークモード切替）
- TypeScript
- Biome（Lint / Format）

### バックエンド
- Supabase Edge Functions（Deno ランタイム）
- Cloudflare Workers（実行基盤）
- Hono（APIルーティング）
- Supabase（DB / 認証 / ストレージ）
- R2（動画・画像のオブジェクトストレージ）
- Cloudinary（画像・動画変換）
- Claude（@anthropic-ai/sdk）
- OpenAI Whisper（音声認識 API）
- Zod（バリデーション）

### 開発ツール
- Vitest（ユニットテスト）
- Wrangler（デプロイ CLI）
- Docker（ローカル開発用）

### デザイン
- Atomic Design（デザインシステム）`,
}
