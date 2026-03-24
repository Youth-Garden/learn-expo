import React from 'react'
import { FlatList } from 'react-native'
import { useTrendingManga } from '../hooks/use-trending-manga'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Spinner } from '@/components/ui/spinner'
import { Pressable } from '@/components/ui/pressable'
import { Image } from '@/components/ui/image'
import { MappedManga } from '@/services/manga'
import { useRouter } from 'expo-router'

export const TrendingSection = () => {
  const { data: mangas, isLoading, isError } = useTrendingManga(15)
  const router = useRouter()

  if (isLoading) {
    return (
      <Box className="h-72 items-center justify-center rounded-2xl bg-background-50">
        <Spinner size="large" />
      </Box>
    )
  }

  if (isError || !mangas) {
    return (
      <Box className="h-72 items-center justify-center rounded-2xl bg-background-50">
        <Text className="text-error-500 font-medium">Failed to load trending manga</Text>
      </Box>
    )
  }

  const renderItem = ({ item }: { item: MappedManga }) => {
    const titleObj = item.attributes.title
    const title = titleObj?.en || titleObj?.vi || Object.values(titleObj || {})[0] || 'Unknown Title'

    return (
      <Pressable 
        onPress={() => router.push(`/manga/${item.id}` as any)}
        className="mr-5 w-36"
      >
        <VStack className="gap-2.5">
          {item.coverUrl ? (
            <Image 
              source={{ uri: item.coverUrl }}
              className="w-full h-56 rounded-xl bg-background-200"
              alt={title || 'Cover'}
              resizeMode="cover"
            />
          ) : (
            <Box className="w-full h-56 rounded-xl bg-background-200 items-center justify-center">
              <Text className="text-typography-400 text-sm">No Image</Text>
            </Box>
          )}
          <Text className="font-bold text-sm line-clamp-2 leading-tight text-typography-900" numberOfLines={2}>
            {title}
          </Text>
        </VStack>
      </Pressable>
    )
  }

  return (
    <VStack className="mb-8">
      <HStack className="justify-between items-end mb-5">
        <Heading size="2xl" className="text-typography-900 font-bold">Trending 🔥</Heading>
        <Pressable>
          <Text className="text-primary-500 font-semibold text-sm mb-1">See all</Text>
        </Pressable>
      </HStack>
      
      <FlatList
        horizontal
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  )
}
