import React, { useCallback, useMemo, useState } from 'react'
import { PortalContext } from '@/components/providers/portal-provider'
import { PortalProps } from '@/shared/types/portal'

const generateId = () => Math.random().toString(36).substring(2, 11)

export default function usePortal<S>(
  Component: React.FC<PortalProps<S>>,
  key?: string,
): [
  (data?: S, disableCloseByBackdrop?: boolean) => { waitingClose: () => Promise<any> | any },
  () => void,
  boolean,
] {
  const { onPresent, onDismiss, ids } = React.useContext(PortalContext)
  const [currentId, setCurrentId] = useState<string | undefined>(key)

  const handlePresent = useCallback(
    (data?: S, disableCloseByBackdrop = false) => {
      const id = key || generateId()

      if (ids.includes(id)) {
        return { waitingClose: () => false }
      }

      setCurrentId(id)
      onPresent(id, Component as React.FC<any>, data || {}, disableCloseByBackdrop)

      return {
        waitingClose: async () => {
          return new Promise<boolean>((resolve) => {
            const timer = setInterval(() => {
              if (!ids.includes(id)) {
                clearInterval(timer)
                resolve(true)
              }
            }, 100)
          })
        },
      }
    },
    [key, ids, onPresent, Component],
  )

  const handleDismiss = useCallback(() => {
    if (currentId) onDismiss(currentId)
  }, [onDismiss, currentId])

  const isOpen = useMemo(
    () => ids.includes(currentId || key || ''),
    [ids, currentId, key],
  )

  return [handlePresent, handleDismiss, isOpen]
}

export const useCloseAllPortals = () => {
  const { closeAll } = React.useContext(PortalContext)
  return closeAll
}

export const useClosePortalById = () => {
  const { onDismiss } = React.useContext(PortalContext)
  return useCallback((id: string) => onDismiss(id), [onDismiss])
}
