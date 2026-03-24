import { ToastProvider } from '@/components/providers/toast-provider'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { useColorScheme } from '@/hooks/use-color-scheme'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import React from 'react'

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme()

  return (
    <GluestackUIProvider mode="dark">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
        <ToastProvider />
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
