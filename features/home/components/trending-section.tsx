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
  // Use custom React Query hook
  const { data: mangas, isLoading, isError } = useTrendingManga(10)
  const router = useRouter()

  if (isLoading) {
    return (
      <Box className="h-72 items-center justify-center">
        <Spinner size="large" color="$primary500" />
      </Box>
    )
  }

  if (isError || !mangas) {
    return (
      <Box className="h-72 items-center justify-center">
        <Text className="text-error-500">Failed to load trending manga</Text>
      </Box>
    )
  }

  const renderItem = ({ item }: { item: MappedManga }) => {
    const titleObj = item.attributes.title
    // Get proper localized title natively, fallback to whatever is first
    const title = titleObj?.en || titleObj?.vi || Object.values(titleObj || {})[0] || 'Unknown Title'

    return (
      <Pressable 
        onPress={() => router.push(`/manga/${item.id}` as any)}
        className="mr-4 w-36"
      >
        <VStack className="gap-2">
          {item.coverUrl ? (
            <Image 
              source={{ uri: item.coverUrl }}
              className="w-full h-52 rounded-lg bg-background-800"
              alt={title}
              resizeMode="cover"
            />
          ) : (
            <Box className="w-full h-52 rounded-lg bg-background-800 items-center justify-center">
              <Text className="text-typography-500">No Image</Text>
            </Box>
          )}
          <Text className="font-semibold text-sm line-clamp-2 leading-tight" numberOfLines={2}>
            {title}
          </Text>
        </VStack>
      </Pressable>
    )
  }

  return (
    <VStack className="my-6">
      <HStack className="justify-between items-center mb-4 px-4">
        <Heading size="xl">Trending Now</Heading>
        <Pressable>
          <Text className="text-primary-500 font-medium">See all</Text>
        </Pressable>
      </HStack>
      
      <FlatList
        horizontal
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </VStack>
  )
}
