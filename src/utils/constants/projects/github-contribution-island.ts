import { FileContent } from '@/components/molecules/DirectoryTree/types'

export const githubContributionIsland: FileContent = {
  path: '/src/projects/github-contribution-island.ojx',
  language: 'markdown',
  content: `# こんとりのしま (GitHub Contribution Island)

## 概要
「あなたのコントリビューションが、あなただけの島を作り出す」をコンセプトにした、GitHubの活動を3D島として可視化するインタラクティブなアプリケーションです。

## 主な機能
- 3Dインタラクティブな島の表示（GitHubコントリビューションの可視化）
- リアルタイムデータ連携（GitHubアカウントとの連携）
- コントリビューション統計（活動量の可視化と分析）
- 目標設定機能（週間・月間の貢献目標を設定）
- 島のカスタマイズ（テーマカラーや島のデザイン変更）
- 認証機能（GitHub OAuthによるログイン）
- レスポンシブデザイン

## アプリの特徴
- コントリビューションが増えると島が成長
- 活動の種類によって異なる建物や要素が出現
- 長期的な活動で島の風景が変化
- どうぶつの森風のデザイン
- インタラクティブな3D表示

## 技術スタック

### フロントエンド
- TypeScript/JavaScript
- React
- React Router
- Three.js (3Dグラフィックス)
- React Three Fiber (@react-three/fiber)
- React Three Drei (@react-three/drei)
- Zustand (状態管理)

### スタイリング
- Tailwind CSS
- DaisyUI

### 認証/データ連携
- Firebase Authentication
- Octokit (@octokit/rest) - GitHub API連携

### 開発ツール
- Vite
- Vitest (テスト)
- Git/GitHub`,
}
