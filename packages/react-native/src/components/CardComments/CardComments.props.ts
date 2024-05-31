export interface CardCommentsProps {
  comment: string
  skill: string
  onPressDelete?: () => void
  iconButtonDelete?: React.ReactNode
  disabledDelete?: boolean
  onPressUpdate?: () => void
  iconButtonUpdate?: React.ReactNode
  disabledUpdate?: boolean
  onPressCheck?: () => void
  iconButtonCheck?: React.ReactNode
  disabledCheck?: boolean
  updateDate?: string
}
