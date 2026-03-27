import { APIEndpointEnum } from '../../shared/constants/server'
import { MapperRegistry } from '../core/types'
import { mangaDetailMapper, mangaListMapper } from './mappers'

export const registry: MapperRegistry = {
  [APIEndpointEnum.MangaList]: mangaListMapper,
  [APIEndpointEnum.MangaDetail]: mangaDetailMapper,
}
