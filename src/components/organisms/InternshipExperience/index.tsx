import { EXPERIENCE } from '@/utils/constants/about-me'
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import { useRef } from 'react'
import { type JobCardProps, containerVariants, itemVariants } from './types'

// Decorative shapes for enhanced visual aesthetics
const DecorativeShapes = () => (
  <>
    <div className='absolute -z-10 bottom-10 right-10 w-10 h-10 rounded-full bg-[#44475a]/20' />
  </>
)

// Internship Experience Card
const JobCard = ({ job, index }: JobCardProps) => {
  return (
    <motion.div
      className='relative overflow-hidden rounded-2xl bg-[#282a36]/90 backdrop-blur-lg shadow-md border border-[#44475a]/20 hover:shadow-lg hover:border-[#8be9fd]/20 transition-all duration-500 h-full group'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      {/* Decorative elements */}
      <DecorativeShapes />

      {/* Decorative top bar with animation */}
      <motion.div
        className='h-1 w-full bg-gradient-to-r from-[#bd93f9] via-[#ff79c6] to-[#8be9fd] group-hover:h-2 transition-all duration-500'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      {/* Artistic year/number display */}
      <motion.div
        className='absolute right-4 top-4 opacity-10 group-hover:scale-110 transition-all duration-500'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className='text-[#bd93f9] text-8xl font-black select-none leading-none tracking-tighter'>
          {index + 1}
        </span>
      </motion.div>

      {/* Main content with hover effect */}
      <div className='relative z-10 p-6 md:p-8 h-full'>
        {/* Company and role information */}
        <div className='flex flex-col mb-6 pb-4 border-b border-[#44475a]/30 relative overflow-hidden'>
          <motion.div variants={itemVariants} className='relative z-10'>
            <div className='flex flex-col'>
              <div className='overflow-hidden'>
                <motion.div
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                >
                  <h3 className='text-3xl md:text-4xl font-extralight text-white inline-block tracking-tight mb-2'>
                    {job.company}
                  </h3>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-3'>
                  <p className='text-lg text-[#bd93f9] font-light tracking-wide border-l-2 border-[#bd93f9] pl-3'>
                    {job.role}
                  </p>
                  <span className='text-[#8be9fd] tracking-wider text-sm bg-[#44475a]/20 px-4 py-1 rounded-full shadow-inner border border-[#44475a]/50 backdrop-blur-sm w-fit'>
                    {job.duration}
                  </span>
                  {job.platform && (
                    <span className='text-[#6272a4] text-sm opacity-80 tracking-wider bg-[#44475a]/10 px-3 py-1 rounded-full w-fit'>
                      {job.platform}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech stack with modern badges */}
        <div className='mb-6'>
          <h4 className='text-xs tracking-[0.3em] uppercase text-[#ff79c6] mb-3 flex items-center'>
            <span className='inline-block w-1.5 h-1.5 bg-[#ff79c6] rounded-full mr-2' />
            テクノロジー
          </h4>
          <div className='flex flex-wrap gap-2'>
            {job.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className='inline-block px-3 py-1 rounded-full bg-[#44475a]/30 border border-[#44475a]/50 text-[#f8f8f2] text-xs transition-all duration-300 hover:bg-[#44475a]/50'
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + i * 0.07,
                }}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  borderColor: '#ff79c6',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Key responsibilities in a more compact format */}
        <div>
          <h4 className='text-xs tracking-[0.3em] uppercase text-[#ff79c6] mb-3 flex items-center'>
            <span className='inline-block w-1.5 h-1.5 bg-[#ff79c6] rounded-full mr-2' />
            主な成果
          </h4>
          <ul className='space-y-2'>
            {job.responsibilities.slice(0, 2).map((resp, i) => (
              <motion.li
                key={i}
                className='text-[#f8f8f2] text-sm leading-relaxed pl-0 flex items-start group bg-[#44475a]/10 p-2 rounded-md hover:bg-[#44475a]/20 transition-all duration-300'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.12,
                }}
              >
                <span className='text-[#bd93f9] mr-2 font-normal transition-all duration-300 group-hover:text-[#ff79c6]'>
                  ◆
                </span>
                <span className='flex-1'>{resp}</span>
              </motion.li>
            ))}
            {job.responsibilities.length > 2 && (
              <motion.div
                className='text-[#bd93f9] text-xs mt-2 text-right italic pr-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8 }}
              >
                ...他{job.responsibilities.length - 2}件
              </motion.div>
            )}
          </ul>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className='absolute top-1/2 right-0 h-16 w-16 border border-[#bd93f9]/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:border-[#bd93f9]/40 transition-all duration-500'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      <motion.div
        className='absolute bottom-0 left-0 h-12 w-12 border border-[#8be9fd]/20 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:border-[#8be9fd]/40 transition-all duration-500'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
    </motion.div>
  )
}

export const InternshipExperience = () => {
  const { internships } = EXPERIENCE

  // コンポーネントの参照
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleTextRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // 表示状態を確実に検出するためにInView hookを使用
  const isTitleInView = useInView(titleRef, { amount: 0.3, once: true })

  // スクロールアニメーションのための設定
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // スムーズなアニメーション用にスプリングを使用
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // タイトルがピタッと固定されるためのアニメーション値
  const titleY = useTransform(smoothProgress, [0, 0.15], ['15%', '-5%'])
  const titleScale = useTransform(smoothProgress, [0, 0.15], [1, 1])
  const titleOpacity = useTransform(smoothProgress, [0, 0.15, 0.9, 1], [1, 1, 0.7, 0])

  // 背景が右からスライドしてくるアニメーション
  const backgroundX = useTransform(smoothProgress, [0.05, 0.2], ['100%', '0%'])
  const backgroundOpacity = useTransform(
    smoothProgress,
    [0.05, 0.2, 0.85, 0.95, 1],
    [0, 1, 1, 0.3, 0]
  )

  // カードが表示されるアニメーション（背景が完全に表示された後）
  const cardsOpacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1])
  const cardsScale = useTransform(smoothProgress, [0.25, 0.4], [0.9, 1])
  const cardsY = useTransform(smoothProgress, [0.25, 0.4], ['50px', '0px'])

  return (
    <div className='relative min-h-[300vh]' ref={sectionRef} id='experience-section'>
      {/* Internshipタイトル (スクロールに応じて上部に固定) */}
      <div
        className='sticky top-0 h-screen w-full flex items-start pt-3 justify-center z-30'
        ref={titleRef}
      >
        <motion.div
          className='relative'
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
          }}
        >
          <motion.h1
            className='text-[#bd93f9] text-[100px] md:text-[150px] lg:text-[210px] xl:text-[270px] font-extrabold tracking-[-0.02em] md:tracking-normal leading-none select-none whitespace-nowrap mx-auto font-inter'
            style={{ textShadow: '0 0 40px rgba(201, 173, 255, 0.2)' }}
          >
            <div className='overflow-hidden'>
              <motion.span
                className='inline-block'
                initial={{ y: '150%' }}
                animate={isTitleInView ? { y: 0 } : { y: '150%' }}
                transition={{
                  duration: 1.5,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.2,
                }}
              >
                InternShip
              </motion.span>
            </div>
          </motion.h1>
        </motion.div>
      </div>

      {/* スクロールすると右から表示される背景 */}
      <motion.div
        className='fixed w-[100vw] h-[100vh] left-0 top-0 z-20 pointer-events-none bg-[#191a21] origin-right overflow-hidden'
        style={{
          x: backgroundX,
          opacity: backgroundOpacity,
        }}
      >
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,#6272a440_0%,transparent_70%)] opacity-90' />
        <div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#bd93f9]/20 to-transparent' />
        <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#191a21] to-transparent' />
      </motion.div>

      {/* インターン経験カード */}
      <div className='relative mt-[180vh] pb-40 z-40' ref={cardsRef}>
        <div className='absolute inset-0 -z-10 bg-[#282a36] h-full w-full' />
        <motion.div
          className='relative max-w-6xl mx-auto px-4 lg:px-8 py-20'
          style={{
            opacity: cardsOpacity,
            scale: cardsScale,
            y: cardsY,
          }}
        >
          <div className='mb-16'>
            <h2 className='text-[#f8f8f2] text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-wider text-center'>
              私のインターンシップでの<span className='text-[#bd93f9] font-normal'>経験</span>
            </h2>
            <p className='text-[#f8f8f2]/80 text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed'>
              様々な企業でのインターンシップを通じて得たスキルと知識を紹介します。
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-16'>
            {internships.map((job, index) => {
              // カードの配置を計算
              const isWide = index % 3 === 0
              const isOffset = index % 2 === 0

              return (
                <motion.div
                  key={job.company}
                  className={`${isWide ? 'md:col-span-7' : 'md:col-span-5'} ${isOffset ? 'md:translate-y-12' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <JobCard job={job} index={index} />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
