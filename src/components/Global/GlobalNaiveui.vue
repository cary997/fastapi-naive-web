<!--
 * @Author: Cary
 * @Date: 2024-02-26 02:46:20
 * @LastEditors: 
 * @LastEditTime: 2024-02-26 02:47:11
 * @FilePath: /src/components/Global/GlobalNaiveui.vue
 * @Descripttion: 
-->
<template></template>

<script lang="ts" setup>
import { useDialog, useNotification, useMessage } from "naive-ui"

window.$dialog = useDialog()
window.$message = useMessage()
window.$notification = useNotification()
</script>
