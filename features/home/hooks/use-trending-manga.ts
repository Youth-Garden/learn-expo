import { mangaService } from '@/services/manga'
import { useQuery } from '@tanstack/react-query'

export const useTrendingManga = (limit: number = 20) => {
  return useQuery({
    queryKey: ['trending-manga', limit],
    queryFn: async ({ signal }) => {
      const response = await mangaService.getTrending(limit, 0, signal)
      return response.data.items || []
    },
  })
}
