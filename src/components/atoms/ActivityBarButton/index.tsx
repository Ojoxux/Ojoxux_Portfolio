interface ActivityBarButtonProps {
  icon: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export const ActivityBarButton: React.FC<ActivityBarButtonProps> = ({
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
          w-8 h-8 flex items-center justify-center
          transition-colors
          ${
            isActive ? 'text-[#f8f8f2] bg-[#44475a] rounded' : 'text-[#bd93f9] hover:text-[#ff79c6]'
          }
        `}
    >
      {icon}
    </button>
  )
}
