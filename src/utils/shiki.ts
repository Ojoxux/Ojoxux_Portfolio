import * as shiki from 'shiki'

let highlighter: shiki.Highlighter | null = null

export async function highlightCode(code: string, lang: string): Promise<string> {
  if (!highlighter) {
    highlighter = await shiki.createHighlighter({
      themes: ['dracula'],
      langs: ['javascript', 'typescript', 'jsx', 'tsx', 'json', 'markdown'],
    })
  }

  // .ojx を typescript として扱う
  const shikiLang: shiki.BundledLanguage =
    lang === 'ojx' ? 'typescript' : (lang as shiki.BundledLanguage)

  // getHighlighter 後は null でないはずだが、念のためチェックするか `!` を使う
  const loadedLangs = highlighter!.getLoadedLanguages()

  // サポートされていない言語の場合、デフォルトの<pre><code>で囲む
  if (!loadedLangs.includes(shikiLang)) {
    console.warn(`Shiki: Language "${shikiLang}" not loaded. Falling back to plain text.`)
    // HTMLエスケープを行うのが望ましいが、ここでは簡易的にそのまま表示
    return `<pre class="shiki dracula"><code>${code}</code></pre>`
  }

  try {
    // getHighlighter 後は null でないはずだが、念のためチェックするか `!` を使う
    return highlighter!.codeToHtml(code, {
      lang: shikiLang,
      theme: 'dracula',
    })
  } catch (error) {
    console.error('Error highlighting code with Shiki:', error)
    // エラー時もフォールバック
    return `<pre class="shiki dracula"><code>${code}</code></pre>`
  }
}
