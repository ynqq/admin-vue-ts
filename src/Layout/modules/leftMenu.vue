<template>
    <div class="leftMenuContainer">
        <el-button class="tooglebtn" @click="handleToggle" type="primary" text>
            <el-icon :class="['collIcon', menuCollapse ? '' : 'active']">
                <Expand />
            </el-icon>
            <div v-show="!menuCollapse">收起</div>
        </el-button>

        <el-menu
            :collapse="menuCollapse"
            :default-active="$route.meta.showPath"
            class="leftMenu"
            menu-trigger="click"
        >
            <menuCom
                v-for="menuItem in routes"
                :key="menuItem.path"
                :menuInfo="menuItem"
            />
        </el-menu>
    </div>
</template>


<script lang="ts">
export default {
    name: 'LeftMenu'
}
</script>

<script setup lang="ts">
import usePermissionStore from '@/store/permission'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import menuCom from '../components/menu.vue'
import useBaseStore from '@/store/base'

const baseStore = useBaseStore()

let menuCollapse = computed(() => baseStore.menuCollapse)
const handleToggle = () => {
    baseStore.toggle_menuCollapse()
}

const route = useRoute()
const activePath = computed(() => route.path)

const permissionStore = usePermissionStore()
const routes = computed(() =>
    permissionStore.routes.filter((v) => !v.meta.hidden)
)
</script>

<style lang="scss" scoped>
.leftMenuContainer {
    float: left;
    height: 100%;
    .tooglebtn {
        width: 100%;
        height: 40px;
        justify-content: flex-start;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 22px;
        border-radius: 0;
        border-right: solid 1px var(--el-menu-border-color);
        box-sizing: border-box;
        div {
            font-size: 16px;
            margin-left: 6px;
        }
    }
    .collIcon {
        transition: all 0.3s linear;
        &.active {
            transform: rotateY(180deg);
        }
    }
    .leftMenu {
        height: calc(100% - 40px);
        ::v-deep {
            &:not(.el-menu--collapse) {
                width: 220px;
            }
        }
    }
}
</style>