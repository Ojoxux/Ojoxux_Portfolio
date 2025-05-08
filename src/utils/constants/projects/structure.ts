import type { FileStructure } from '@/components/molecules/DirectoryTree/types'

// プロジェクト専用のファイル構造を定義 (ルートパス基準に戻す)
export const projectsFileStructure: FileStructure[] = [
  {
    name: 'projects',
    type: 'directory',
    path: '/', // ベースパスをルートに戻す
    children: [
      {
        name: 'teamind',
        type: 'directory',
        path: '/teamind',
        children: [
          {
            name: 'teamind.ojx',
            type: 'file',
            path: '/teamind/teamind.ojx',
          },
          {
            name: 'demo.png',
            type: 'file',
            path: '/teamind/demo.png',
          },
        ],
      },
      {
        name: 'bachimegu',
        type: 'directory',
        path: '/bachimegu',
        children: [
          {
            name: 'bachimegu.ojx',
            type: 'file',
            path: '/bachimegu/bachimegu.ojx',
          },
          {
            name: 'demo.png',
            type: 'file',
            path: '/bachimegu/demo.png',
          },
        ],
      },
      {
        name: 'github-contribution-island',
        type: 'directory',
        path: '/github-contribution-island',
        children: [
          {
            name: 'github-contribution-island.ojx',
            type: 'file',
            path: '/github-contribution-island/github-contribution-island.ojx',
          },
          {
            name: 'demo.png',
            type: 'file',
            path: '/github-contribution-island/demo.png',
          },
        ],
      },
      {
        name: 'nomitto',
        type: 'directory',
        path: '/nomitto',
        children: [
          {
            name: 'nomitto.ojx',
            type: 'file',
            path: '/nomitto/nomitto.ojx',
          },
          {
            name: 'demo.png',
            type: 'file',
            path: '/nomitto/demo.png',
          },
        ],
      },
    ],
  },
]

// プロジェクトのコンテンツマッピング (キーをルートパス基準に戻す)
export const projectContentMapping: Record<string, string> = {
  '/teamind/teamind.ojx': '/src/projects/teamind.ojx',
  '/bachimegu/bachimegu.ojx': '/src/projects/bachimegu.ojx',
  '/github-contribution-island/github-contribution-island.ojx':
    '/src/projects/github-contribution-island.ojx',
  '/nomitto/nomitto.ojx': '/src/projects/nomitto.ojx',
}
