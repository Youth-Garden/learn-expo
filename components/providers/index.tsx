import React from 'react'
import { QueryProvider } from './query-provider'
import { UIProvider } from './ui-provider'
import '@/shared/i18n'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <UIProvider>{children}</UIProvider>
    </QueryProvider>
  )
}
