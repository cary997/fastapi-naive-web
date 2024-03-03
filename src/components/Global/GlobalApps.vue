<!--
 * @Author: Cary
 * @Date: 2024-02-26 02:16:04
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-26 02:44:08
 * @FilePath: /fastapi-naive-web/src/components/Global/GlobalApps.vue
 * @Descripttion: 
-->
<template>
  <NDialogProvider>
    <NNotificationProvider>
      <NMessageProvider>
        <GlobalNaiveui/>
        <slot name="default" />
      </NMessageProvider>
    </NNotificationProvider>
  </NDialogProvider>
</template>

<script lang="ts" setup>
import {
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
} from "naive-ui";
import GlobalNaiveui from "./GlobalNaiveui.vue";
</script>
