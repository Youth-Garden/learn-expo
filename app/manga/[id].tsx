import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Image } from '@/components/ui/image'
import { Pressable } from '@/components/ui/pressable'
import { Spinner } from '@/components/ui/spinner'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Header } from '@/components/layout/header'
import { useMangaDetail } from '@/features/home/hooks/use-manga-detail'
import { LinearGradient } from 'expo-linear-gradient'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { BookOpen, Heart, Share2 } from 'lucide-react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { getLocalizedText } from '@/shared/utils/locale-content'

export default function MangaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { t } = useTranslation()
  const { data: manga, isLoading, isError } = useMangaDetail(id!)

  if (isLoading) {
    return (
      <Box className="flex-1 bg-background-0 items-center justify-center">
        <Spinner size="large" />
      </Box>
    )
  }

  if (isError || !manga) {
    return (
      <Box className="flex-1 bg-background-0 items-center justify-center p-6">
        <Text className="text-xl font-bold text-typography-900 mb-2">
          {t('detail.notFound')}
        </Text>
        <Pressable
          onPress={() => router.back()}
          className="bg-primary-500 px-6 py-2 rounded-full"
        >
          <Text className="text-white font-bold">{t('detail.goBack')}</Text>
        </Pressable>
      </Box>
    )
  }

  const title = getLocalizedText(
    manga.attributes.title,
    t('common.unknownTitle'),
  )
  const description = getLocalizedText(
    manga.attributes.description,
    t('common.noDescription'),
  )

  return (
    <Box className="flex-1 bg-background-0">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image Section */}
        <Box className="relative h-[480px]">
          <Image
            source={{
              uri: manga.coverUrl || 'https://via.placeholder.com/400x600',
            }}
            alt={title}
            className="w-full h-full"
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.95)']}
            className="absolute inset-0"
          />

          {/* Top Bar Controls using Universal Header */}
          <Box className="absolute top-14 left-0 right-0 px-6">
            <Header
              showBack
              showAvatar={false}
              variant="transparent"
              title=""
              subtitle=""
              rightElement={
                <HStack className="gap-3">
                  <Pressable className="w-10 h-10 rounded-full bg-black/30 items-center justify-center border border-white/20 active:scale-95">
                    <Share2 size={20} color="white" />
                  </Pressable>
                  <Pressable className="w-10 h-10 rounded-full bg-black/30 items-center justify-center border border-white/20 active:scale-95">
                    <Heart size={20} color="white" />
                  </Pressable>
                </HStack>
              }
            />
          </Box>

          {/* Title Info Floating */}
          <VStack className="absolute bottom-0 left-0 right-0 p-8 gap-4">
            <HStack className="gap-2">
              <Box className="bg-primary-500 px-3 py-1 rounded-md">
                <Text className="text-[10px] font-bold text-white uppercase tracking-widest">
                  {manga.attributes.status}
                </Text>
              </Box>
              <Box className="bg-white/20 px-3 py-1 rounded-md backdrop-blur-md">
                <Text className="text-[10px] font-bold text-white uppercase tracking-widest">
                  {manga.attributes.year || 'N/A'}
                </Text>
              </Box>
            </HStack>
            <Heading
              size="3xl"
              className="text-white font-extrabold leading-tight shadow-lg"
            >
              {title}
            </Heading>
          </VStack>
        </Box>

        {/* Content Section */}
        <VStack className="px-6 py-8 gap-8 -mt-6 rounded-t-[32px] bg-background-0">
          {/* Action Buttons */}
          <HStack className="gap-4">
            <Pressable className="flex-1 bg-primary-500 h-14 rounded-2xl flex-row items-center justify-center gap-3 active:bg-primary-600 shadow-md">
              <BookOpen size={20} color="white" />
              <Text className="text-white font-bold text-lg">
                {t('detail.startReading')}
              </Text>
            </Pressable>
            <Pressable className="w-14 h-14 bg-background-50 border border-background-100 rounded-2xl items-center justify-center active:bg-background-100">
              <Heart size={24} color="#ef4444" />
            </Pressable>
          </HStack>

          {/* Description */}
          <VStack className="gap-3">
            <Text className="text-typography-900 font-bold text-xl">
              {t('detail.storyline')}
            </Text>
            <Text className="text-typography-600 leading-7 text-base">
              {description.split('\n')[0]}
            </Text>
          </VStack>

          {/* Tags */}
          <VStack className="gap-4">
            <Text className="text-typography-900 font-bold text-xl">
              {t('detail.genres')}
            </Text>
            <HStack className="flex-wrap gap-2">
              {(manga.attributes.tags ?? []).slice(0, 6).map((tag: any) => (
                <Box
                  key={tag.id}
                  className="bg-background-50 px-4 py-2 rounded-xl border border-background-100"
                >
                  <Text className="text-typography-700 text-sm font-medium">
                    {getLocalizedText(tag.attributes.name)}
                  </Text>
                </Box>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  )
}
