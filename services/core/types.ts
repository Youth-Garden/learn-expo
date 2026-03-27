export interface BaseResponse<T> {
  code: string
  message: string
  data: T
  error?: any
}

export interface Paging<T> {
  items: T[]
  meta: {
    limit: number
    offset: number
    total: number
  }
}

export type ResponseMapper = (data: any) => any
export type MapperRegistry = Record<string, ResponseMapper>
