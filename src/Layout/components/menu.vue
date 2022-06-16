<template>
    <el-sub-menu :index="targetMenu.path" v-if="isSub && !isOne">
        <template #title>
            <el-icon>
                <component :is="$icons[targetMenu.meta.icon]"></component>
            </el-icon>
            <span>
                {{ targetMenu.meta.title }}
            </span>
        </template>
        <menuCom v-for="menuItem in childList" :key="menuItem.path" :menuInfo="menuItem" />
    </el-sub-menu>
    <el-menu-item v-else :index="targetMenu.path" @click="handleToPath">
        <!-- <div> -->
        <el-icon>
            <component :is="$icons[targetMenu.meta.icon]"></component>
        </el-icon>
        <template #title>
            <span>
                {{ targetMenu.meta.title }}
            </span>
        </template>
        <!-- </div> -->
    </el-menu-item>
</template>
<script lang="ts">
import { computed, getCurrentInstance, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useBaseStore from '@/store/base'
import { RoutesInter, RouterItem } from '@/router/index.d';
export default {
    name: 'menuCom',
}
</script>
<script setup lang="ts">
const current = getCurrentInstance()
const $icons = current?.appContext.config.globalProperties.$icons
const props = defineProps({
    menuInfo: {
        type: Object,
        default: () => ({}),
    },
})

let childList: RoutesInter = []
if (props.menuInfo.children) {
    childList = props.menuInfo.children.filter((v: RouterItem) => !v.meta.hidden)
}
const isSub = childList.length > 0
const isOne = ref(props.menuInfo?.meta?.isOne)

let targetMenu = reactive(props.menuInfo)
if (isSub) {
    if (isOne.value) {
        // 子菜单只有一个展示的节点
        targetMenu = childList[0]
    }
}

const router = useRouter()
const handleToPath = () => {
    router.push(props.menuInfo.path)
}
</script>

<style lang="scss" scoped>
</style>