import { Box } from '@/components/ui/box'
import { DiscoveryBar } from '@/features/home/components/discovery-bar'
import { FreshArrivals } from '@/features/home/components/fresh-arrivals'
import { TrendingNow } from '@/features/home/components/trending-now'
import React from 'react'
import { ScrollView } from 'react-native'

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
      className="bg-white"
    >
      <Box className="flex-1 bg-white px-6 pb-6">
        <DiscoveryBar />
        <TrendingNow />
        <FreshArrivals />
      </Box>
    </ScrollView>
  )
}
