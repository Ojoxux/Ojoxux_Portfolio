'use client'

import type { WindowControlsProps } from '@/components/atoms/WindowControls/types'
import type { FC } from 'react'

export const WindowControls: FC<WindowControlsProps> = ({ className = '' }) => (
  <div className={`flex gap-1.5 ${className}`}>
    <div className='w-3 h-3 rounded-full bg-[#ff5555] hover:bg-[#ff5555]/80 transition-colors' />
    <div className='w-3 h-3 rounded-full bg-[#f1fa8c] hover:bg-[#f1fa8c]/80 transition-colors' />
    <div className='w-3 h-3 rounded-full bg-[#50fa7b] hover:bg-[#50fa7b]/80 transition-colors' />
  </div>
)
