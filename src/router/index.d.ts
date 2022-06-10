import { Router, RouteRecordRaw } from "vue-router"

export interface MetaInter {
    title: string,
    icon: string,
    keepAlive: boolean,
    hidden: boolean,
    isOne?: boolean
}

export type RouterItem = RouteRecordRaw & {
    meta: MetaInter
}

export type RoutesInter = RouterItem[]

export type GetRoutesResult = {
    routes: RoutesInter,
    router: Router
}