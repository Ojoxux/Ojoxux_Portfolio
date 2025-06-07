import { PROFILE } from '@/utils/constants/about-me'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { EnhancedEducation } from './type'
import { useRef } from 'react'

export const AcademicHistory = () => {
  const { education } = PROFILE
  const sectionRef = useRef<HTMLDivElement>(null)

  // スクロール視差効果のための値を計算
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // 背景要素のためのアニメーション値
  // const backgroundYPosition = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  // const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.08, 0.08, 0])
  const decorLineHeight = useTransform(scrollYProgress, [0, 1], ['50%', '90%'])

  // テキストアニメーションのための値
  // const textOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1])
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15],
    ['rgb(100, 116, 139)', 'rgb(248, 248, 242)']
  )

  // 現在進行中の教育情報を追加
  const enhancedEducation: EnhancedEducation[] = education.map(school => {
    // 専門学校の情報を更新（4年制で現在3年生）
    if (school.name.includes('専門学校')) {
      return {
        ...school,
        totalYears: 4,
        currentYear: 3,
        inProgress: true,
        specialization: '情報システム専攻',
        description: '実践的なIT技術と情報システム開発の専門教育',
        location: '新潟県', // 所在地を追加
        activities: [
          'プログラミング（フロントエンド/バックエンド）',
          'クラウドサービス活用',
          '各種OS操作・管理',
          'Webアプリケーション開発',
          '情報セキュリティ',
          'ネイティブアプリ開発',
        ],
      }
    }
    // 工業高校の情報を更新
    if (school.name.includes('工業高校')) {
      return {
        ...school,
        totalYears: school.years,
        inProgress: false,
        specialization: '情報通信科',
        motto: '常に進化を続ける情報通信の最先端へ',
        description: 'ITの基礎から応用まで幅広い知識と技術を習得',
        location: '山形県', // 所在地を追加
        activities: [
          'コンピュータの回路や機器の仕組み',
          'プログラムの基礎と作成技術',
          '情報通信とネットワークの基礎知識',
          'コンピュータを用いた制御技術',
          '基礎的な電子工作',
        ],
      }
    }
    return {
      ...school,
      totalYears: school.years,
      inProgress: false,
    }
  })

  return (
    <div ref={sectionRef} className='relative mb-40 px-0 lg:pl-4 xl:pl-8 overflow-hidden'>
      {/* 背景装飾 - より印象的に */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {/* 左側の装飾線 */}
        <motion.div
          className='absolute left-4 lg:left-10 top-1/4 w-px'
          style={{ height: decorLineHeight }}
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.15 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='h-full w-full bg-gradient-to-b from-transparent via-[#bd93f9] to-transparent' />
        </motion.div>

        {/* 装飾的な円要素 - 複数配置 */}
        <motion.div
          className='absolute top-1/3 right-20 w-64 h-64 rounded-full opacity-5'
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='w-full h-full rounded-full bg-gradient-radial from-[#bd93f9] to-transparent' />
        </motion.div>

        <motion.div
          className='absolute bottom-1/4 left-20 w-40 h-40 rounded-full opacity-5'
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.3]),
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className='w-full h-full rounded-full bg-gradient-radial from-[#ff79c6] to-transparent' />
        </motion.div>
      </div>

      <SectionHeader title='Education' />

      {/* セクションヘッダー - 画像に合わせたモダンなタイポグラフィデザイン */}
      <header className='mt-32 mb-36 relative mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 lg:gap-16 px-0'>
          <div className='pl-0 lg:pl-0 ml-0'>
            {/* 新しいタイトルデザイン - レフトアライン */}
            <div className='relative mb-8 ml-4 lg:ml-0'>
              {/* "Education" テキスト - Inter Extra Boldフォントで太字表示 */}
              <motion.h2
                className='font-sf-pro font-extrabold text-7xl lg:text-9xl xl:text-[11rem] tracking-tighter leading-[0.85] text-slate-400'
                style={{ color: textColor }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-10%' }}
              >
                Education
              </motion.h2>

              {/* "History" テキスト - 線のアニメーションと同期 */}
              <motion.span
                className='font-instrument-serif block text-7xl lg:text-9xl xl:text-[11rem] text-[#bd93f9] tracking-normal leading-[0.85] -mt-2 relative'
                initial={{ opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
              >
                <motion.span
                  className='absolute inset-0 overflow-hidden'
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.32, 0.72, 0.24, 0.99],
                  }}
                  viewport={{ once: true }}
                >
                  <span className='inline-block'>History</span>
                </motion.span>
                <span className='opacity-0'>History</span>
              </motion.span>

              {/* Historyの下の装飾 */}
              <motion.div
                className='relative mt-6 flex items-center ml-1'
                initial={{ opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
              >
                {/* Historyの下の丸と線（連動するアニメーション） */}
                <div className='flex items-center'>
                  <motion.div
                    className='h-6 w-6 rounded-full bg-[#bd93f9] relative z-10'
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      ease: [0.17, 0.67, 0.83, 0.97],
                    }}
                    viewport={{ once: true }}
                  >
                    {/* 円から広がるエフェクト */}
                    <motion.div
                      className='absolute inset-0 rounded-full bg-[#bd93f9]/30'
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1.5, opacity: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.8,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>

                  {/* 線のコンテナ */}
                  <div className='h-[3px] w-24 lg:w-96 relative overflow-hidden ml-0'>
                    {/* 線のアニメーション */}
                    <motion.div
                      className='absolute top-0 left-0 w-full h-full bg-[#bd93f9]'
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5, // Historyテキストと同じdelayに設定
                        ease: [0.32, 0.72, 0.24, 0.99],
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className='max-w-xl self-end px-0 lg:pl-0 lg:pr-8 mt-24 md:mt-32'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: '-10%' }}
          >
            <div className='relative pl-4 pr-1'>
              <div className='relative'>
                <p className='text-[10px] text-[#8be9fd]/50 tracking-wider mb-2 font-sf-pro'>
                  I am a developer focused on
                </p>

                <div className='mb-2 overflow-hidden'>
                  <h2 className='text-[4.8rem] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] text-white font-black leading-[0.9] tracking-tighter font-sf-pro'>
                    ACADEMIC
                  </h2>
                  <h2 className='text-[4.8rem] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] text-white font-black leading-[0.9] tracking-tighter font-sf-pro'>
                    JOURNEY
                  </h2>
                  <h2 className='text-[4.2rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-[#ff79c6] font-normal leading-[0.9] tracking-tight font-instrument-serif'>
                    education
                  </h2>
                </div>

                <p className='text-[10px] text-white/60 tracking-wider font-sf-pro mt-3'>
                  情報技術の基礎から応用まで、培った知識と経験の歩み
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* メインコンテンツ */}
      {/* TODO: あまりUI気に入ってないから、治したい */}
      <div className='max-w-6xl mx-auto'>
        {enhancedEducation.map((school, index) => {
          // 各学校カードのためのスクロール進捗を作成
          const cardRef = useRef<HTMLDivElement>(null)
          const { scrollYProgress: cardProgress } = useScroll({
            target: cardRef,
            offset: ['start end', 'center center'],
          })

          // カード要素のための視差効果
          const cardScale = useTransform(cardProgress, [0, 1], [0.92, 1])
          const cardOpacity = useTransform(cardProgress, [0, 1], [0.3, 1])
          const cardYOffset = useTransform(cardProgress, [0, 1], ['8%', '0%'])

          return (
            <motion.div
              key={school.name}
              ref={cardRef}
              className='mb-40 last:mb-0'
              style={{
                scale: cardScale,
                opacity: cardOpacity,
                y: cardYOffset,
              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-16 relative'>
                {/* 左側カラム - 学校情報 */}
                <div className='relative'>
                  {/* インデックス番号 */}
                  <motion.div
                    className='absolute -top-10 -left-4 lg:-left-10 text-[12rem] font-black text-[#44475a]/10 leading-none z-0 select-none'
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true, margin: '-15%' }}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </motion.div>

                  <div className='relative z-10'>
                    {/* 学校英語名 */}
                    <motion.h3
                      className='text-4xl lg:text-5xl font-bold text-[#f8f8f2] tracking-tight mb-4'
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-15%' }}
                    >
                      {school.nameEn}
                    </motion.h3>

                    {/* 学部/学科 英語名 */}
                    <motion.div
                      className='mb-4'
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, margin: '-15%' }}
                    >
                      <span className='text-xl text-[#bd93f9] tracking-tight font-semibold'>
                        {school.departmentEn}
                      </span>
                    </motion.div>

                    {/* 日本語名 */}
                    <motion.div
                      className='mb-6 bg-[#282a36]/30 border-l-2 border-[#bd93f9] pl-4 py-3 overflow-hidden'
                      initial={{ opacity: 0, x: -20, width: '80%' }}
                      whileInView={{ opacity: 1, x: 0, width: '100%' }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      viewport={{ once: true, margin: '-15%' }}
                    >
                      <span className='text-sm text-[#f8f8f2]/70 block'>{school.name}</span>
                    </motion.div>

                    {/* 情報メタデータ */}
                    <div className='grid grid-cols-2 gap-6 mb-8'>
                      {/* 地域 */}
                      <motion.div
                        className='flex flex-col'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true, margin: '-15%' }}
                      >
                        <span className='text-xs text-[#6272a4] uppercase tracking-wider font-medium mb-1'>
                          所在地
                        </span>
                        <span className='text-[#f8f8f2]'>{school.location}</span>
                      </motion.div>

                      {/* 期間 */}
                      <motion.div
                        className='flex flex-col'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.55 }}
                        viewport={{ once: true, margin: '-15%' }}
                      >
                        <span className='text-xs text-[#6272a4] uppercase tracking-wider font-medium mb-1'>
                          期間
                        </span>
                        <span className='flex items-baseline text-[#f8f8f2]'>
                          <span className='text-2xl font-bold mr-1'>{school.years}</span>
                          <span className='text-sm text-[#f8f8f2]/70'>年間</span>
                        </span>
                      </motion.div>
                    </div>

                    {/* 現在進行中表示 */}
                    {school.inProgress && (
                      <motion.div
                        className='mb-8 inline-flex'
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true, margin: '-15%' }}
                      >
                        <div className='bg-[#8be9fd]/10 border border-[#8be9fd]/20 rounded-md px-4 py-3'>
                          <div className='flex items-center text-[#8be9fd]'>
                            <span className='w-2 h-2 bg-[#8be9fd] rounded-full mr-3 animate-pulse' />
                            <span className='font-medium'>
                              現在 {school.currentYear}年目 / {school.totalYears}年制
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* モットー (工業高校の場合) */}
                    {school.motto && (
                      <motion.div
                        className='mb-6 italic'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true, margin: '-15%' }}
                      >
                        <div className='relative pl-6'>
                          <span className='absolute left-0 top-0 text-[#ff79c6] text-2xl font-bold'>
                            "
                          </span>
                          <p className='text-base text-[#f8f8f2]/80 leading-relaxed'>
                            {school.motto}
                          </p>
                          <span className='absolute right-0 bottom-0 text-[#ff79c6] text-2xl font-bold'>
                            "
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* 右側カラム - 学習内容 */}
                <div>
                  {/* 説明文 */}
                  {school.description && (
                    <motion.div
                      className='mb-8'
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true, margin: '-15%' }}
                    >
                      <h4 className='text-xl font-bold text-[#f8f8f2] mb-4'>概要</h4>
                      <p className='text-base text-[#f8f8f2]/70 leading-relaxed'>
                        {school.description}
                      </p>
                    </motion.div>
                  )}

                  {/* 活動内容 */}
                  {school.activities && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true, margin: '-15%' }}
                    >
                      <h4 className='text-xl font-bold text-[#f8f8f2] mb-6 flex items-center'>
                        <span className='w-8 h-px bg-[#bd93f9] mr-3' />
                        学習内容
                      </h4>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5'>
                        {school.activities.map((activity, i) => (
                          <motion.div
                            key={i}
                            className='flex items-start'
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                            viewport={{ once: true, margin: '-15%' }}
                          >
                            <div className='w-6 h-6 rounded-full flex items-center justify-center bg-[#bd93f9]/10 text-[#bd93f9] mr-3 mt-0.5 shrink-0'>
                              <span className='text-sm font-bold'>→</span>
                            </div>
                            <span className='text-[#f8f8f2]/80'>{activity}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* セパレーター */}
              {index < enhancedEducation.length - 1 && (
                <motion.div
                  className='w-full h-px bg-gradient-to-r from-transparent via-[#44475a] to-transparent mt-20'
                  initial={{ opacity: 0, scaleX: 0.2 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: '-15%' }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
