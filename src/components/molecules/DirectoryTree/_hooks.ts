import { useState } from 'react'
import type { FileStructure } from './types'

const getAllDirectoryPaths = (items: FileStructure[]): string[] => {
  let paths: string[] = []
  items.forEach(item => {
    if (item.type === 'directory') {
      paths.push(item.path)
      if (item.children) {
        paths = paths.concat(getAllDirectoryPaths(item.children))
      }
    }
  })
  return paths
}

const findNodeByPath = (items: FileStructure[], path: string): FileStructure | null => {
  for (const item of items) {
    if (item.path === path) {
      return item
    }

    if (item.children && item.children.length > 0) {
      const foundInChildren = findNodeByPath(item.children, path)
      if (foundInChildren) {
        return foundInChildren
      }
    }
  }

  return null
}

export const useDirectoryTree = (fileStructure: FileStructure[], rootDirectory?: string) => {
  const initialExpandedPaths = getAllDirectoryPaths(fileStructure)
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set(initialExpandedPaths))

  const toggleDir = (path: string) => {
    const newExpanded = new Set(expandedDirs)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedDirs(newExpanded)
  }

  const getFilteredFileStructure = (): FileStructure[] => {
    if (!rootDirectory) {
      return fileStructure
    }

    const rootNode = findNodeByPath(fileStructure, rootDirectory)

    if (rootNode) {
      return [
        {
          ...rootNode,
          path: '/',
          name: rootNode.name,
        },
      ]
    }

    return fileStructure
  }

  return {
    expandedDirs,
    toggleDir,
    getFilteredFileStructure,
  }
}
