<template>
    <div class="LoginContainer">
        <div class="loginBox">
            <PasswordLogin />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'LoginCom'
}
</script>

<script setup lang="ts">
import PasswordLogin from './Components/Password.vue'
</script>

<style scoped lang="scss">
.LoginContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .loginBox {
        width: 600px;
        box-shadow: 0 0 10px #efefef;
        border-radius: 1px;
        overflow: hidden;
        padding: 120px 20px;
        box-sizing: border-box;
    }
}
</style>