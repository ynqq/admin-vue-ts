import { createApp } from 'vue'
import { App as AppInter } from 'vue'
import '@/assets/css/reset.css'
import 'nprogress/nprogress.css'
import '@/assets/css/element.scss'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router, { routerAfterEach, routerBeforeEach } from './router'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app: AppInter = createApp(App)

const $icons: any = {}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
    $icons[key] = component
}

app.config.globalProperties.devtools = false
app.config.globalProperties.$icons = $icons

app
    .use(router)
    .use(store)
    .use(ElementPlus, {
        locale: zhCn
    })
    .mount('#app')

routerBeforeEach()
routerAfterEach()