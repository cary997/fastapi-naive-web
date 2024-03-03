<!--
 * @Author: guoyaolei
 * @Date: 2023-07-14 15:14:16
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-29 23:07:39
 * @FilePath: /fastapi-naive-web/src/components/Layout/LayoutContent.vue
 * @Descripttion: 
-->
<template>
  <div class="flex flex-auto h-full w-full">
    <div :class="['flex', 'flex-auto', isMobile ? '' : 'm-2 p-1']">
      <router-view>
        <template #default="{ Component, route }">
          <transitionMain :route="route">
            <keep-alive
              v-if="keepAlive"
              :include="useMenusStoreHook().cachePageList"
            >
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
            <component v-else :is="Component" :key="route.fullPath" />
          </transitionMain>
        </template>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenusStoreHook } from "@/store/modules/appMenus.js";
import usewebSiteStore from "@/store/modules/appWebSite";
import { storeToRefs } from "pinia";
import { h, computed, Transition, defineComponent } from "vue";

const { isMobile } = storeToRefs(usewebSiteStore());
const keepAlive = computed(() => {
  return (route) => {
    route.meta?.KeepAlive;
    return route.meta.KeepAlive === true ? true : false;
  };
});

const transitionMain = defineComponent({
  render() {
    return h(
      Transition,
      {
        name: "fade-transform",
        enterActiveClass: this.route.meta.enterTransition
          ? `animate__animated ${this.route.meta.enterTransition}`
          : `animate__animated animate__fadeInLeft`,
        leaveActiveClass: this.route.meta.leaveTransition
          ? `animate__animated ${this.route.meta.leaveTransition}`
          : `animate__animated animate__fadeOutRight`,
        mode: "out-in",
        appear: true,
      },
      {
        default: () => [this.$slots.default()],
      }
    );
  },
  props: {
    route: {
      type: undefined,
      required: true,
    },
  },
});
</script>
