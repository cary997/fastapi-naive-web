import { RouteRecordRaw } from "vue-router";

/*
 * @Author: guoyl
 * @Date: 2023-05-19 22:04:45
 * @LastEditors: guoyaolei
 * @LastEditTime: 2024-02-03 05:29:11
 * @FilePath: /fastapi-naive-web/src/router/modules/remaining.ts
 * @Descripttion:
 */
const Layout = () => import("@components/Layout/index.vue");

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@pages/login/index.vue"),
    meta: {
      title: "登录",
      en_title: "login",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      title: "加载中",
      en_title: "loading",
      showLink: false,
      rank: 102,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: () => import("@components/Layout/Redirect.vue"),
      },
    ],
  },
] as Array<RouteRecordRaw>;
