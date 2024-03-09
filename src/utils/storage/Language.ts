/*
 * @Author: Cary
 * @Date: 2023-01-04 21:42:39
 * @LastEditors: Cary
 * @LastEditTime: 2023-06-06 06:13:40
 * @FilePath: \fastapi-naive-web\src\utils\storage\Language.ts
 * @Descripttion:
 */
import { LANG_VALUE } from "@/settings/i18n/enum"

export function setLanguage(value: string) {
    localStorage.setItem("app-language", value)
}

export function getLanguage() {
    const chooseLanguage = localStorage.getItem("app-language")
    if (chooseLanguage) return chooseLanguage

    // 如果没有选择语言
    const language = navigator.language.toLowerCase()
    const locales = [LANG_VALUE.En, LANG_VALUE.Zh]
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }
    setLanguage(LANG_VALUE.Zh)
    return LANG_VALUE.Zh
}
