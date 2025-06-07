import { SectionDivider } from '@/components/molecules/SectionDivider'
import type { FC } from 'react'

type SectionHeaderProps = {
  title: string
  className?: string
  position?: 'first' | 'middle'
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  className = '',
  position = 'middle',
}) => {
  return (
    <div className={className}>
      <SectionDivider title={title} position={position} />
    </div>
  )
}
