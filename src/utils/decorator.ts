import { ElLoading } from 'element-plus'

export type UseFunInter = (...arg: unknown[]) => unknown

const throttle: (time: number) => UseFunInter = (time) => {
    let nowTime: number
    const filter: UseFunInter = (fun: any) => {
        if (!nowTime || Date.now() - nowTime >= time) {
            nowTime = Date.now()
            return fun()
        }
    }
    return filter
}

const createT: (filter: UseFunInter, fun: UseFunInter) => unknown = (filter, fun) => {
    return function (...args: unknown[]) {
        filter(() => fun(args))
    }
}


export const useThrottle = (fun: (...args: any[]) => any, time: number): any => {
    return createT(throttle(time), fun)
}


const debounce: (time: number) => UseFunInter = (time) => {
    let timer: any
    // , nowTime
    return ((fun: () => unknown) => {
        // if (!nowTime) {
        //     nowTime = Date.now()
        // }
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        // if (Date.now() - nowTime > 5000) {
        //     nowTime = Date.now()
        //     fun()
        //     return
        // }
        timer = setTimeout(() => {
            fun()
        }, time);
    }) as UseFunInter
}

export const useDebounce = (fun: UseFunInter, time: number): any => {
    return createT(debounce(time), fun)
}

const loading: () => any = () => {
    return function (fun: (...args: any[]) => any, args: any) {
        const loading = ElLoading.service()
        try {
            const result = fun.apply(null, args)
            if (result instanceof Promise) {
                return result.finally(() => {
                    loading.close()
                })
            }
            loading.close()
            return result
        } catch (error) {
            loading.close()
        }
    }
}

export const useLoading = (fun: UseFunInter): (...args: any[]) => Promise<any> => {
    return async (...args) => {
        const filter = loading()
        return filter(fun, args)
    }
}