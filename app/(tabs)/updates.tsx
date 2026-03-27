import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Bell } from 'lucide-react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function UpdatesScreen() {
  const { t } = useTranslation()

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <Box className="flex-1 bg-white px-6 pb-6 items-center justify-center pt-20">
        <VStack className="gap-6 items-center">
          <Box className="bg-primary-50 w-24 h-24 rounded-full items-center justify-center">
            <Bell size={40} color="#f43f5e" />
          </Box>
          <VStack className="items-center gap-2">
            <Heading size="2xl" className="font-extrabold text-center">
              {t('empty.updatesTitle')}
            </Heading>
            <Text className="text-typography-500 text-center max-w-[280px]">
              {t('empty.updatesDescription')}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  )
}
