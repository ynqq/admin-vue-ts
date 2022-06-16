import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors {
    // 请求拦截
    requestInterceptors?: (config: AxiosRequestConfig) => RequestConfig
    requestInterceptorsCatch?: (err: any) => any
    
    // 响应拦截
    responseInterceptors?: <T = AxiosResponse>(config: T) => T
    responseInterceptorsCatch?: (err: any) => any

}

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors
    ip?: string
}

// 实例对象
export interface InstenceConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors
}

// 请求参数
export interface UseAxiosReq<T> extends AxiosRequestConfig {
    data?: T,
    ip?: string
}
// 返回参数
export interface UseAxiosRes<T> {
    code: number,
    message: string,
    data: T
}