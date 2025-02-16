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
                name: 'introduction.ojx',
                type: 'file',
                path: '/src/about-me/introduction.ojx',
                icon: '🎯',
              },
              {
                name: 'skills.ojx',
                type: 'file',
                path: '/src/about-me/skills.ojx',
                icon: '⚡',
              },
              {
                name: 'experience.ojx',
                type: 'file',
                path: '/src/about-me/experience.ojx',
                icon: '🚀',
              },
              {
                name: 'contact.ojx',
                type: 'file',
                path: '/src/about-me/contact.ojx',
                icon: '💫',
              },
            ],
          },
        ],
      },
    ],
  },
]

export const fileContents: Record<string, FileContent> = {
  '/src/about-me/introduction.ojx': {
    path: '/src/about-me/introduction.ojx',
    language: 'javascript',
    content: `const developer = "[あなたの名前]";`,
  },
  '/src/about-me/skills.ojx': {
    path: '/src/about-me/skills.ojx',
    language: 'javascript',
    content: `const skills = {}`,
  },
  '/src/about-me/experience.ojx': {
    path: '/src/about-me/experience.ojx',
    language: 'javascript',
    content: `const experience = []`,
  },
  '/src/about-me/contact.ojx': {
    path: '/src/about-me/contact.ojx',
    language: 'javascript',
    content: `const contact = {}`,
  },
}
