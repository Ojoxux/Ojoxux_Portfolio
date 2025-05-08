'use client'

import { ActivityBar } from '@/components/molecules/ActivityBar'
import { DirectoryTree } from '@/components/molecules/DirectoryTree'
import { EditorTitleBar } from '@/components/molecules/EditorTitleBar'
import { AboutMeContent } from '@/components/organisms/AboutMeContent'
import { EditorLayout } from '@/components/templates/EditorLayout'
import { useRedirectIfNotDesktop } from '@/hooks/useRedirectIfNotDesktop'
import {
  aboutMeContentMapping,
  aboutMeFileStructure,
  aboutMeFiles,
} from '@/utils/constants/about-me'
import { useEditorTabs } from '@/utils/editor/useEditorTabs'

export default function AboutMePage() {
  useRedirectIfNotDesktop()

  const { openFiles, currentFile, setCurrentFile, handleFileSelect, handleCloseFile } =
    useEditorTabs('/introduction.ojx') // 初期ファイルパスを About me 用に修正

  return (
    <EditorLayout>
      <div className='min-h-[calc(100vh-48px)] w-full pt-3 flex justify-center bg-[#282a36]'>
        <div className='w-[1600px] h-[700px] bg-[#282a36] rounded-xl border border-[#6272a4]/30 shadow-2xl overflow-hidden backdrop-blur-sm'>
          <EditorTitleBar title='about-me - VS Code' />
          <div className='h-[calc(100%-2.5rem)] flex'>
            <ActivityBar className='px-5' />
            <div className='flex-1 flex'>
              <DirectoryTree
                fileStructure={aboutMeFileStructure}
                currentFile={currentFile}
                onFileSelect={handleFileSelect}
                className='border-r border-[#44475a] w-[280px] flex-shrink-0'
                rootDirectory='/'
              />
              <AboutMeContent
                openFiles={openFiles}
                currentFile={currentFile}
                fileContent={currentFile ? aboutMeFiles[aboutMeContentMapping[currentFile]] : null}
                onFileSelect={setCurrentFile}
                onCloseFile={handleCloseFile}
              />
            </div>
          </div>
        </div>
      </div>
    </EditorLayout>
  )
}
