import useAxios from '@/axiosTs/ax';
import { UseAxiosRes } from './../axiosTs/type';
// import useAxios from '@/axiosTs'

interface UserListReqInter {
    page: number,
    pagin: number,
    pageNum: number,
    enable: boolean | string
}

interface UserListItemInter {
    name: string,
    userCode: string,
    phone: number,
    email: string
}


type UserListResInter = UserListItemInter[]

export const fetchUserList = (data: UserListReqInter): Promise<UseAxiosRes<UserListResInter>> => {
    return useAxios<UserListReqInter, UserListResInter>({
        ip: '',
        url: '',
        data: data
    })
}