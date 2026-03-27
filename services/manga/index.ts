import { APIEndpointEnum } from '../../shared/constants/server'
import { BaseRequest, BaseResponse } from '../core'
import { registry } from './registry'
import { Manga } from './types'

class MangaService extends BaseRequest {
  constructor() {
    super(registry)
  }

  public getTrending(
    limit: number = 20,
    offset: number = 0,
    signal?: AbortSignal,
  ): Promise<BaseResponse<Manga[]>> {
    return this._get(
      APIEndpointEnum.MangaList,
      {
        limit,
        offset,
        includes: ['cover_art', 'author'],
        order: { followedCount: 'desc' },
      },
      { signal },
    )
  }

  public getMangaDetail(
    mangaId: string,
    signal?: AbortSignal,
  ): Promise<BaseResponse<any>> {
    return this._get(
      APIEndpointEnum.MangaDetail,
      { includes: ['cover_art', 'author', 'artist'] },
      { signal, pathParams: { id: mangaId } },
    )
  }

  public getLatestUpdates(
    limit: number = 20,
    offset: number = 0,
    signal?: AbortSignal,
  ): Promise<BaseResponse<Manga[]>> {
    return this._get(
      APIEndpointEnum.MangaList,
      {
        limit,
        offset,
        includes: ['cover_art', 'author'],
        order: { updatedAt: 'desc' },
        contentRating: ['safe', 'suggestive'],
      },
      { signal },
    )
  }

  public searchManga(
    title: string,
    limit: number = 20,
    offset: number = 0,
    signal?: AbortSignal,
  ): Promise<BaseResponse<Manga[]>> {
    return this._get(
      APIEndpointEnum.MangaList,
      {
        title,
        limit,
        offset,
        includes: ['cover_art', 'author'],
        contentRating: ['safe', 'suggestive'],
      },
      { signal },
    )
  }
}

export const mangaService = new MangaService()
