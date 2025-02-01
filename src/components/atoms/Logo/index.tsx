import { LogoProps } from './types'

export const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={`flex items-center px-10 text-gray-400 border-r border-[#44475a] text-base font-medium ${className}`}
    >
      jou-okuyama
    </div>
  )
}
