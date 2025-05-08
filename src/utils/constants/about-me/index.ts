import type { FileContent } from '@/components/molecules/DirectoryTree/types'
import { contact } from './contact'
import { experience } from './experience'
import { introduction } from './introduction'
import { ojoxuxrc } from './ojoxuxrc'
import { skills } from './skills'

export const aboutMeFiles: Record<string, FileContent> = {
  '/src/about-me/introduction.ojx': introduction,
  '/src/about-me/skills.ojx': skills,
  '/src/about-me/experience.ojx': experience,
  '/src/about-me/contact.ojx': contact,
  '/src/.ojoxuxrc': ojoxuxrc,
}

export * from './structure'
