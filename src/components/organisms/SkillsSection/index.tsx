'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type SkillItemProps = {
  title: string
  index: number
  isLast?: boolean // 最後のアイテムかどうか
}

// スキルアイテムコンポーネント（タイトルと説明文をペアにする）
const SkillItem = ({ title, index, isLast = false }: SkillItemProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // 要素が表示されたらアニメーションをトリガー
  useEffect(() => {
    if (inView && !isVisible) {
      // 少し遅延を入れてアニメーションをトリガー
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [inView, isVisible])

  // 説明文のアニメーション
  const descY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
  const descOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1])

  // アニメーションの遅延
  const delay = index * 0.2

  // スキルごとの説明文
  const descriptions = [
    'React、Next.js、TypeScriptを使った滑らかなUIの実装。Tailwind CSSでモダンなデザインを構築。',
    'ユーザーニーズを理解し、使いやすさと美しさを両立したデザイン。細部まで考え抜かれたインターフェース設計。',
    '既存の枠にとらわれない発想で新しい体験を創造。遊び心と機能性を兼ね備えたコンテンツ制作。',
  ]

  // 最後のアイテムの場合は下マージンなし
  const marginClass = isLast ? '' : 'mb-24 md:mb-32 lg:mb-40'

  // タイトルのアニメーション設定
  const titleVariants = {
    hidden: {
      x: 200 + index * 30,
      y: -150 + index * 30,
      opacity: 0,
      scale: 0.6,
      rotate: 15 - index * 5,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        duration: 1.5,
        delay,
      },
    },
  }

  return (
    <div ref={ref} className={`${marginClass}`}>
      <div ref={inViewRef} className='relative w-full'>
        {/* コンテナを追加してフレックスレイアウトに戻す */}
        <div className='flex flex-col md:flex-row items-start md:items-center'>
          {/* 左側：スキル説明文 */}
          <motion.div
            style={{ opacity: descOpacity, y: descY }}
            className='w-full md:w-[40%] mb-8 md:mb-0'
          >
            <div className='relative'>
              {/* 強調背景 */}
              <div className='absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full' />

              {/* テキスト */}
              <div className='pl-3 text-white text-lg md:text-xl leading-relaxed font-apple-jp tracking-wide'>
                {descriptions[index].split('。').map(
                  (sentence, i) =>
                    sentence && (
                      <p key={i} className='mb-3'>
                        {sentence}
                        {i < descriptions[index].split('。').length - 2 && '。'}
                      </p>
                    )
                )}
              </div>
            </div>
          </motion.div>

          {/* スペーサー */}
          <div className='hidden md:block md:w-[10%]' />

          {/* 右側：スキルタイトル */}
          <div className='w-full md:w-[50%]'>
            <AnimatePresence>
              <motion.div
                key={title}
                variants={titleVariants}
                initial='hidden'
                animate={isVisible ? 'visible' : 'hidden'}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[7rem] font-bold text-white whitespace-nowrap leading-none tracking-tight font-sf-pro'
              >
                {title}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SkillsSection = () => {
  const SKILL_TITLES = ['Frontend Dev', 'UI/UX Design', 'Creative'] as const

  return (
    <div className='w-full py-24'>
      <div className='container mx-auto px-4'>
        <div>
          {SKILL_TITLES.map((title, index) => (
            <SkillItem
              key={title}
              title={title}
              index={index}
              isLast={index === SKILL_TITLES.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
