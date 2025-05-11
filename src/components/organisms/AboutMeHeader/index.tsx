import { PROFILE } from '@/utils/constants/about-me'

export const AboutMeHeader = () => {
  return (
    <div className='mb-8'>
      <h1 className='text-xl font-bold mb-2 text-white'>About me</h1>
      <p className='text-base text-[#a4b0be]'>{PROFILE.tagline}</p>
      <p className='mt-1 text-base text-[#a4b0be]'>{PROFILE.mission}</p>
    </div>
  )
}
