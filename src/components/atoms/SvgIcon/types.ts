import { ImageProps } from 'next/image'

export type SvgIconProps = Omit<ImageProps, 'width' | 'height'> & {
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
  className?: string
  src?: string
  alt?: string
}
