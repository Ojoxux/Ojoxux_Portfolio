export interface EditorTabProps {
  fileName: string
  isActive: boolean
  extension: string
  onSelect: () => void
  onClose: (e: React.MouseEvent) => void
}
