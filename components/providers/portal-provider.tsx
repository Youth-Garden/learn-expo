import React, { useCallback, useMemo, useRef, useState } from 'react'

interface PortalItem {
  id: string
  Component: React.ComponentType<any>
  data?: any
  disableCloseByBackdrop?: boolean
  isOpen: boolean
}

export interface IPortalContext {
  onPresent: (id: string, Component: React.ComponentType<any>, data?: any, disableCloseByBackdrop?: boolean) => void
  onDismiss: (id?: string) => void
  closeAll: () => void
  ids: string[]
}

export const PortalContext = React.createContext<IPortalContext>({
  onPresent: () => {},
  onDismiss: () => {},
  closeAll: () => {},
  ids: [],
})

const DISMISS_DELAY = 200

export const PortalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<PortalItem[]>([])
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  const present = useCallback(
    (id: string, Component: React.ComponentType<any>, data?: any, disableCloseByBackdrop = false) => {
      setItems((prev) => {
        if (prev.some((i) => i.id === id)) return prev
        return [...prev, { id, Component, data, disableCloseByBackdrop, isOpen: true }]
      })
    },
    [],
  )

  const removeItem = useCallback((id: string) => {
    setItems((cur) => cur.filter((i) => i.id !== id))
    delete timers.current[id]
  }, [])

  const dismiss = useCallback(
    (id?: string) => {
      setItems((prev) => {
        const targetId = id ?? prev[prev.length - 1]?.id
        if (!targetId) return prev

        // Clear any existing timer and reset (covers double-dismiss edge case)
        if (timers.current[targetId]) {
          clearTimeout(timers.current[targetId])
        }

        // Schedule cleanup after exit animation
        timers.current[targetId] = setTimeout(() => removeItem(targetId), DISMISS_DELAY)

        // Set isOpen=false to trigger exit animation
        return prev.map((i) => (i.id === targetId ? { ...i, isOpen: false } : i))
      })
    },
    [removeItem],
  )

  const closeAll = useCallback(() => {
    // Clear all pending timers
    Object.keys(timers.current).forEach((id) => {
      clearTimeout(timers.current[id])
      delete timers.current[id]
    })
    setItems((prev) => {
      prev.forEach((i) => {
        timers.current[i.id] = setTimeout(() => removeItem(i.id), DISMISS_DELAY)
      })
      return prev.map((i) => ({ ...i, isOpen: false }))
    })
  }, [removeItem])

  const ids = useMemo(() => items.map((i) => i.id), [items])

  const value = useMemo(
    () => ({ onPresent: present, onDismiss: dismiss, closeAll, ids }),
    [present, dismiss, closeAll, ids],
  )

  // Render only the top-most portal
  const topItem = items[items.length - 1] ?? null

  return (
    <PortalContext.Provider value={value}>
      {children}
      {topItem && (
        <topItem.Component
          key={topItem.id}
          id={topItem.id}
          isOpen={topItem.isOpen}
          data={topItem.data}
          onDismiss={() => dismiss(topItem.id)}
        />
      )}
    </PortalContext.Provider>
  )
}
