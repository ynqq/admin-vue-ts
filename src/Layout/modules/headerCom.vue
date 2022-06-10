<template>
    <header class="headerContainer">
        <div class="logo"></div>
        <div class="mr20">
            <toggleTheme />
        </div>
        <dropdownCom />
    </header>
</template>


<script lang="ts">
export default {
    name: 'HeaderCom'
}
</script>

<script setup lang="ts">
import dropdownCom from '../components/dropdown.vue'
import toggleTheme from '../components/toggleTheme.vue'
</script>

<style lang="scss" scoped>
.headerContainer {
    display: flex;
    height: var(--header-height);
    background: var(--bg-color);
    color: var(--bg-color);
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 0 0px 10px var(--header-shadow);
    .mr20 {
        margin-right: 20px;
    }
    .logo {
        flex: 1;
    }
}
</style>