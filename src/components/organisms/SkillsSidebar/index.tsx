import { LEARNING_ROADMAP, PROFILE, SKILLS } from '@/utils/constants/about-me'
import type { Skill } from '@/utils/constants/about-me'

type SkillGroupProps = {
  category: string
  skills: ReadonlyArray<Skill>
}

const SkillGroup = ({ category, skills }: SkillGroupProps) => {
  return (
    <div className='mb-5'>
      <h3 className='font-semibold text-[#8be9fd] mb-2 text-sm'>{category}</h3>
      <div className='space-y-1.5'>
        {skills.map(skill => (
          <div key={skill.name} className='flex justify-between'>
            <span className='text-[#f8f8f2] text-xs'>{skill.name}</span>
            <span className='text-[#f1fa8c] text-xs'>{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const SkillsSidebar = () => {
  const { favorites } = PROFILE

  return (
    <div className='bg-[#313442] p-4 rounded-lg sticky top-4'>
      <h2 className='text-lg font-bold mb-5 text-white'>スキルセット</h2>

      {SKILLS.map(category => (
        <SkillGroup key={category.category} category={category.category} skills={category.skills} />
      ))}

      <div className='mt-5'>
        <h3 className='font-semibold text-[#8be9fd] mb-2 text-sm'>学習中/今後の目標</h3>
        <ul className='list-disc list-inside text-xs text-[#f8f8f2]'>
          {LEARNING_ROADMAP.map((item, index) => (
            <li key={index} className='mb-1'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-5'>
        <h3 className='font-semibold text-[#8be9fd] mb-2 text-sm'>お気に入り</h3>
        <div className='text-xs text-[#f8f8f2]'>
          <p className='mb-1'>
            <span className='font-medium text-[#ff79c6]'>言語:</span> {favorites.lang}
          </p>
          <p className='mb-1'>
            <span className='font-medium text-[#ff79c6]'>お菓子:</span> {favorites.snack}
          </p>
          <p>
            <span className='font-medium text-[#ff79c6]'>座右の銘:</span> {favorites.motto}
          </p>
        </div>
      </div>
    </div>
  )
}
