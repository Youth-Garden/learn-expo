import { BaseResponse } from '@/services/core/types'

export function GET(request: Request) {
  const data = {
    message: 'Gomic API Health Check',
    version: '1.0.0',
    status: 'ok',
    timestamp: new Date().toISOString(),
  }

  const response: BaseResponse<typeof data> = {
    code: 'ok',
    message: 'Success',
    data: data,
  }

  return Response.json(response)
}
