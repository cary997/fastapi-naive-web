<!--
 * @Author: Cary
 * @Date: 2024-03-03 11:22:02
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-03 22:20:21
 * @FilePath: /fastapi-naive-web/src/pages/system/info/index.vue
 * @Descripttion: 
-->
<template>
    <div class="flex-1 default-bg p-2">
        <n-card
            embedded
            size="small"
            :segmented="{
                content: true,
            }"
            :bordered="false"
        >
            fastapi-naive-admin
            是一个基于python3+fastapi框架的权限控制系统，集合了常见的权限控制示例。前端使用了最新的
            Vue3、Vite、Element-Plus、TypeScript、Pinia、Tailwindcss
            等主流技术开发。后端使用python3、fastapi、tortoise-orm等主流技术开发。您可基于此项目基础上专注开发您的业务模块，希望此项目对您有帮助！

            <n-descriptions
                title="平台信息"
                label-placement="left"
                label-align="left"
                :column="3"
                bordered
                size="small"
                class="pt-5"
            >
                <n-descriptions-item label="系统版本">
                    {{ pkg.version }}
                </n-descriptions-item>
                <n-descriptions-item label="最后编译时间">
                    {{ pkg.lastBuildTime }}
                </n-descriptions-item>
                <n-descriptions-item label="推荐Node版本">
                    {{ pkg.engines.node }}
                </n-descriptions-item>
                <n-descriptions-item label="推荐Npm版本">
                    {{ pkg.engines.npm }}
                </n-descriptions-item>
                <n-descriptions-item label="代码仓库">
                    <a
                        href="https://github.com/guoyl1997/fastapi-naive-admin"
                        target="_blank"
                        class="link link-primary mr-2"
                        >GitHub</a
                    >
                    <a
                        href="https://github.com/guoyl1997/fastapi-naive-admin"
                        target="_blank"
                        class="link link-primary ml-2"
                        >Gitee</a
                    >
                </n-descriptions-item>
                <n-descriptions-item label="预览地址">
                    {{ pkg.engines.npm }}
                </n-descriptions-item>
            </n-descriptions>
            <n-descriptions
                title="生产环境依赖"
                label-placement="left"
                label-align="left"
                :column="5"
                size="small"
                bordered
                class="pt-5"
            >
                <n-descriptions-item v-for="item in schema" :label="item.label">
                    {{ item.version }}
                </n-descriptions-item>
            </n-descriptions>
            <n-descriptions
                title="开发环境依赖"
                label-placement="left"
                label-align="left"
                :column="5"
                size="small"
                bordered
                class="pt-5"
            >
                <n-descriptions-item
                    v-for="item in devSchema"
                    :label="item.label"
                >
                    {{ item.version }}
                </n-descriptions-item>
            </n-descriptions>
        </n-card>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: "systemInfo",
})
import { NDescriptions, NDescriptionsItem, NCard } from "naive-ui"
const { pkg } = __APP_INFO__
const { dependencies, devDependencies } = pkg
export interface schemaItem {
    version: string
    label: string
}
const schema: schemaItem[] = []
const devSchema: schemaItem[] = []
Object.keys(dependencies).forEach(key => {
    schema.push({ version: dependencies[key], label: key })
})

Object.keys(devDependencies).forEach(key => {
    devSchema.push({ version: devDependencies[key], label: key })
})
</script>

<style scoped></style>
