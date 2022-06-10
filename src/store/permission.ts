import { defineStore } from "pinia";
import { getRoutes } from '@/router'
import { RoutesInter } from '@/router/index.d'


export interface permissionInter {
    routes: RoutesInter
}

const usePermissionStore = defineStore('permission', {
    state(){
        return ({
            routes: []
        }) as permissionInter
    },
    actions: {
        set_routes(value: RoutesInter) {
            this.routes = value
        },
        get_permission_routes() {
            this.set_routes(getRoutes().routes)
        },
        clean_router(){
            sessionStorage.clear()
            getRoutes()
        }
    }
})

export default usePermissionStore