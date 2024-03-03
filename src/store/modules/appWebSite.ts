/*
 * @Author: guoyl
 * @Date: 2023-05-18 01:50:12
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-29 06:43:25
 * @FilePath: /fastapi-naive-web/src/store/modules/appWebSite.ts
 * @Descripttion:
 */
import { getConfig } from "@/settings/config";
import { defineStore } from "pinia";

const menuSetting = getConfig().menuSetting ?? {
  minMenuWidth: 64,
  menuWidth: 200,
  mobileWidth: 800,
  collapsed: false,
  accordion: false,
};
type WebSite =  {
  menuSetting: menuSetting;
  isMobile: boolean;
  isCollapsed: boolean;
  isaccordion: boolean;
}

const usewebSiteStore = defineStore({
  id: "app-website",
  state: (): WebSite => ({
    menuSetting: menuSetting,
    isMobile: false,
    isCollapsed: menuSetting.collapsed,
    isaccordion: menuSetting.accordion,
  }),
  actions: {
    setIsMobile(value: boolean): void {
      this.isMobile = value;
    },
    setIsCollapsed(value: boolean): void {
      this.isCollapsed = value;
    },
    setIsAccordion(value: boolean): void {
      this.isaccordion = value;
    },
  },
});

export default usewebSiteStore;