// ファイル種別判定やパス操作の共通ユーティリティ

/**
 * 画像ファイルかどうか判定
 */
export const isImageFile = (path: string): boolean =>
  path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.gif')

/**
 * デモタブ（仮想ファイル）かどうか判定
 */
export const isDemoFile = (path: string): boolean => /\/demo$/.test(path)

/**
 * パスからプロジェクト名（2階層目のディレクトリ名）を取得
 */
export const getCurrentProjectName = (path: string | null): string | null => {
  if (!path) return null
  const pathParts = path.split('/')
  if (pathParts.length >= 2) {
    return pathParts[1]
  }
  return null
}
