/*
 * @Author: Cary
 * @Date: 2024-02-21 19:18:17
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-22 15:31:46
 * @FilePath: /fastapi-naive-web/src/components/Layout/header/index.ts
 * @Descripttion:
 */
import ThemeSelectVue from "./ThemeSelect.vue";
import LanguageSelectVue from "./LanguageSelect.vue";
import UserAvtarVue from "./UserAvtar.vue";
import ExtLinkMenus from "./ExtLinkMenus.vue";
import { getCurrentUsersApi } from "@/api/auth/UsersApi";
import { getCurrentUsersResponse, getCurrentUsers } from "@/api/auth/types";
import { ref } from "vue";

export { ThemeSelectVue };
export { LanguageSelectVue };
export { UserAvtarVue };
export { ExtLinkMenus };

export const showPasswordModal = ref<boolean>(false);
export const showProfileModal = ref<boolean>(false);

/**查询当前用户方法 */
export async function getCurrentUsersHandle() {
  return new Promise<getCurrentUsers>((resolve, reject) => {
    getCurrentUsersApi()
      .then((res: getCurrentUsersResponse) => {
        if (res.code) {
          resolve(res.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
}
/**当前用户 */
export const currentUser = ref(null);
