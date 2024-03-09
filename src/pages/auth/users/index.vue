<!--
 * @Author: Cary
 * @Date: 2022-12-26 23:51:56
 * @LastEditors: 
 * @LastEditTime: 2024-02-24 00:26:57
 * @FilePath: /src/pages/auth/users/index.vue
 * @Descripttion: 
-->

<template>
    <div class="flex-1 flex flex-col">
        <usersTable />
    </div>
</template>

<script lang="ts" setup>
import usersTable from "./usersTable.vue"

defineOptions({
    name: "authUsers",
})
</script>
