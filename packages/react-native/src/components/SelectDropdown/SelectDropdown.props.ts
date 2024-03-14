export interface SelectProps {
  options?: any
  placeholder?: string
  icon?: any
  noRotation?: boolean
  expandIcon?: any
  leftRotate?: boolean
  onChange: (value: string) => void
  zIndex?: number
  listEmpty?: string
  defaultValue?: string
  fontFamily?: string | null
  disabled?: boolean
}
