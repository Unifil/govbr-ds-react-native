export interface HeaderProps {
  onPress?: () => void
  icon?: React.ReactNode
  title?: string
  subtitle?: React.ReactNode
  divider?: boolean
  children?: React.ReactNode
  backgroundColor?: string
  iconHelp?: React.ReactNode
  hideStatusBar?: boolean
  onPressHelp?: () => void
}
