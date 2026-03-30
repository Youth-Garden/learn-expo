import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetIcon,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet'
import {
  FavouriteIcon,
  PlayIcon,
  ShareIcon,
  TrashIcon,
} from '@/components/ui/icon'
import { PortalProps } from '@/shared/types/portal'
import React from 'react'

interface TestActionsheetData {
  title?: string
}

const TestActionsheet: React.FC<PortalProps<TestActionsheetData>> = ({
  onDismiss,
  isOpen,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onDismiss}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem onPress={onDismiss}>
          <ActionsheetIcon as={PlayIcon} className="mr-2" />
          <ActionsheetItemText>Read Now</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onDismiss}>
          <ActionsheetIcon as={FavouriteIcon} className="mr-2" />
          <ActionsheetItemText>Add to Library</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onDismiss}>
          <ActionsheetIcon as={ShareIcon} className="mr-2" />
          <ActionsheetItemText>Share Manga</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onDismiss}>
          <ActionsheetIcon as={TrashIcon} className="mr-2 text-error-500" />
          <ActionsheetItemText className="text-error-500">
            Delete Cache
          </ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  )
}

export default TestActionsheet
