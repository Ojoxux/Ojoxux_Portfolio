import { TitleScreenProps } from '../types'

export const TitleScreen = ({ onStart, onClose, className = '' }: TitleScreenProps) => (
  <div className={`relative ${className} -mt-24`}>
    <div className="relative w-[600px] h-[500px] p-10 bg-[#282a36]/80 backdrop-blur-md rounded-xl border border-[#6272a4]/30 shadow-xl font-mono">
      {/* エディタのタブバー */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-[#282a36]/60 border-b border-[#6272a4]/30 rounded-t-xl flex items-center px-5 gap-2">
        <div className="flex items-center gap-1.5">
          {/* 赤いボタン：onClickでゲーム画面を閉じる */}
          <div onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#ff5555] cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#f1fa8c]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#50fa7b]" />
        </div>
        <span className="text-sm text-[#f8f8f2] ml-2">tetris.tsx</span>
      </div>

      {/* メインコンテンツ */}
      <div className="mt-6 space-y-10 pl-16 pr-4">
        {/* コード風のタイトル */}
        <div className="space-y-3">
          <div className="text-[#6272a4] text-base">{'// Welcome to'}</div>
          <div className="space-y-2">
            <div>
              <span className="text-[#ff79c6] text-xl">const</span>
              <span className="text-[#f8f8f2] text-xl"> title</span>
              <span className="text-[#ff79c6] text-xl"> =</span>
              <span className="text-[#f1fa8c] text-xl"> &quot;Ojoxux&apos;s TETRIS&quot;</span>
              <span className="text-[#f8f8f2] text-xl">;</span>
            </div>
            <div>
              <span className="text-[#ff79c6] text-xl">const</span>
              <span className="text-[#f8f8f2] text-xl"> version</span>
              <span className="text-[#ff79c6] text-xl"> =</span>
              <span className="text-[#bd93f9] text-xl"> 1.0</span>
              <span className="text-[#f8f8f2] text-xl">;</span>
            </div>
          </div>
        </div>

        {/* スタートボタン */}
        <div className="space-y-4">
          <div className="text-[#6272a4] text-base">{'// Press to start the game'}</div>
          <button
            onClick={onStart}
            className="group relative w-full px-5 py-3 bg-[#44475a] hover:bg-[#6272a4] border border-[#6272a4]/30 rounded-lg transition-all duration-300"
          >
            <span className="relative z-10 text-lg font-medium text-[#f8f8f2] group-hover:text-[#50fa7b] transition-colors">
              game.start()
            </span>
          </button>
        </div>

        {/* コントロール説明 */}
        <div className="space-y-3">
          <div className="text-[#6272a4] text-base">{'// Game controls'}</div>
          <div className="space-y-2">
            <div className="text-[#f8f8f2]">
              <span className="text-[#bd93f9]">↑</span> : rotate()
            </div>
            <div className="text-[#f8f8f2]">
              <span className="text-[#bd93f9]">←→</span> : move()
            </div>
            <div className="text-[#f8f8f2]">
              <span className="text-[#bd93f9]">↓</span> : softDrop()
            </div>
            <div className="text-[#f8f8f2]">
              <span className="text-[#bd93f9]">Space</span> : hardDrop()
            </div>
          </div>
        </div>
      </div>

      {/* 行番号のガター */}
      <div className="absolute left-0 top-12 bottom-0 w-14 border-r border-[#6272a4]/30 flex flex-col items-center py-10 space-y-2.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <div key={num} className="text-[#6272a4] text-sm">
            {num}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default TitleScreen
