import { createRouter, createWebHashHistory } from 'vue-router'
import notfounRoutes from '@/router/base'
import adminRouters from '@/router/admin/index'
import personalRouters from '@/router/personal/index'
import { RoutesInter, GetRoutesResult } from './index.d'
import Layout from '@/Layout/Index.vue'
import usePermissionStore from '@/store/permission'
import { ElMessageBox } from 'element-plus'
import NProgress from 'nprogress'


export const baseRouter: RoutesInter = [
    {
        path: '/',
        redirect: '/Login',
        meta: {
            title: '',
            icon: '',
            keepAlive: false,
            hidden: true
        }
    },
    {
        path: '/Login',
        name: '/Login',
        component: () => import('@/pages/Login/Index.vue'),
        meta: {
            title: '登录',
            icon: '',
            keepAlive: false,
            hidden: true
        }
    },
    {
        path: '/HomePage',
        name: 'HomePage',
        component: Layout,
        meta: {
            title: '',
            icon: '',
            isOne: true,
            keepAlive: false,
            needLogin: true,
            hidden: true
        },
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: () => import('@/pages/Home/Index.vue'),
                meta: {
                    needLogin: true,
                    hidden: true
                }
            }
        ]
    }


]


function createNewRouter() {
    return createRouter({
        history: createWebHashHistory(),
        routes: baseRouter
    })
}

const router = createNewRouter()

export const resetRouter = (): void => {
    // router = createNewRouter()
}

export const getRoutes = (): GetRoutesResult => {
    let routes = [...baseRouter]
    resetRouter()
    const permission = sessionStorage.permission
    if (permission === '0') {
        routes = routes.concat(adminRouters)
    } else if (permission === '1') {
        routes = routes.concat(personalRouters)
    }
    routes = routes.concat(notfounRoutes)
    console.log(routes)
    
    routes.forEach((route) => {
        router.addRoute(route)
    })
    return { routes, router }
}


export const routerBeforeEach = (): void => {
    const permission = usePermissionStore()

    router.beforeEach((to, from, next) => {
        const { needLogin } = to.meta
        if (needLogin && sessionStorage.LOGIN_STATUS !== '1') {
            setTimeout(() => {
                ElMessageBox.alert('登录超时', '提示', {
                    confirmButtonText: '重新登录',
                    showClose: false,
                    callback: () => {
                        next({
                            replace: true,
                            path: '/Login'
                        })
                    }
                })
            }, 0);
            return
        }
        NProgress.start()

        if (sessionStorage.LOGIN_STATUS === '1' && permission.routes.length === 0) {
            permission.get_permission_routes()
            return next({ ...to, replace: true })
        }
        next()
    })
}

export const routerAfterEach = (): void => {
    router.afterEach(() => {
        NProgress.done()
    })
}

export default router


