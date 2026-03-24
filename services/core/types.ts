export interface BaseResponse<T> {
  result: 'ok' | 'error'
  response: 'collection' | 'entity'
  data: T
  limit?: number
  offset?: number
  total?: number
  // Dành cho trường hợp lỗi của MangaDex
  errors?: any[]
}

export interface Paging<T> {
  data: T[]
  limit: number
  offset: number
  total: number
}

export type ResponseMapper = (data: any) => any
export type MapperRegistry = Record<string, ResponseMapper>
