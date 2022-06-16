import { UseAxiosReq, UseAxiosRes } from './type';
import Request from './request'

const request = new Request({
    interceptors: {
        requestInterceptors: config => {
            console.log('实例拦截器');
            
            return config
        },
        responseInterceptors: (res) => {
            return res
        }
    }
})


const useAxios = <D, T>(config: UseAxiosReq<D>): Promise<UseAxiosRes<T>> => {
    return request.request<UseAxiosRes<T>>(config)
}

export default useAxios