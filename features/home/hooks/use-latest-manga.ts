import { useQuery } from '@tanstack/react-query'
import { mangaService } from '@/services/manga'

export const useLatestManga = (limit: number = 20) => {
  return useQuery({
    queryKey: ['manga', 'latest', limit],
    queryFn: async ({ signal }) => {
      const response = await mangaService.getLatestUpdates(limit, 0, signal)
      return response.data
    },
  })
}
