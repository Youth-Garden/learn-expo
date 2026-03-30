import { ToastProvider } from '@/components/providers/toast-provider'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { useColorScheme } from '@/shared/hooks/use-color-scheme'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import React, { PropsWithChildren } from 'react'
import { PortalProvider } from './portal-provider'

export const UIProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme()

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PortalProvider>
          {children}
          <ToastProvider />
        </PortalProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
