import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useReactQueryDevTools } from '@dev-plugins/react-query'
import React from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes cache
      retry: 2,
      refetchOnWindowFocus: false, // Less noisy on mobile
    },
  },
})

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  useReactQueryDevTools(queryClient)

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
