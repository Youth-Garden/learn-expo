import { APIEndpointEnum } from '../../shared/constants/server'
import { MapperRegistry } from '../core/types'
import { mangaListMapper } from './mappers'

export const registry: MapperRegistry = {
  [APIEndpointEnum.MangaList]: mangaListMapper,
}
