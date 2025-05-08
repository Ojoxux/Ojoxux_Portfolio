import type { FileStructure } from '@/components/molecules/DirectoryTree/types'

// about-me ページ専用のファイル構造を定義
export const aboutMeFileStructure: FileStructure[] = [
  {
    name: 'about-me',
    type: 'directory',
    path: '/', // ページ内での表示はルートから
    children: [
      {
        name: 'introduction.ojx',
        type: 'file',
        path: '/introduction.ojx',
      },
      {
        name: 'skills.ojx',
        type: 'file',
        path: '/skills.ojx',
      },
      {
        name: 'experience.ojx',
        type: 'file',
        path: '/experience.ojx',
      },
      {
        name: 'contact.ojx',
        type: 'file',
        path: '/contact.ojx',
      },
    ],
  },
  {
    name: '.ojoxuxrc',
    type: 'file',
    path: '/.ojoxuxrc',
  },
]

// about-me ページのコンテンツマッピング
export const aboutMeContentMapping: Record<string, string> = {
  '/introduction.ojx': '/src/about-me/introduction.ojx',
  '/skills.ojx': '/src/about-me/skills.ojx',
  '/experience.ojx': '/src/about-me/experience.ojx',
  '/contact.ojx': '/src/about-me/contact.ojx',
  '/.ojoxuxrc': '/src/.ojoxuxrc', // .ojoxuxrc のマッピングを追加
}
