import React from 'react'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Pressable } from '@/components/ui/pressable'
import { Image } from '@/components/ui/image'
import { Manga } from '@/services/manga/types'
import { useRouter } from 'expo-router'

interface MangaListItemProps {
  item: Manga
}

export const MangaListItem = ({ item }: MangaListItemProps) => {
  const router = useRouter()
  const titleObj = item.attributes.title
  const title = titleObj?.en || titleObj?.vi || Object.values(titleObj || {})[0] || 'Unknown Title'

  return (
    <Pressable 
      key={item.id}
      onPress={() => router.push(`/manga/${item.id}` as any)}
      className="mb-6 active:opacity-80"
    >
      <HStack className="gap-5 items-center">
        <Box className="relative">
          {item.coverUrl ? (
            <Image 
              source={{ uri: item.coverUrl }}
              className="w-24 h-32 rounded-2xl bg-background-200"
              alt={title || 'Cover'}
              resizeMode="cover"
            />
          ) : (
            <Box className="w-24 h-32 rounded-2xl bg-background-200 items-center justify-center">
              <Text className="text-typography-400 text-[10px]">No Image</Text>
            </Box>
          )}
          <Box className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-sm">
            <Box className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
          </Box>
        </Box>
        <VStack className="flex-1 gap-2.5">
          <VStack className="gap-1">
            <Text className="font-extrabold text-base leading-tight text-typography-900 line-clamp-2" numberOfLines={2}>
              {title}
            </Text>
            <Text className="text-xs text-typography-500 font-medium tracking-wide">
              Updated just now
            </Text>
          </VStack>
          <HStack className="gap-2">
            <Box className="bg-background-100 px-2.5 py-1 rounded-lg">
              <Text className="text-[10px] font-bold text-typography-700 uppercase">CH. 124</Text>
            </Box>
            <Box className="bg-primary-50 px-2.5 py-1 rounded-lg">
              <Text className="text-[10px] font-bold text-primary-600 uppercase">NEW</Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  )
}
