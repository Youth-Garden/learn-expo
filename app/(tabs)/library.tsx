import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Library } from 'lucide-react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'

export default function LibraryScreen() {
  const { t } = useTranslation()

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <Box className="flex-1 bg-white px-6 pb-6 items-center justify-center pt-20">
        <VStack className="gap-6 items-center">
          <Box className="bg-background-100 w-24 h-24 rounded-full items-center justify-center">
            <Library size={40} color="#666" />
          </Box>
          <VStack className="items-center gap-2">
            <Heading size="2xl" className="font-extrabold text-center">
              {t('empty.libraryTitle')}
            </Heading>
            <Text className="text-typography-500 text-center max-w-[280px]">
              {t('empty.libraryDescription')}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  )
}
