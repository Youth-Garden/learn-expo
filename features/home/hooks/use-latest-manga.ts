import { mangaService } from '@/services/manga'
import { useQuery } from '@tanstack/react-query'

export const useLatestManga = (limit: number = 20) => {
  return useQuery({
    queryKey: ['manga', 'latest', limit],
    queryFn: async ({ signal }) => {
      const response = await mangaService.getLatestUpdates(limit, 0, signal)
      return response.data.items
    },
  })
}
