<template>
    <div class="layoutContainer">
        <headerCom />
        <div class="layoutMain">
            <leftMenu />
            <div class="routerMain">
                <router-view v-slot="{ Component }">
                    <transition name="breadcrumb" mode="out-in">
                        <component :is="Component"></component>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import headerCom from './modules/headerCom.vue'
import leftMenu from './modules/leftMenu.vue'
export default defineComponent({
    name: 'LayoutIndex',
    components: {
        headerCom,
        leftMenu,
    }
})
</script>

<style lang="scss" scoped>
.layoutContainer {
    height: 100%;

    .layoutMain {
        height: calc(100% - var(--header-height));

        .routerMain {
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            padding: 15px;
            box-sizing: border-box;
        }
    }
}
</style>