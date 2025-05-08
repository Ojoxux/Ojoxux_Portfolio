import Image from 'next/image'
import type { FC } from 'react'
import type { AvatarProps } from './types'

export const Avatar: FC<AvatarProps> = ({ src, alt, size = 80 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className='rounded-full'
      style={{ border: '3px solid #6272a4' }}
    />
  )
}
