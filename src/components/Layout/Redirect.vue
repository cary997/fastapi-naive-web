<!--
 * @Author: Cary
 * @Date: 2023-06-01 19:28:11
 * @LastEditors: Cary
 * @LastEditTime: 2023-06-05 20:20:27
 * @FilePath: \fastapi-naive-web\src\components\Layout\Redirect.vue
 * @Descripttion: 
-->
<script setup lang="ts">
import { unref } from "vue"
import { useRouter } from "vue-router"

defineOptions({
    name: "redirect",
})
const router = useRouter()
const { currentRoute, replace } = router

const { params, query } = unref(currentRoute)
const { path } = params

const _path = Array.isArray(path) ? path.join("/") : path

replace({
    path: "/" + _path,
    query,
})
</script>

<template>
    <div />
</template>
