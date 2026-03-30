import React from 'react'
import { PortalProps } from '@/shared/types/portal'
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@/components/ui/modal'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button, ButtonText } from '@/components/ui/button'
import { VStack } from '@/components/ui/vstack'
import { Icon, CloseIcon } from '@/components/ui/icon'

interface TestModalData {
  title?: string
  description?: string
}

const TestModal: React.FC<PortalProps<TestModalData>> = ({ onDismiss, data, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onDismiss} size="md">
      <ModalBackdrop />
      <ModalContent>
        <VStack>
          <ModalHeader>
            <Heading size="lg">{data?.title || 'Test Modal'}</Heading>
            <ModalCloseButton onPress={onDismiss}>
              <Icon as={CloseIcon} size="md" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text className="text-typography-600 leading-6">
              {data?.description || 'Portal system works!'}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onPress={onDismiss} className="mr-2">
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={onDismiss}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </VStack>
      </ModalContent>
    </Modal>
  )
}

export default TestModal
