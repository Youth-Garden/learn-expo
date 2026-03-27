import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@/components/ui/button'
import { DiscoveryBar } from '@/features/home/components/discovery-bar'
import TestModal from '@/components/modals/test-modal'
import useModal from '@/shared/hooks/use-modal'
import React from 'react'
import { ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function ExploreScreen() {
  const { t } = useTranslation()
  const [presentTestModal] = useModal(TestModal)

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <Box className="flex-1 bg-white px-6 pb-6">
        <VStack className="gap-6">
          <Heading size="3xl" className="font-extrabold tracking-tight">
            {t('explore.title')}
          </Heading>

          <DiscoveryBar />

          <VStack className="gap-4 mt-4">
            <Box className="bg-background-50 p-6 rounded-3xl border border-background-100">
              <Text className="text-typography-900 font-bold text-lg mb-2">
                {t('explore.genresTitle')}
              </Text>
              <Text className="text-typography-600 leading-6">
                {t('explore.genresDescription')}
              </Text>
            </Box>

            <Box className="bg-primary-50 p-6 rounded-3xl border border-primary-100">
              <Text className="text-primary-700 font-bold text-lg mb-2">
                {t('explore.smartTitle')}
              </Text>
              <Text className="text-primary-600 leading-6">
                {t('explore.smartDescription')}
              </Text>
            </Box>

            {/* Modal System Test — remove after verification */}
            <Button
              onPress={() => presentTestModal({ title: 'useModal Works! 🎉', description: 'The native modal system is fully integrated.' })}
              className="rounded-2xl"
            >
              <ButtonText>Test Modal System</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  )
}
