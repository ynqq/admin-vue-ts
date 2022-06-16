import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { RequestConfig, RequestInterceptors, InstenceConfig } from './type'

class Request {
    instance: AxiosInstance
    // 拦截器对象
    interceptorsObj?: RequestInterceptors

    constructor(config: InstenceConfig) {
        this.instance = axios.create(config)
        this.interceptorsObj = config.interceptors

        // 请求拦截
        this.instance.interceptors.request.use((req: AxiosRequestConfig) => {
            console.log('全局请求拦截器');
            return req
        }, (err: any) => err)
        this.instance.interceptors.request.use(this.interceptorsObj?.requestInterceptors, this.interceptorsObj?.requestInterceptorsCatch)

        // 响应拦截
        this.instance.interceptors.response.use(this.interceptorsObj?.responseInterceptors, this.interceptorsObj?.responseInterceptorsCatch)
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            console.log('全局响应拦截器');
            return res.data
        })

    }

    request<T>(config: RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config)
            }
            const { url, ip = '', method, data, headers } = config
            this.instance.request<any, T>({
                url: ip + url,
                method,
                data,
                headers
            }).then(res => {
                if (config.interceptors?.responseInterceptors) {
                    res = config.interceptors.responseInterceptors<T>(res)
                }
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default Request