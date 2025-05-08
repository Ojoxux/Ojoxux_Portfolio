import { FileContent } from '@/components/molecules/DirectoryTree/types'
import { teamind } from './teamind'
import { bachimegu } from './bachimegu'
import { githubContributionIsland } from './github-contribution-island'
import { nomitto } from './nomitto'

export const projectFiles: Record<string, FileContent> = {
  '/src/projects/teamind.ojx': teamind,
  '/src/projects/bachimegu.ojx': bachimegu,
  '/src/projects/github-contribution-island.ojx': githubContributionIsland,
  '/src/projects/nomitto.ojx': nomitto,
}

export * from './structure'
