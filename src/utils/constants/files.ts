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
                name: 'introduction.ts',
                type: 'file',
                path: '/src/about-me/introduction.ts',
                icon: '📄',
              },
              {
                name: 'skills.ts',
                type: 'file',
                path: '/src/about-me/skills.ts',
                icon: '📄',
              },
              {
                name: 'experience.ts',
                type: 'file',
                path: '/src/about-me/experience.ts',
                icon: '📄',
              },
              {
                name: 'contact.ts',
                type: 'file',
                path: '/src/about-me/contact.ts',
                icon: '📄',
              },
            ],
          },
        ],
      },
    ],
  },
]

export const fileContents: Record<string, FileContent> = {
  '/src/about-me/introduction.ts': {
    path: '/src/about-me/introduction.ts',
    language: 'typescript',
    content: `const developer = "[あなたの名前]";`,
  },
  '/src/about-me/skills.ts': {
    path: '/src/about-me/skills.ts',
    language: 'typescript',
    content: `const skills = {}`,
  },
  '/src/about-me/experience.ts': {
    path: '/src/about-me/experience.ts',
    language: 'typescript',
    content: `const experience = []`,
  },
  '/src/about-me/contact.ts': {
    path: '/src/about-me/contact.ts',
    language: 'typescript',
    content: `const contact = {}`,
  },
}
