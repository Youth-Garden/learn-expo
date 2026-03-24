import { toast } from '@/utils/toast-helper'
import React, { useEffect } from 'react'
import { Toast, ToastDescription, ToastTitle, useToast } from '../ui/toast'

export const ToastProvider = () => {
  const _toast = useToast()

  useEffect(() => {
    toast.subscribe((options) => {
      _toast.show({
        placement: 'top',
        render: ({ id }) => {
          const toastId = 'toast-' + id
          return (
            <Toast nativeID={toastId} action={options.action} variant="solid">
              <ToastTitle>{options.title}</ToastTitle>
              {options.description && (
                <ToastDescription>{options.description}</ToastDescription>
              )}
            </Toast>
          )
        },
      })
    })
  }, [_toast])

  return null
}
