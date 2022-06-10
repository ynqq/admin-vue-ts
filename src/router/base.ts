import { RoutesInter } from './index.d'

const baseRouter: RoutesInter = [
    {
        path: '/404',
        name: 'notFound',
        meta: {
            title: '',
            icon: '',
            keepAlive: false,
            hidden: true,
            needLogin: false
        },
        component: () => import('@/pages/404.vue')
    },
    {
        meta: {
            title: '404',
            icon: '',
            keepAlive: false,
            hidden: true,
            needLogin: false
        },
        path: '/:w+',
        redirect: '/404',
    },
]
export default baseRouter