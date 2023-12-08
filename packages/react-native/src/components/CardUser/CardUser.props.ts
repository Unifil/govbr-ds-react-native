export interface CardProps {
  name?: string
  description?: string
  disabled?: boolean
  marginTop?: number
  marginBottom?: number
  overlay?: boolean
  rightComponent?: React.ReactNode
  sizeAvatar?: number
  onPress?: () => void
}
