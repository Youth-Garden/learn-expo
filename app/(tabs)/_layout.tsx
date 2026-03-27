import { Tabs } from 'expo-router'
import React from 'react'
import { Box } from '@/components/ui/box'
import { Header } from '@/components/layout/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { useTranslation } from 'react-i18next'

import { HapticTab } from '@/components/haptic-tab'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { Colors } from '@/shared/constants'
import { useColorScheme } from '@/shared/hooks/use-color-scheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { t } = useTranslation()

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <Box className="px-6 pt-4">
        <Header />
      </Box>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: t('tabs.home'),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: t('tabs.explore'),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="magnifyingglass" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="updates"
          options={{
            title: t('tabs.updates'),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="bell.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: t('tabs.library'),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="books.vertical.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
