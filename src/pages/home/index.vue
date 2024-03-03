<!--
 * @Author: guoyl
 * @Date: 2022-12-26 23:51:56
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-26 19:57:31
 * @FilePath: /fastapi-naive-web/src/pages/home/index.vue
 * @Descripttion: 
-->

<template>
  <div class="flex flex-row space-x-8">
    <div class="flex flex-none flex-col space-y-4">
      <h1>Home</h1>
      <RouterLink to="/result/403">
        <n-button>test</n-button>
      </RouterLink>
      <NInput text></NInput>
      <n-space>
        <n-tag closable @close="handleClose"> 爱在西元前 </n-tag>
        <n-tag type="success" closable @close="handleClose"> 不该 </n-tag>
        <n-tag type="warning" closable @close="handleClose"> 超人不会飞 </n-tag>
        <n-tag type="error" closable @close="handleClose"> 手写的从前 </n-tag>
        <n-tag type="info" closable @click="handleClick" @close="handleClose">
          哪里都是你
        </n-tag>
      </n-space>
    </div>
    <div class="flex flex-1 flex-col space-y-4">
      <div class="flex flex-none">
        <button class="btn btn-primary">Button</button>
        <button class="btn btn-info">Button</button>
        <button class="btn btn-success">Button</button>
        <button class="btn btn-warning">Button</button>
        <button class="btn btn-error">Button</button>
        <button class="btn btn-secondary">Button</button>
      </div>
      <div class="dropdown mb-72">
        <div tabindex="0" role="button" class="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            class="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path
              d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
            ></path>
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="light"
              value="light"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="dark"
              value="dark"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="synthwave"
              value="synthwave"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="retro"
              value="retro"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NInput, NSpace, NTag, NButton } from "naive-ui";

defineOptions({
  name: "Home",
});

const handleClose = () => {
  window.$message.info("tag close");
};
const handleClick = () => {
  window.$message.info("tag click");
};
</script>
