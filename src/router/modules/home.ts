import { RouteRecordRaw } from "vue-router";

/*
 * @Author: guoyl
 * @Date: 2023-05-19 22:03:14
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-26 19:54:51
 * @FilePath: /fastapi-naive-web/src/router/modules/home.ts
 * @Descripttion:
 */
const Layout = () => import("@components/Layout/index.vue");

export default {
  path: "/",
  name: "worktop",
  component: Layout,
  redirect: "/home",
  meta: {
    icon: "HomeIcon",
    title: "工作台",
    en_title: "Worktop",
    menu_type: 1,
    rank: 0,
  },
  children: [
    {
      path: "/home",
      name: "home",
      component: () => import("@pages/home/index.vue"),
      meta: {
        icon: "HomeIcon",
        title: "首页",
        en_title: "Home",
        menu_type: 2,
        showParent: false,
      },
    },
  ],
} as RouteRecordRaw;
