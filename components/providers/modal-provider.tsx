import { Modal, ModalBackdrop, ModalContent } from '@/components/ui/modal'
import { useModalStore } from '@/shared/store/modal'
import React from 'react'

/**
 * ModalRenderer component that listens to the Zustand modal store
 * and renders all active modals. This should be placed at the root of the app.
 */
export const ModalProvider = () => {
  const modals = useModalStore((state) => state.modals)
  const dismiss = useModalStore((state) => state.dismiss)

  if (modals.length === 0) return null

  return (
    <>
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          isOpen={modal.isOpen}
          onClose={() => !modal.disableCloseByBackdrop && dismiss(modal.id)}
          size="md"
        >
          <ModalBackdrop />
          <ModalContent>
            <modal.Component
              id={modal.id}
              data={modal.data}
              onDismiss={() => dismiss(modal.id)}
            />
          </ModalContent>
        </Modal>
      ))}
    </>
  )
}
