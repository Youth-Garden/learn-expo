import { APIEndpointEnum } from '../../shared/constants/server'
import { BaseRequest, BaseResponse } from '../core'
import { registry } from './registry'
import { MappedManga } from './types'

class MangaService extends BaseRequest {
  constructor() {
    super(registry)
  }

  public getTrending(
    limit: number = 20,
    offset: number = 0,
    signal?: AbortSignal,
  ): Promise<BaseResponse<MappedManga[]>> {
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
}

const instance = new MangaService()
export default instance
