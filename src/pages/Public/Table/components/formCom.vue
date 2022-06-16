<template>
    <div>
        <el-skeleton animated v-if="!load">
            <template #template>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
            </template>
        </el-skeleton>
        <el-form :inline="true" v-else>
            <el-form-item label="姓名:">
                <el-input v-model="name" placeholder="请输入姓名"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
export default {
    name: 'FormCom',
}
</script>
<script setup lang="ts">
const load = ref(false)
const name = ref('')
onMounted(() => {
    setTimeout(() => {
        load.value = true
    }, 2000)
})
</script>

<style lang="scss" scoped>
</style>