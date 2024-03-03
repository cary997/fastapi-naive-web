/*
 * @Author: guoyaolei
 * @Date: 2024-01-25 20:35:13
 * @LastEditors: guoyaolei
 * @LastEditTime: 2024-02-03 15:47:48
 * @FilePath: /fastapi-naive-web/src/api/auth/MenusApi.ts
 * @Descripttion:
 */
import { http } from "@/utils/http";
import {
  addMenusResult,
  deleteResult,
  listMenusResult,
  menuType,
  setMenusResult,
} from "./types";

/**获取菜单列表*/
export const getMenusListApi = (params?: { to_tree: boolean }) => {
  return http.request<listMenusResult>("get", "/auth/menus/list", { params });
};

/**创建菜单*/
export const addMenusApi = (data?: menuType) => {
  //判断路径是否以/结尾，如果不是则加上/
  data.path = data.path.endsWith("/") ? data.path : data.path + "/";
  return http.request<addMenusResult>("post", "/auth/menus/add", { data });
};

/**更新菜单*/
export const setMenusApi = (menu_id: number, data?: menuType) => {
  return http.request<setMenusResult>("patch", `/auth/menus/set/${menu_id}`, {
    data,
  });
};

/**删除菜单*/
export const delMenusApi = (menu_id: number) => {
  return http.request<deleteResult>("delete", `/auth/menus/del/${menu_id}`);
};
