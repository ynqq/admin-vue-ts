import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestConfig extends AxiosRequestConfig {
    ip?: string
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

const axiosInstance = axios.create()
axiosInstance.interceptors.request.use((config: RequestConfig) => {
    return config
}, (err: any) => {
    return err
})
axiosInstance.interceptors.response.use((res) => {
    return res.data
}, (err: any) => {
    return err
})

const useAxios = <D, T>(config: UseAxiosReq<D>): Promise<UseAxiosRes<T>> => {
    const { url, ip = '', data, method = 'post', headers = {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;'
    } } = config
    return new Promise((resolve, reject) => {
        axiosInstance.request<any, UseAxiosRes<T>>({
            url: ip + url,
            data,
            method,
            headers
        }).then(res => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export default useAxios
