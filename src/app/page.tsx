import { EditorLayout } from '@/components/templates/EditorLayout'
import { styles } from '@/utils/styles/constants'

export default function Home() {
  return (
    <EditorLayout>
      <div className={styles.section}>
        <h1 className={styles.heading1}>Welcome to my portfolio</h1>
        <p className={styles.paragraph}>
          I&apos;m a software engineer passionate about building beautiful and functional
          applications.
        </p>
      </div>
    </EditorLayout>
  )
}
