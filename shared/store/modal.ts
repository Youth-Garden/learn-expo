import { create } from 'zustand'
import { ModalContent } from '@/shared/types/modal'

interface ModalState {
  modals: ModalContent[]
  present: (id: string, Component: React.FC<any>, data?: any, disableCloseByBackdrop?: boolean) => void
  dismiss: (id: string) => void
  closeAll: () => void
  isDisplayed: (id: string) => boolean
}

export const useModalStore = create<ModalState>((set, get) => ({
  modals: [],

  present: (id, Component, data, disableCloseByBackdrop = false) => {
    if (get().isDisplayed(id)) return

    const newModal: ModalContent = {
      id,
      Component,
      data,
      disableCloseByBackdrop,
      isOpen: true,
    }

    set((state) => ({ modals: [...state.modals, newModal] }))
  },

  dismiss: (id) => {
    // 1. Trigger animation out
    set((state) => ({
      modals: state.modals.map((m) =>
        m.id === id ? { ...m, isOpen: false } : m
      ),
    }))

    // 2. Remove after animation duration (300ms)
    setTimeout(() => {
      set((state) => ({
        modals: state.modals.filter((m) => m.id !== id),
      }))
    }, 300)
  },

  closeAll: () => {
    set((state) => ({
      modals: state.modals.map((m) => ({ ...m, isOpen: false })),
    }))

    setTimeout(() => {
      set({ modals: [] })
    }, 300)
  },

  isDisplayed: (id) => {
    return get().modals.some((m) => m.id === id)
  },
}))
