import type { FileContent } from '@/components/molecules/DirectoryTree/types'
import { bachimegu } from './bachimegu'
import { githubContributionIsland } from './github-contribution-island'
import { nomitto } from './nomitto'
import { teamind } from './teamind'

export const projectFiles: Record<string, FileContent> = {
  '/src/projects/teamind.ojx': teamind,
  '/src/projects/bachimegu.ojx': bachimegu,
  '/src/projects/github-contribution-island.ojx': githubContributionIsland,
  '/src/projects/nomitto.ojx': nomitto,
}

export * from './structure'
