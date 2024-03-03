import { DimensionValue } from 'react-native'

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
  width?: DimensionValue | undefined
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
  setCheckboxStates: (value: boolean) => void
  checkboxStates: boolean | undefined
  isCorrectQuestion?: boolean
}
