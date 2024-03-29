/*
 * @Author: Cary
 * @Date: 2023-01-04 21:42:39
 * @LastEditors: Cary
 * @LastEditTime: 2023-05-24 01:04:16
 * @FilePath: \fastapi-naive-web\src\utils\storage\Theme.ts
 * @Descripttion:
 */
import { useOsTheme, darkTheme } from "naive-ui"

export function setTheme(value: string) {
    localStorage.setItem("app-theme", value)
}

export function getTheme() {
    return localStorage.getItem("app-theme")
}

export function getThemeVar() {
    const theme = getTheme()
    if (theme) {
        if (theme === "dark") {
            return darkTheme
        } else if (theme === "os") {
            const osTheme = useOsTheme()
            return osTheme.value === "dark" ? darkTheme : null
        } else {
            return null
        }
    } else {
        //如果没取到值,返回系统主题
        const osTheme = useOsTheme().value === "dark" ? darkTheme : null
        return osTheme
    }
}
