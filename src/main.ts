/*
 * @Author: guoyl
 * @Date: 2022-12-26 21:26:40
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-03 23:54:39
 * @FilePath: /fastapi-naive-web/src/main.ts
 * @Descripttion:
 */
import { createApp } from "vue"
import App from "@/App.vue"
import { router, setupRouter } from "@/router"
import { setupStore } from "@/store"
import { setupI18n } from "@/settings/i18n"
import "@/styles/tailwindcss.css"
import "@/styles/index.css"
// 通用字体
import "vfonts/Lato.css"
// 等宽字体
import "vfonts/FiraCode.css"
import { getPlatformConfig } from "./settings/config"

const app = createApp(App)

// 全局注册按钮级别权限组件
import { Auth, GlobalTooltip } from "@components/Global"
app.component("Auth", Auth)
app.component("tip", GlobalTooltip)

getPlatformConfig(app).then(async () => {
    // 挂载路由
    setupRouter(app)
    // 等待路由准备就绪
    await router.isReady()
    // 挂载pinia
    setupStore(app)
    // 挂载i18n
    setupI18n(app)
    console.log("接口配置的基础地址", import.meta.env.VITE_BASE_API)
    app.mount("#app", true)
})
