<template>
    <el-dropdown @command="handleCommand" class="dropdown" trigger="click">
        <span class="el-dropdown-link">
            姓名
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts">
export default {
    name: 'dropdownCOm',
}
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router'

type CommandList = ('exit')

const router = useRouter()
const handleCommand = (command: CommandList) => {
    if (command === 'exit') {
        router.replace('/Login')
    }
}
</script>

<style lang="scss" scoped>
.dropdown {
    cursor: pointer;
    height: var(--header-height);
    align-items: center;
    display: flex;
    color: var(--el-menu-text-color);
}
</style>