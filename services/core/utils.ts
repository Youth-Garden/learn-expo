import { BaseResponse, Paging } from './types'

/**
 * Helper to build a successful BaseResponse
 */
export const createResponse = <T>(data: T): BaseResponse<T> => ({
  code: 'ok',
  message: 'Success',
  data,
})

/**
 * Helper to build an error BaseResponse
 */
export const createErrorResponse = <T>(
  message: string,
  data: T,
  error?: any,
): BaseResponse<T> => ({
  code: 'error',
  message,
  data,
  error,
})

/**
 * Helper to build a Paging wrapper from raw paginated API data
 */
export const createPaging = <T>(
  items: T[],
  raw: { limit?: number; offset?: number; total?: number },
): Paging<T> => ({
  items,
  meta: {
    limit: raw.limit ?? 0,
    offset: raw.offset ?? 0,
    total: raw.total ?? 0,
  },
})
