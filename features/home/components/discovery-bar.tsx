import React from 'react'
import { TextInput } from 'react-native'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { Pressable } from '@/components/ui/pressable'

export const DiscoveryBar = () => {
  const hotTags = ['Action', 'Romance', 'Fantasy', 'Comedy']

  return (
    <Box className="mb-10 w-full">
      <HStack className="items-center bg-background-100/80 px-5 py-3.5 rounded-3xl border border-background-200/50 shadow-sm">
        <IconSymbol name="magnifyingglass" size={20} color="#6B7280" />
        <TextInput
          placeholder="What's your next adventure?"
          className="flex-1 ml-3.5 text-typography-900 text-sm font-medium"
          placeholderTextColor="#9CA3AF"
        />
        <Box className="bg-primary-500 p-2 rounded-2xl shadow-primary-200 shadow-lg">
          <IconSymbol name="slider.horizontal.3" size={16} color="white" />
        </Box>
      </HStack>

      <HStack className="mt-4 gap-2.5 flex-wrap">
        <Text className="text-[10px] text-typography-400 font-bold uppercase tracking-widest mr-1 mt-1.5">
          Hot 🔥
        </Text>
        {hotTags.map((tag) => (
          <Pressable
            key={tag}
            className="bg-background-50 px-3.5 py-1.5 rounded-full border border-background-100 active:bg-background-100"
          >
            <Text className="text-xs text-typography-600 font-semibold">
              {tag}
            </Text>
          </Pressable>
        ))}
      </HStack>
    </Box>
  )
}
