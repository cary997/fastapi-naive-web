/*
 * @Author: guoyl
 * @Date: 2022-12-27 00:28:03
 * @LastEditors: guoyl
 * @LastEditTime: 2023-05-19 22:46:55
 * @FilePath: /fastapi-naive-web/types/shims-vue.d.ts
 * @Descripttion:
 */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.tsx" {
  import Vue from "compatible-vue";
  export default Vue;
}
