import { FileContent } from '@/components/molecules/DirectoryTree/types'

export const ojoxuxrc: FileContent = {
  path: '/src/.ojoxuxrc',
  language: 'json',
  content: `{
      // .ojoxuxrc – Seriously unserious global settings
      "theme": "dracula",
      /* どれだけカフェインを摂取したか (0-10) */
      "coffeeLevel": 8,
      /* 行番号を好きな数列で表示 */
      "lineNumberMode": "fibonacci",   // alt: "prime", "binary"
      /* 編集中にランダムで出る小ネタ */
      "easterEgg": {
        "asciiArt": true,              // cowsay が突然出る
        "rickRoll": false              // true にすると…？
      },    
      /* 開発中に励ましてくれるやつ */
      "motivation": [
        "Keep calm and npm run dev 🚀",
        "One more commit, one more coffee ☕️"
      ],    
      
      "meta": {
        "version": "0.1.0",
        "lastUpdated": "2025-04-28"
      }
    }`,
}
