export interface CardProps {
  name?: string
  description?: string
  disabled?: boolean
  marginTop?: number
  marginBottom?: number
  overlay?: boolean
  statusComponent?: React.ReactNode
  sizeAvatar?: number
  onPress?: () => void
  backgroundColor?: string
  iconReport?: React.ReactNode
}
