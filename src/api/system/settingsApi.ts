/*
 * @Author: Cary
 * @Date: 2024-02-27 02:19:56
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-09 05:10:45
 * @FilePath: /src/api/system/settingsApi.ts
 * @Descripttion:
 */

import { http } from "@/utils/http"
import { ldapInfo, settingsInfo, settingsResponse } from "./type"

/**查询系统配置*/
export const getSystemSettingsApi = () => {
    return http.request<settingsResponse>("get", "/system/settings/get")
}

/**更新系统配置*/
export const setSystemSettingsApi = (data: settingsInfo) => {
    return http.request<settingsResponse>("patch", "/system/settings/set", {
        data,
    })
}

/**触发ldap同步 */
export const ldapSyncApi = (data: ldapInfo) => {
    return http.request<BaseResponse>(
        "post",
        "/system/settings/syncldap",
        {
            data,
        },
        { timeout: 60000 },
        { printError: false },
    )
}
