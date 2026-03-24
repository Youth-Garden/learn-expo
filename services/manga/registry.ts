import { APIEndpointEnum } from '../../config/constants/server'
import { MapperRegistry } from '../core/types'
import { mangaListMapper } from './mappers'

export const registry: MapperRegistry = {
  [APIEndpointEnum.MangaList]: mangaListMapper,
}
