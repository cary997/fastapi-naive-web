/*
 * @Author: guoyl
 * @Date: 2022-12-27 10:21:01
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-21 23:19:13
 * @FilePath: \fastapi-naive-web\src\utils\storage\userLogin.ts
 * @Descripttion:
 */

import { tokenInfo } from "@/api/login/LoginApi";

function getStorage(check: string): Storage {
  let Storage = localStorage;
  if (check === "off") {
    Storage = sessionStorage;
    localStorage.removeItem("app-user");
  } else {
    Storage = localStorage;
  }
  return Storage;
}

// 写入token
export function setToken(data: tokenInfo) {
  let Storage: Storage = getStorage(sessionStorage.getItem("isAutoLogin"));
  return Storage.setItem("app-user", JSON.stringify(data));
}

// 获取token
export function getToken(): tokenInfo {
  let Storage: Storage = getStorage(sessionStorage.getItem("isAutoLogin"));
  const user = JSON.parse(<string>Storage.getItem("app-user"));
  return user;
}

// 删除token
export function removeToken() {
  let Storage: Storage = getStorage(sessionStorage.getItem("isAutoLogin"));
  return Storage.removeItem("app-user");
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return "Bearer " + token;
};
