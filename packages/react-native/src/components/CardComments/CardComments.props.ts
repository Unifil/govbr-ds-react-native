export interface CardCommentsProps {
  comment: string
  date: string
  status: string
  colorStatus: string
  onPressDelete?: () => void
  iconButtonDelete?: React.ReactNode
  disabledDelete?: boolean
  onPressUpdate?: () => void
  iconButtonUpdate?: React.ReactNode
  disabledUpdate?: boolean
  onPressCheck?: () => void
  iconButtonCheck?: React.ReactNode
  disabledCheck?: boolean
}
