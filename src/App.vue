<template>
    <div class="mainApp">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from './utils/theme'
export default defineComponent({
    name: 'App',
    components: {},
    mounted() {
        
        this.$nextTick(() => {
            useTheme()
        })
    }
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .mainApp {
        width: 100%;
        height: 100%;
    }
}
</style>
