import { useInfiniteQuery } from '@tanstack/react-query'
import { mangaService } from '@/services/manga'

export const useInfiniteLatestManga = (limit: number = 20) => {
  return useInfiniteQuery({
    queryKey: ['manga', 'latest', 'infinite', limit],
    queryFn: async ({ pageParam = 0, signal }) => {
      const response = await mangaService.getLatestUpdates(limit, pageParam, signal)
      return response
    },
    getNextPageParam: (lastPage) => {
      const nextOffset = (lastPage.offset || 0) + (lastPage.limit || 0)
      return nextOffset < (lastPage.total || 0) ? nextOffset : undefined
    },
    initialPageParam: 0,
  })
}
