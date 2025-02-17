interface StatusBarProps {
  language: string
}

export const StatusBar: React.FC<StatusBarProps> = ({ language }) => {
  return (
    <div className="h-6 bg-[#191a21] text-[#6272a4] flex items-center px-4 text-xs border-t border-[#44475a]">
      <div className="flex items-center gap-4">
        <span>{language}</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#50fa7b]" />
          Prettier
        </span>
      </div>
    </div>
  )
}
