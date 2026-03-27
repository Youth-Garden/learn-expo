import {
  createErrorResponse,
  createPaging,
  createResponse,
} from '../core/utils'
import { Manga } from './types'

const mapManga = (manga: any): Manga => {
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
}

export const mangaListMapper = (data: any) => {
  if (data?.result === 'ok' && Array.isArray(data.data)) {
    return createResponse(createPaging(data.data.map(mapManga), data))
  }

  return createErrorResponse(
    data?.errors?.[0]?.detail || 'Unknown error',
    createPaging<Manga>([], {}),
    data?.errors,
  )
}

export const mangaDetailMapper = (data: any) => {
  if (data?.result === 'ok' && data.data) {
    return createResponse(mapManga(data.data))
  }

  return createErrorResponse(
    data?.errors?.[0]?.detail || 'Unknown error',
    data?.data,
    data?.errors,
  )
}
