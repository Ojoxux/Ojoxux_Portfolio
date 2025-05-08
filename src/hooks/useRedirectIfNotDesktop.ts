import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMediaQuery } from './useMediaQuery'

/**
 * PC以外でアクセスした場合 /not-supported にリダイレクトするフック
 * App Routerのクライアントコンポーネントで利用
 */
export const useRedirectIfNotDesktop = (): void => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    if (!isDesktop) {
      router.replace('/not-supported')
    }
  }, [isDesktop, isMounted, router])
}
