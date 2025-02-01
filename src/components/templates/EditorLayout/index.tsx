import { EditorNav } from '@/components/organisms/EditorNav'
import { EditorLayoutProps } from './types'
import { styles } from '@/utils/styles/constants'

export const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <div className="min-h-screen bg-background-dark">
      <EditorNav />
      <main className={`min-h-[calc(100vh-44px)] ${styles.container} ${styles.paragraph}`}>
        {children}
      </main>
    </div>
  )
}
