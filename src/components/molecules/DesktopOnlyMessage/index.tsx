'use client'

import { type FC } from 'react'
import { TypewriterText } from '@/components/atoms/TypewriterText'
import { DesktopOnlyMessageProps } from '@/components/molecules/DesktopOnlyMessage/types'

export const DesktopOnlyMessage: FC<DesktopOnlyMessageProps> = ({ className = '' }) => (
  <div className={`flex ${className}`}>
    <div className="bg-[#282a36] text-[#6272a4] text-sm py-2 px-2 select-none border-r border-[#44475a]">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="text-right">
          {i + 1}
        </div>
      ))}
    </div>
    <div className="flex-1 p-2">
      <div className="text-[#ff79c6] font-semibold">🚫 Desktop Only</div>
      <div className="text-[#f8f8f2]">
        This site is only available on <span className="text-[#8be9fd]">desktop environment</span>
      </div>
      <div className="text-[#bd93f9]">
        <TypewriterText text="Not accessible on smartphones or tablets." speed={100} delay={10} />
      </div>
      <div className="mt-4">
        <div className="text-[#ffb86c] text-sm">
          <TypewriterText text="Please access from a desktop browser." speed={100} delay={10} />
        </div>
        <div className="text-[#6272a4] text-xs mt-2">Theme: Dracula</div>
      </div>
    </div>
  </div>
)
