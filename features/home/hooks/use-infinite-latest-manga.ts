import { useInfiniteQuery } from '@tanstack/react-query'
import { mangaService } from '@/services/manga'

export const useInfiniteLatestManga = (limit: number = 20) => {
  return useInfiniteQuery({
    queryKey: ['manga', 'latest', 'infinite', limit],
    queryFn: async ({ pageParam = 0, signal }) => {
      return mangaService.getLatestUpdates(limit, pageParam, signal)
    },
    getNextPageParam: (lastPage) => {
      const { meta } = lastPage.data
      const nextOffset = meta.offset + meta.limit
      return nextOffset < meta.total ? nextOffset : undefined
    },
    initialPageParam: 0,
  })
}
