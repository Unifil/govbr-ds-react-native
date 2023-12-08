export interface CardProps {
  title?: string
  description?: string
  text?: string
  tag?: string
  colorTitle?: string
  colorLocal?: string
  colorText?: string
  sizeTitle?: number
  sizeText?: number
  icon?: React.ReactNode
  borderRadius?: number
  height?: number
  width?: number
  marginTop?: number
  marginBottom?: number
  colorIcon?: string
  onPress?: () => void
  iconIsPressed?: boolean
  overlay?: boolean
  numberOfLines?: number
  testID?: string
  textCapitalize?: boolean
  colorStatusGroup?: string
}
