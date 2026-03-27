import { useModalStore } from '@/shared/store/modal'
import { ModalProps } from '@/shared/types/modal'
import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function useModal<S>(
  Component: React.FC<ModalProps<S>>,
  key?: string,
): [
  (
    data?: S,
    disableCloseByBackdrop?: boolean,
  ) => { waitingClose: () => Promise<any> | any },
  () => void,
] {
  const present = useModalStore((state) => state.present)
  const dismiss = useModalStore((state) => state.dismiss)
  const isDisplayed = useModalStore((state) => state.isDisplayed)

  const [currentId, setCurrentId] = useState<string | undefined>(key)

  const handlePresent = useCallback(
    (data?: S, disableCloseByBackdrop = false) => {
      const id = key || uuidv4()
      if (isDisplayed(id)) {
        return {
          waitingClose: () => false,
        }
      }

      setCurrentId(id)
      present(
        id,
        Component as React.FC<ModalProps>,
        data || {},
        disableCloseByBackdrop,
      )

      return {
        waitingClose: async () => {
          return new Promise((resolve) => {
            const timer = setInterval(() => {
              if (!isDisplayed(id)) {
                clearInterval(timer)
                resolve(true)
              }
            }, 100)
          })
        },
      }
    },
    [present, key, Component, isDisplayed],
  )

  const handleDismiss = useCallback(() => {
    if (currentId) {
      dismiss(currentId)
    }
  }, [dismiss, currentId])

  return [handlePresent, handleDismiss]
}

export const useCloseAllModal = () => {
  const closeAll = useModalStore((state) => state.closeAll)
  return closeAll
}

export const useCloseById = () => {
  const dismiss = useModalStore((state) => state.dismiss)
  return useCallback((id: string) => dismiss(id), [dismiss])
}
