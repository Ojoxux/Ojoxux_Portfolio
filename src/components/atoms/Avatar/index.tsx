import React from 'react'
import Image from 'next/image'
import { AvatarProps } from './types'

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 80 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full"
      style={{ border: '3px solid #6272a4' }}
    />
  )
}

export default Avatar
