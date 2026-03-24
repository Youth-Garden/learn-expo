export const BASE_API = process.env.EXPO_PUBLIC_API_URL

export const DEFAULT_TIMEOUT = 30000

export enum APIEndpointEnum {
  MangaList = '/manga',
  MangaDetail = '/manga/[id]',
  ChapterList = '/chapter',
  CoverArt = '/cover',
}
