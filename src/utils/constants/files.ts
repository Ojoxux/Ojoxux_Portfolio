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
  '/src/about-me/self-introduction.ts': {
    path: '/src/about-me/self-introduction.ts',
    language: 'typescript',
    content: `const developer = "[あなたの名前]";
  
  function getIntroduction() {
    return "フルスタックエンジニアとして、最先端の技術を駆使し、" +
           "ユーザーに最適な体験を提供することに情熱を注いでいます。";
  }
  
  export { developer, getIntroduction };`,
  },
  '/src/about-me/skills.ts': {
    path: '/src/about-me/skills.ts',
    language: 'typescript',
    content: `const skills = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML/CSS"
    ],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "Django"
    ],
    database: [
      "SQL",
      "NoSQL"
    ]
  };
  
  export { skills };`,
  },
}
