import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { DiscoveryBar } from '@/features/home/components/discovery-bar'
import React from 'react'
import { ScrollView } from 'react-native'

export default function ExploreScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <Box className="flex-1 bg-white px-6 pb-6">
        <VStack className="gap-6">
          <Heading size="3xl" className="font-extrabold tracking-tight">
            Explore
          </Heading>

          <DiscoveryBar />

          <VStack className="gap-4 mt-4">
            <Box className="bg-background-50 p-6 rounded-3xl border border-background-100">
              <Text className="text-typography-900 font-bold text-lg mb-2">
                Universe of Genres
              </Text>
              <Text className="text-typography-600 leading-6">
                Discover stories across Action, Romance, Fantasy, and more. Our
                collection is curated daily with the latest releases.
              </Text>
            </Box>

            <Box className="bg-primary-50 p-6 rounded-3xl border border-primary-100">
              <Text className="text-primary-700 font-bold text-lg mb-2">
                Smart Discovery
              </Text>
              <Text className="text-primary-600 leading-6">
                Use our advanced search to find exactly what you&apos;re looking
                for by tags, status, or artist.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  )
}
