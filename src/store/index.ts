/*
 * @Author: guoyl
 * @Date: 2022-12-26 21:38:57
 * @LastEditors: guoyl
 * @LastEditTime: 2022-12-28 12:40:11
 * @FilePath: /charon_web/src/store/index.ts
 * @Descripttion: 
 */
import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };


