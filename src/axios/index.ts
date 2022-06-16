import axios from 'axios'
import { FetchReq, FetchRes, FetchFun } from './index.d'
import { FETCHIP } from './baseIp'

const axiosIns = axios.create()

const useFetch = () => {
    const fetch: FetchFun<T> = ({
        url = '',
        ip = FETCHIP,
        method = 'post',
        data,
        headers = {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        responseType = 'json'
    }) => {
        return axiosIns.request({})
    }
    return {
        fetch
    }
}

export default useFetch