import { FileContent } from '@/components/molecules/DirectoryTree/types'
import { introduction } from './introduction'
import { skills } from './skills'
import { experience } from './experience'
import { contact } from './contact'
import { ojoxuxrc } from './ojoxuxrc'

export const aboutMeFiles: Record<string, FileContent> = {
  '/src/about-me/introduction.ojx': introduction,
  '/src/about-me/skills.ojx': skills,
  '/src/about-me/experience.ojx': experience,
  '/src/about-me/contact.ojx': contact,
  '/src/.ojoxuxrc': ojoxuxrc,
}

export * from './structure'
