import { useState, useEffect } from 'react'

/**
 * SSR対応のメディアクエリ用カスタムフック (useState/useEffect版)
 * @param query CSSメディアクエリ
 * @returns マッチしているかどうか
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false // SSR時やwindow未定義時はfalse
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQueryList = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // マウント時に現在の状態を再確認・設定
    setMatches(mediaQueryList.matches)
    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}
