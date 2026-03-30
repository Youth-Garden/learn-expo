import React from 'react'
import { FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTrendingManga } from '../hooks/use-trending-manga'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Spinner } from '@/components/ui/spinner'
import { Pressable } from '@/components/ui/pressable'
import { MangaCard } from './manga-card'

export const TrendingNow = () => {
  const { t } = useTranslation()
  const { data: mangas, isLoading, isError } = useTrendingManga(15)

  if (isLoading) {
    return (
      <Box className="h-72 items-center justify-center rounded-2xl bg-background-50/50">
        <Spinner size="large" />
      </Box>
    )
  }

  if (isError || !mangas) {
    return (
      <Box className="h-72 items-center justify-center rounded-2xl bg-background-50/50">
        <Text className="text-error-500 font-medium italic">
          Oops! Couldn&apos;t catch the heat 🔥
        </Text>
      </Box>
    )
  }

  return (
    <VStack className="mb-10">
      <HStack className="justify-between items-center mb-6">
        <VStack className="gap-0.5">
          <Heading
            size="2xl"
            className="text-typography-900 font-extrabold tracking-tight"
          >
            {t('home.trending')}
          </Heading>
          <Box className="h-1 w-10 bg-primary-500 rounded-full" />
        </VStack>
        <Pressable className="bg-primary-50 px-4 py-1.5 rounded-full active:bg-primary-100">
          <Text className="text-primary-600 font-bold text-xs">View all</Text>
        </Pressable>
      </HStack>

      <FlatList
        horizontal
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MangaCard item={item} />}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={144 + 20} // w-36 (144) + mr-5 (20)
      />
    </VStack>
  )
}
