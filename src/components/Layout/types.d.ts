/*
 * @Author: guoyl
 * @Date: 2023-06-01 19:28:11
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-26 19:55:40
 * @FilePath: /fastapi-naive-web/src/components/Layout/types.d.ts
 * @Descripttion:
 */
import { FunctionalComponent } from "vue";

export type routeMetaType = {
  title?: string;
  en_title?: string;
  icon?: string | FunctionalComponent;
  showLink?: boolean;
  savedPosition?: boolean;
};

export type RouteConfigs = {
  path?: string;
  parentPath?: string;
  query?: object;
  params?: object;
  meta?: routeMetaType;
  children?: RouteConfigs[];
  name?: string;
};

export const defaultTab = {
  key: "home",
  show: true,
  menu_type: 2,
  tab: "首页",
  en_tab: "Home",
  hiddenTag: false,
  checked: true,
};
