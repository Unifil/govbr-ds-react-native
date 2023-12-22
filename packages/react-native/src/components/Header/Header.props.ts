import { ReactNode } from 'react'

export interface HeaderProps {
  onPress?: () => void
  icon?: ReactNode
  title?: string
  subtitle?: ReactNode
  divider?: boolean
  children?: React.ReactNode
  backgroundColor?: string
  iconHelp?: ReactNode
  onPressHelp?: () => void
}
