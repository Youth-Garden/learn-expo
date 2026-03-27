import React from 'react'
import { useTranslation } from 'react-i18next'
import { useInfiniteLatestManga } from '../hooks/use-infinite-latest-manga'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Spinner } from '@/components/ui/spinner'
import { Pressable } from '@/components/ui/pressable'
import { MangaListItem } from './manga-list-item'

export const FreshArrivals = () => {
  const { t } = useTranslation()
  const { 
    data, 
    isLoading, 
    isError, 
    hasNextPage, 
    fetchNextPage, 
    isFetchingNextPage 
  } = useInfiniteLatestManga(10)

  if (isLoading) {
    return (
      <Box className="h-40 items-center justify-center rounded-2xl bg-background-50/30">
        <Spinner size="small" />
      </Box>
    )
  }

  if (isError || !data) {
    return null
  }

  const mangas = data.pages.flatMap(page => page.data.items)

  return (
    <VStack className="mb-12">
      <HStack className="justify-between items-center mb-8">
        <VStack className="gap-0.5">
          <Heading size="2xl" className="text-typography-900 font-extrabold tracking-tight">{t('home.freshArrivals')}</Heading>
          <Box className="h-1 w-12 bg-green-500 rounded-full" />
        </VStack>
      </HStack>
      
      <VStack>
        {mangas.map((item) => (
          <MangaListItem key={item.id} item={item} />
        ))}
      </VStack>

      {hasNextPage && (
        <Pressable 
          onPress={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-4 bg-background-50 border border-background-100 py-3.5 rounded-2xl items-center justify-center active:bg-background-100"
        >
          {isFetchingNextPage ? (
            <HStack className="gap-2 items-center">
              <Spinner size="small" />
              <Text className="text-xs font-bold text-typography-500 tracking-wide">{t('home.loading')}</Text>
            </HStack>
          ) : (
            <Text className="text-xs font-bold text-typography-900 tracking-wider uppercase">{t('home.loadMore')}</Text>
          )}
        </Pressable>
      )}
    </VStack>
  )
}
