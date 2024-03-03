/*
 * @Author: Cary
 * @Date: 2024-02-27 02:19:56
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-27 02:24:52
 * @FilePath: /fastapi-naive-web/src/api/system/settingsApi.ts
 * @Descripttion:
 */

import { http } from "@/utils/http";
import { settingsInfo, settingsResponse } from "./type";

/**查询系统配置*/
export const getSystemSettingsApi = () => {
  return http.request<settingsResponse>("get", "/system/settings/get");
};

/**更新系统配置*/
export const setSystemSettingsApi = (data: settingsInfo) => {
  return http.request<settingsResponse>("patch", "/system/settings/set",{ data })
};
