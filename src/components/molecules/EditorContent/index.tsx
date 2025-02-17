interface EditorContentProps {
  content: string[]
}

export const EditorContent: React.FC<EditorContentProps> = ({ content }) => {
  return (
    <div className="flex-1 relative">
      {/* インデントガイド */}
      <div className="absolute top-0 left-0 h-full w-px bg-[#44475a]/30" style={{ left: '16px' }} />
      <div className="absolute top-0 left-0 h-full w-px bg-[#44475a]/30" style={{ left: '32px' }} />

      {/* コードコンテンツ */}
      <pre className="p-0 m-0">
        <code className="block px-4 text-[#f8f8f2] text-sm leading-6">
          {content.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line || '\n'}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
