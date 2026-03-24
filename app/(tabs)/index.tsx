import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { VStack } from '@/components/ui/vstack'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TrendingSection } from '@/features/home/components/trending-section'

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex-1 bg-background-0">
          {/* Header Area */}
          <HStack className="px-4 py-4 justify-between items-center">
            <Heading size="2xl" className="text-primary-500 font-bold">
              MangaFlow
            </Heading>
            <Box className="bg-background-100 p-2 rounded-full">
              <IconSymbol name="magnifyingglass" size={24} color="#687076" />
            </Box>
          </HStack>

          {/* Trending Section powered by React Query */}
          <TrendingSection />

          {/* Latest Updates Skeleton Stub */}
          <VStack className="px-4 mt-6 mb-10 gap-4">
            <Heading size="xl">Latest Updates</Heading>
            {Array.from({ length: 3 }).map((_, i) => (
              <HStack key={i} className="bg-background-50 p-3 rounded-xl gap-3">
                <Box className="w-16 h-20 rounded-md bg-background-200" />
                <VStack className="flex-1 justify-center gap-1">
                  <Box className="w-3/4 h-4 rounded bg-background-200" />
                  <Box className="w-1/2 h-3 rounded bg-background-200 mt-2" />
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}
