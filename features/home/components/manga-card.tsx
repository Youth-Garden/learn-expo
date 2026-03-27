import React from 'react'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Pressable } from '@/components/ui/pressable'
import { Image } from '@/components/ui/image'
import { Manga } from '@/services/manga/types'
import { useRouter } from 'expo-router'

interface MangaCardProps {
  item: Manga
}

export const MangaCard = ({ item }: MangaCardProps) => {
  const router = useRouter()
  const titleObj = item.attributes.title
  const title = titleObj?.en || titleObj?.vi || Object.values(titleObj || {})[0] || 'Unknown Title'

  return (
    <Pressable 
      onPress={() => router.push(`/manga/${item.id}` as any)}
      className="mr-5 w-36 active:opacity-80 transition-opacity"
    >
      <VStack className="gap-2.5">
        <Box className="relative">
          {item.coverUrl ? (
            <Image 
              source={{ uri: item.coverUrl }}
              className="w-full h-52 rounded-2xl bg-background-200 shadow-sm"
              alt={title || 'Cover'}
              resizeMode="cover"
            />
          ) : (
            <Box className="w-full h-52 rounded-2xl bg-background-200 items-center justify-center border border-dashed border-background-300">
              <Text className="text-typography-400 text-xs font-medium uppercase tracking-wider">Empty</Text>
            </Box>
          )}
          <Box className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md">
            <Text className="text-[10px] text-white font-bold uppercase tracking-tighter">HOT</Text>
          </Box>
        </Box>
        <VStack className="gap-0.5">
          <Text className="font-bold text-sm leading-snug text-typography-900" numberOfLines={2}>
            {title}
          </Text>
          <Text className="text-[10px] text-typography-500 font-medium uppercase tracking-wider">
            {item.attributes.status || 'Ongoing'}
          </Text>
        </VStack>
      </VStack>
    </Pressable>
  )
}
