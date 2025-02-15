import React from 'react'
import Avatar from '@/components/atoms/Avatar'
import AboutSection from '@/components/molecules/AboutSection'
import { AboutMeContentProps } from './types'

const AboutMeContent: React.FC<AboutMeContentProps> = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#282a36] rounded-xl shadow-lg">
      <div className="flex flex-col items-center mb-8">
        <Avatar src="/profile.jpg" alt="プロフィール画像" size={120} />
        <h1 className="mt-4 text-4xl font-bold text-[#f8f8f2]">[あなたの名前]</h1>
      </div>
      <AboutSection title="自己紹介">
        <p>
          こんにちは、[あなたの名前]です。フルスタックエンジニアとして、最先端の技術を駆使し、ユーザーに最適な体験を提供することに情熱を注いでいます。
        </p>
      </AboutSection>
      <AboutSection title="スキルと技術">
        <ul className="list-disc list-inside">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS (Tailwind CSS)</li>
        </ul>
      </AboutSection>
      <AboutSection title="経歴・実績">
        <p>
          これまでに[企業名]や[プロジェクト名]で数多くのプロジェクトに携わり、業界内で高い評価を受けてきました。
        </p>
      </AboutSection>
      <AboutSection title="興味・趣味">
        <p>プログラミング以外では、アウトドア活動や音楽鑑賞、読書などを楽しんでいます。</p>
      </AboutSection>
      <AboutSection title="連絡先情報">
        <p>
          Email:{' '}
          <a href="mailto:example@example.com" className="text-[#50fa7b] underline">
            example@example.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#50fa7b] underline"
          >
            your-linkedin
          </a>
        </p>
      </AboutSection>
    </div>
  )
}

export default AboutMeContent
