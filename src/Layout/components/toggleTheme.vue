<template>
    <div class="toggleBox">
        <el-switch
            v-model="theme"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
            :active-icon="Sunny"
            :inactive-icon="Moon"
            @change="handleChange"
        />
    </div>
</template>

<script lang="ts">
import { getCurrentInstance, ref } from 'vue'
import { useTheme } from '@/utils/theme'
export default {
    name: 'toggleTheme',
}
</script>
<script setup lang="ts">
const localTheme = localStorage.TestTheme
const theme = ref(localTheme === 'dark')

const current = getCurrentInstance()
const $icon = current?.appContext.config.globalProperties.$icons

const Sunny = $icon['Sunny']
const Moon = $icon['Moon']

const handleChange = () => {
    useTheme(true)
}
</script>

<style lang="scss" scoped>
.toggleBox {
    height: var(--header-height);
    display: flex;
    align-items: center;
}
</style>
