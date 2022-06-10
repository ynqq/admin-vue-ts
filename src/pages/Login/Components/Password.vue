<template>
    <div class="passwordLogin">
        <el-form :model="form" ref="formRef" :rules="rules">
            <el-form-item prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <div>
                <el-button @click="submit" type="primary" style="width: 100%">登录</el-button>
            </div>
        </el-form>
    </div>
</template>

<script lang="ts">
export default {
    name: "PasswordCom"
}
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useLoading, useThrottle } from '@/utils/decorator'
import { useRouter } from 'vue-router';
import usePermissionStore from '@/store/permission';

const router = useRouter()
const formRef = ref<FormInstance>()

const form = reactive({
    username: '',
    password: '',
    remember: localStorage.TSRP === '1'
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名' }
    ],
    password: [
        { required: true, message: '请输入密码' }
    ]
})


const loginAction = useLoading(() => {
    return new Promise((resolve) => {
        resolve({ code: 1000 })
    })
})

const submit = useThrottle(() => {
    formRef.value?.validate((value) => {
        if (value) {
            loginAction().then((res) => {
                if (res.code === 1000) {
                    handleLoginSuccess()
                }
            })
        }
    })
}, 1000)

const handleLoginSuccess = () => {
    const store = usePermissionStore()
    sessionStorage.LOGIN_STATUS = '1'
    sessionStorage.permission = '1'
    store.get_permission_routes()
    router.push('/Home')
}

</script>

<style scoped lang="scss">
</style>

