import { Method, AxiosResponse } from 'axios'

export interface HeaderInter {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8' | 'application/json;charset=utf-8'
}

export interface FetchReq {
    url: string,
    data: any,
    ip?: string,
    method?: Method,
    responseType?: 'json' | 'text' | 'blob',
    headers?: HeaderInter
}

export interface FetchFun<T> {
    (options: FetchReq): AxiosResponse<T>
}

export interface FetchRes {

}
