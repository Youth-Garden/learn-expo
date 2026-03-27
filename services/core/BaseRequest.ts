import axios, { AxiosInstance, AxiosRequestConfig, isCancel } from 'axios'
import { BASE_API, DEFAULT_TIMEOUT } from '../../shared/constants/server'
import { formatUrl } from '../../shared/utils/urlHelper'
import { MapperRegistry } from './types'

import { toast } from '../../shared/utils/toast-helper'

export interface RequestConfig extends AxiosRequestConfig {
  disabledToast?: boolean
  mapperKey?: string
  pathParams?: Record<string, string | number>
}

export abstract class BaseRequest {
  protected readonly axiosInstance: AxiosInstance
  protected readonly mappers: MapperRegistry

  constructor(
    mappers: MapperRegistry = {},
    baseURL: string = BASE_API as string,
  ) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: DEFAULT_TIMEOUT,
    })
    this.mappers = mappers
  }

  private async request<T = any>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    config: RequestConfig = {},
    data?: any,
  ): Promise<T> {
    try {
      const mapper = this.mappers[config.mapperKey || url]
      const formattedUrl = formatUrl(url, config.pathParams)

      let finalConfig: AxiosRequestConfig = {
        ...config,
        method,
        url: formattedUrl,
        data,
      }

      if (mapper) {
        finalConfig.transformResponse = [
          ...((axios.defaults.transformResponse as any[]) || []),
          mapper,
        ]
      }

      finalConfig.headers = {
        'Api-Language': 'en',
        ...finalConfig.headers,
      }

      const result = await this.axiosInstance.request(finalConfig)

      if (result.data?.result === 'error' && !config.disabledToast) {
        toast.error(
          'API Error',
          result.data.errors?.[0]?.detail || 'Unknown error occurred',
        )
      }

      return result.data
    } catch (error: any) {
      if (!isCancel(error) && !config.disabledToast) {
        toast.error('Network Error', error.message)
        // TODO: Integrate Sentry or similar observability tool to monitor unhandled network failures
      }
      throw error
    }
  }

  protected _get<T = any>(
    url: string,
    params?: any,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>('GET', url, { ...config, params })
  }

  protected _post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>('POST', url, config, data)
  }

  protected _put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>('PUT', url, config, data)
  }

  protected _patch<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>('PATCH', url, config, data)
  }

  protected _delete<T = any>(
    url: string,
    params?: any,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>('DELETE', url, { ...config, params })
  }
}
