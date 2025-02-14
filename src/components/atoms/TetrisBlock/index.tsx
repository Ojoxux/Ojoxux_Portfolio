import React from 'react'
import { TetrisBlockProps } from './types'

const TetrisBlock: React.FC<TetrisBlockProps> = ({ color, isClearing = false, className = '' }) => {
  // isClearing true のときだけフェードアウト＆縮小のアニメーションを適用
  const style = isClearing
    ? {
        transition: 'opacity 300ms ease-out, transform 300ms ease-out',
        opacity: 0,
        transform: 'scale(0.8)',
        backgroundColor: color || 'transparent',
      }
    : {
        transition: 'none',
        opacity: 1,
        transform: 'scale(1)',
        backgroundColor: color || 'transparent',
      }

  return <div className={className} style={style} />
}

export default TetrisBlock
