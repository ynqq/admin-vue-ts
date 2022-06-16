<template>
    <div class="mt20">
        <el-skeleton animated v-if="!load">
            <template #template>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
                <el-skeleton-item style="width: 100%"></el-skeleton-item>
            </template>
        </el-skeleton>
        <div v-if="load">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="Name" />
                <el-table-column fixed="right" label="Operations" width="220">
                    <template #default>
                        <el-button text size="small" @click="handleClick">
                            Detail
                        </el-button>
                        <el-button text size="small">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div :span="24" class="pagination">
                <el-pagination
                    @size-change="handleSearch"
                    @current-change="handleSearch"
                    v-model:current-page="page"
                    :page-sizes="[10, 15, 20, 25]"
                    v-model:page-size="pageNum"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { fetchUserList } from '@/Api';
import { onMounted, ref } from 'vue'
export default {
    name: 'TableCom',
}
</script>
<script setup lang="ts">
interface UserItem {
    name: string,
    age: number
}
interface UserList {
    [key: number]: UserItem
}
const load = ref(false)

onMounted(() => {
    console.log('???')
    setTimeout(() => {
        load.value = true
    }, 2000)
})

const handleSearch = () => {
    fetchList()
}
const fetchList = () => {
    console.log(page.value, pageNum.value, total.value)
}
const handleClick = () => {
    // 
}
const page = ref(1),
    pageNum = ref(10),
    total = ref(1000)

const tableData:UserList = new Array(10).fill('').map(() => ({
    name: '张三',
    age: 18
}))
fetchUserList({
    page: page.value,
    pageNum: pageNum.value,
    enable: true,
    pagin: 1
}).then(res => {
    res.data.forEach((item) => {
        console.log(item.name);
    })
})
</script>

<style lang="scss" scoped>
</style>