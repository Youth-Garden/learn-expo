import '@/shared/i18n'
import React, { PropsWithChildren } from 'react'
import { QueryProvider } from './query-provider'
import { UIProvider } from './ui-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <UIProvider>{children}</UIProvider>
    </QueryProvider>
  )
}
