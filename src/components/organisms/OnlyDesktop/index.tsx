import React from 'react'

export const OnlyDesktop: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#282a36] text-[#f8f8f2] font-mono">
    <div className="bg-[#44475a]/80 rounded-xl p-8 shadow-2xl text-center border border-[#6272a4]/40">
      <h1 className="text-3xl font-bold mb-4 text-[#ff79c6] tracking-wide select-none">
        🚫 PC専用サイト
      </h1>
      <p className="text-lg mb-2 text-[#f8f8f2]">
        このサイトは <span className="text-[#8be9fd]">デスクトップ環境</span>{' '}
        でのみご利用いただけます。
      </p>
      <p className="text-base text-[#bd93f9] mb-4">
        スマートフォン・タブレットではご覧いただけません。
      </p>
      <div className="mt-6 flex flex-col items-center gap-2">
        <span className="text-[#ffb86c] text-sm">Please access from a desktop browser.</span>
        <span className="text-[#6272a4] text-xs">Theme: Dracula</span>
      </div>
    </div>
  </div>
)
