export interface SelectProps {
  options?: string[]
  placeholder?: string
  icon?: any
  noRotation?: boolean
  expandIcon?: any
  leftRotate?: boolean
  positionTop?: number
  positionBottom?: number
  positionLeft?: number
  positionRight?: number
  onChange: (value: string) => void
}
