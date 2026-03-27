import { BaseResponse } from '../core/types'
import { Manga } from './types'

export const mangaListMapper = (data: any): BaseResponse<Manga[]> => {
  if (data?.result === 'ok' && Array.isArray(data.data)) {
    const mappedData = data.data.map((manga: any) => {
      const coverArt = manga.relationships?.find(
        (rel: any) => rel.type === 'cover_art',
      )
      const fileName = coverArt?.attributes?.fileName
      return {
        ...manga,
        coverUrl: fileName
          ? `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`
          : null,
      }
    })

    return {
      ...data,
      data: mappedData,
    }
  }

  return data
}
