export interface ButtonProps {
  onPress?: () => void
  disabled?: boolean
  icon?: any
  type?: string
  text?: string
  backgroundColor?: string
  width?: number
  height?: number
  borderRadius?: number
  colorText?: string
  fontWeight?: any
  fontSize?: number
  marginTop?: number
  marginBottom?: number
  isLoading?: boolean
  fontFamily?: string
  textDecoration?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined
}
