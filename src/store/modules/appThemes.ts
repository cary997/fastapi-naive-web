/*
 * @Author: guoyl
 * @Date: 2023-01-04 22:33:52
 * @LastEditors: guoyl
 * @LastEditTime: 2023-05-24 22:06:10
 * @FilePath: \fastapi-naive-web\src\store\modules\Themes.ts
 * @Descripttion:
 */
// src\stores\app.ts
import { defineStore } from "pinia";
import { getThemeVar, setTheme } from "@/utils/storage/Theme";
import { darkTheme, useOsTheme } from "naive-ui";
import { BuiltInGlobalTheme } from "naive-ui/es/themes/interface";

interface themeState {
  theme: BuiltInGlobalTheme | null;
}

const useThemesStore = defineStore({
  id: "app-theme",
  state: (): themeState => ({
    theme: getThemeVar(),
  }),
  actions: {
    updateThemeValue(value: string) {
      let themeKey: string | BuiltInGlobalTheme | null;
      if (value === "dark") {
        themeKey = darkTheme;
      } else if (value === "os") {
        themeKey = useOsTheme().value === "dark" ? darkTheme : null;
      } else {
        themeKey = null;
      }
      document.documentElement.dataset.theme = themeKey ? "dark" : "light";
      setTheme(value);
      this.theme = themeKey;
    },
  },
});

export default useThemesStore;
