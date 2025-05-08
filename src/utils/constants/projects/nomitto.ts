import type { FileContent } from '@/components/molecules/DirectoryTree/types'

export const nomitto: FileContent = {
  path: '/src/projects/nomitto.ojx',
  language: 'markdown',
  content: `# のみっと！(Nomitto!)

## 概要
「のみっと！」は飲み会セッティングを簡単にするためのアプリケーションです。日程調整から店舗予約まで、飲み会の企画と運営をトータルにサポートします。

## 主な機能
- **ユーザープロフィール**:
  - お酒の強さ（初心者/中級者/上級者）を設定
  - 性別や生年月日などの基本情報登録
  - 飲み会に参加可能な時間帯の設定
  - 好みの場所・エリアの設定（位置情報連携）
- **友達機能**:
  - 友達検索と追加
  - チャット機能
  - オンラインステータス表示
- **グループ機能**:
  - グループ作成
  - グループチャット
- **イベント管理**:
  - 飲み会イベントの作成と参加
  - イベント詳細表示
  - イベント参加申し込み
- **位置情報連携**:
  - 現在地に基づく近隣エリア提案
  - 好みのエリア登録
- **通知機能**:
  - イベント通知
  - チャット通知

## アプリの特徴
お酒の強さや好みの時間帯・場所などを登録することで、相性の良い飲み仲間を見つけやすくし、飲み会の調整をスムーズに行えるようにしています。

## 技術スタック

### フロントエンド
- React 18
- React Router (v6)
- Material UI (MUI v6)
- Emotion (スタイリング)
- Framer Motion (アニメーション)
- React Hook Form (フォーム管理)
- Vite (ビルドツール)
- dayjs, date-fns (日付操作)

### バックエンド
- Firebase
  - Authentication (認証)
  - Firestore (データベース)
  - Realtime Database
- Express (サーバー)

### 地図/位置情報
- Google Maps JavaScript API

### その他
- axios (HTTP クライアント)
- OneSignal (通知)

### 開発ツール
- ESLint
- Prettier
- commitlint
- Nodemon`,
}
