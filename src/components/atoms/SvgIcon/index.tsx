import React from 'react'
import Image from 'next/image'
import { SvgIconProps } from './types'

export const SvgIcon: React.FC<SvgIconProps> = ({
  className = '',
  width = 24,
  height = 24,
  src = '/assets/ojx-logo.svg',
  alt = 'Icon',
  ...props
}) => {
  if (!src) {
    return (
      <span style={{ width, height, display: 'inline-block' }} className={className}>
        ?
      </span>
    )
  }

  return (
    <Image src={src} alt={alt} className={className} width={width} height={height} {...props} />
  )
}
