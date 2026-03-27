import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TrendingNow } from '@/features/home/components/trending-now'
import { DiscoveryBar } from '@/features/home/components/discovery-bar'
import { FreshArrivals } from '@/features/home/components/fresh-arrivals'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Pressable } from '@/components/ui/pressable'
import { Image } from '@/components/ui/image'

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
      >
        <Box className="flex-1 bg-white p-6">
          {/* Header Area */}
          <HStack className="justify-between items-center mb-8">
            <VStack className="gap-0.5">
              <HStack className="items-center gap-2">
                <Image 
                  source={require('@/assets/images/logo.png')}
                  className="w-8 h-8 rounded-lg"
                  alt="Gomic Logo"
                />
                <Heading
                  size="4xl"
                  className="text-typography-900 font-black tracking-tighter"
                >
                  Go<Text className="text-primary-500 font-black">mic.</Text>
                </Heading>
              </HStack>
              <Text className="text-typography-400 font-bold text-[10px] uppercase tracking-[4px]">Universe of Manga</Text>
            </VStack>
            <Pressable className="bg-background-50 p-1 rounded-full border-2 border-primary-100 shadow-sm active:scale-90 transition-all overflow-hidden">
              <Image 
                source={{ uri: 'https://avatar.vercel.sh/gomic' }}
                className="w-11 h-11 rounded-full"
                alt="User Avatar"
              />
            </Pressable>
          </HStack>

          {/* Discovery Bar (Search & Tags) */}
          <DiscoveryBar />

          {/* Trending now powered by React Query */}
          <TrendingNow />

          {/* Fresh Arrivals - Latest Updates */}
          <FreshArrivals />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}
