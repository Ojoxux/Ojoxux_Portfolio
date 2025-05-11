import { SPECIALIZATION_CARDS } from '@/utils/constants/about-me'
import type { SpecializationCardType } from '@/utils/constants/about-me'
import { HiCode, HiServer } from 'react-icons/hi'
import { FaTools, FaLaptopCode } from 'react-icons/fa'

type SpecializationItemProps = {
  card: SpecializationCardType
}

const SpecializationItem = ({ card }: SpecializationItemProps) => {
  // アイコンとその背景色を選択
  const getIconConfig = () => {
    switch (card.icon) {
      case 'code':
        return {
          icon: <HiCode className='w-8 h-8 text-white' />,
          bgColor: 'bg-[#8be9fd] bg-opacity-20',
          borderColor: 'border-[#8be9fd]',
        }
      case 'server':
        return {
          icon: <HiServer className='w-8 h-8 text-white' />,
          bgColor: 'bg-[#ff79c6] bg-opacity-20',
          borderColor: 'border-[#ff79c6]',
        }
      case 'tool':
        return {
          icon: <FaTools className='w-7 h-7 text-white' />,
          bgColor: 'bg-[#bd93f9] bg-opacity-20',
          borderColor: 'border-[#bd93f9]',
        }
      case 'project':
        return {
          icon: <FaLaptopCode className='w-7 h-7 text-white' />,
          bgColor: 'bg-[#f1fa8c] bg-opacity-20',
          borderColor: 'border-[#f1fa8c]',
        }
      default:
        return {
          icon: <HiCode className='w-8 h-8 text-white' />,
          bgColor: 'bg-[#8be9fd] bg-opacity-20',
          borderColor: 'border-[#8be9fd]',
        }
    }
  }

  const { icon, bgColor, borderColor } = getIconConfig()

  return (
    <div className='mb-7'>
      <div className='flex items-start'>
        <div className='mr-5 flex-shrink-0 mt-1'>
          <div
            className={`w-12 h-12 ${bgColor} rounded-md flex items-center justify-center shadow-md border-2 ${borderColor}`}
          >
            {icon}
          </div>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-1 text-white'>{card.title}</h3>
          <p className='text-sm text-[#a4b0be]'>{card.description}</p>
        </div>
      </div>
    </div>
  )
}

export const SpecializationCards = () => {
  return (
    <div className='mb-8'>
      {SPECIALIZATION_CARDS.map((card, index) => (
        <SpecializationItem key={index} card={card} />
      ))}
    </div>
  )
}
