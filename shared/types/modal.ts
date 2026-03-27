import React from 'react'

export interface ModalProps<T = any> {
  id?: string
  onDismiss?: () => void
  data?: T
  disableClose?: boolean
}

export interface ModalContent {
  id: string
  Component: React.FC<ModalProps>
  data?: any
  disableCloseByBackdrop?: boolean
  isOpen: boolean
}
