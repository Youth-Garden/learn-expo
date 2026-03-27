import React from 'react'
import { ModalProps } from '@/shared/types/modal'
import {
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

const TestModal: React.FC<ModalProps<TestModalData>> = ({ onDismiss, data }) => {
  return (
    <VStack>
      <ModalHeader>
        <Heading size="lg">{data?.title || 'Test Modal'}</Heading>
        <ModalCloseButton onPress={onDismiss}>
          <Icon as={CloseIcon} size="md" />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody>
        <Text className="text-typography-600 leading-6">
          {data?.description || 'This is a test modal to verify the useModal hook is working correctly on native!'}
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
  )
}

export default TestModal
