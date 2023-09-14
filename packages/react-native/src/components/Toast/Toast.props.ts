export interface ToastProps {
  type: 'success' | 'error'
  message: string
  icon?: any
  duration?: number
  colorText?: string
  backgroundColor?: string
  closeToast?: (status: boolean) => void
}
