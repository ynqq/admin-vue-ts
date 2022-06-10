import Layout from '@/Layout/Index.vue'
import { RoutesInter } from '../index.d'

const adminRoutes: RoutesInter = [
    {
        path: '/TestPage',
        name: 'TestPage',
        redirect: '/TestIndex',
        component: Layout,
        meta: {
            title: '',
            needLogin: true,
            isOne: true,
            hidden: false,
            keepAlive: false,
            icon: 'Clock'
        },
        children: [
            {
                path: '/TestIndex',
                name: 'TestIndex',
                component: () => import('@/pages/Public/Test/Index.vue'),
                meta: {
                    title: '测试页面',
                    needLogin: true,
                    hidden: false,
                    icon: 'AddLocation',
                    showPath: '/TestIndex'
                }
            }
        ]
    },
    {
        path: '/TablePage',
        name: 'TablePage',
        redirect: '/TableManage',
        component: Layout,
        meta: {
            title: '',
            needLogin: true,
            isOne: true,
            hidden: false,
            keepAlive: false,
            icon: 'Clock'
        },
        children: [
            {
                path: '/TableManage',
                name: 'TableManage',
                component: () => import('@/pages/Public/Table/Index.vue'),
                meta: {
                    title: '表格',
                    needLogin: true,
                    hidden: false,
                    icon: 'AddLocation',
                    showPath: '/TableManage'
                }
            }
        ]
    }
]

export default adminRoutes