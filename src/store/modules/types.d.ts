/*
 * @Author: guoyl
 * @Date: 2022-12-28 12:39:30
 * @LastEditors: guoyl
 * @LastEditTime: 2023-06-07 00:31:51
 * @FilePath: \fastapi-naive-web\src\store\modules\types.ts
 * @Descripttion:
 */
import { RouteRecordName } from "vue-router";

export type userType = {
  user_id?: string | number;
  username?: string;
  nickname?: string;
};

export type cacheType = {
  mode: string;
  name?: RouteRecordName;
};

export type multiType = {
  key: string;
  tab: string;
  en_tab: string;
  hiddenTag: boolean;
  show: boolean;
  menu_type: number;
  checked: boolean;
};