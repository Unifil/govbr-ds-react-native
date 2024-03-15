export interface CardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  text?: string
  tag?: string
  colorTitle?: string
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
  iconIsPressed?: React.ReactNode
  overlay?: boolean
  numberOfLines?: number
  testID?: string
  textCapitalize?: boolean
  colorStatusGroup?: string
  onPressIn?: () => void
}
