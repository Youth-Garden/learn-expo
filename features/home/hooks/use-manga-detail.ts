import { mangaService } from '@/services/manga'
import { useQuery } from '@tanstack/react-query'

export const useMangaDetail = (id: string) => {
  return useQuery({
    queryKey: ['manga-detail', id],
    queryFn: ({ signal }) => mangaService.getMangaDetail(id, signal),
    enabled: !!id,
    select: (res) => res.data,
  })
}
