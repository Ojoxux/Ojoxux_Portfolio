import { EditorNav } from '@/components/organisms/EditorNav'
import { BottomNav } from '@/components/organisms/BottomNav'
import { EditorLayoutProps } from './types'
import { styles } from '@/utils/styles/constants'

export const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <EditorNav />
      <main className={`min-h-[calc(100vh-88px)] ${styles.container} flex items-center`}>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
