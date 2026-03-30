export interface PortalProps<T = any> {
  id?: string
  onDismiss?: () => void
  data?: T
  disableClose?: boolean
  isOpen?: boolean
}
