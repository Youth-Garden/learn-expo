import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { IconSymbol } from '@/components/ui/icon-symbol'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TrendingSection } from '@/features/home/components/trending-section'

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      >
        <Box className="flex-1 bg-background-0 p-4 pt-6">
          {/* Header Area */}
          <HStack className="justify-between items-center mb-8">
            <Heading
              size="3xl"
              className="text-primary-500 font-bold tracking-tight"
            >
              MangaFlow
            </Heading>
            <Box className="bg-background-100 p-2.5 rounded-full items-center justify-center">
              <IconSymbol name="magnifyingglass" size={24} color="#A3A3A3" />
            </Box>
          </HStack>

          {/* Trending Section powered by React Query */}
          <TrendingSection />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}
