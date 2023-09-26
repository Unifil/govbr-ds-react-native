export interface SelectProps {
  options?: string[]
  placeholder?: string
  icon?: any
  noRotation?: boolean
  expandIcon?: any
  leftRotate?: boolean
  onChange: (value: string) => void
}
