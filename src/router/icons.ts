/*
 * @Author: Cary
 * @Date: 2023-06-02 22:12:07
 * @LastEditors:
 * @LastEditTime: 2024-02-27 02:41:37
 * @FilePath: /src/router/icons.ts
 * @Descripttion:
 */

import { PersonAccounts24Filled, Settings24Filled } from "@vicons/fluent"
import { Home } from "@vicons/ionicons5"
import { renderIcon } from "@/utils/tools"

//前端路由图标映射表
export const RouterIcon = {
    HomeIcon: Home,
    AuthIcon: PersonAccounts24Filled,
    SettingsIcon: Settings24Filled,
}

export function IconSelect(name) {
    return renderIcon(RouterIcon[name], { size: 18 })
}
