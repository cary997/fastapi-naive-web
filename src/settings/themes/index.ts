/*
 * @Author: Cary
 * @Date: 2023-01-05 21:56:37
 * @LastEditors:
 * @LastEditTime: 2024-02-26 21:14:57
 * @FilePath: /src/settings/themes/index.ts
 * @Descripttion:
 */

import type { GlobalThemeOverrides } from "naive-ui"
export type breakpointsTuype = {
    xs: number
    s: number
    m: number
    l: number
    xl: number
    xxl: number
}

export const breakpoints: breakpointsTuype = {
    xs: 0,
    s: 640,
    m: 1024,
    l: 1280,
    xl: 1536,
    xxl: 1920,
}
export const lightThemeOverrides: GlobalThemeOverrides = {
    common: {
        borderRadius: "6px",
        primaryColor: "#2196F3",
        primaryColorHover: "#42a5f3",
        primaryColorPressed: "#2688d5",
        primaryColorSuppl: "#42a5f3",
        infoColor: "#757de8",
        infoColorHover: "#9298e7",
        infoColorPressed: "#5c64d1",
        infoColorSuppl: "#9298e7",
        successColor: "#13b17a",
        successColorHover: "#28b181",
        successColorPressed: "#109667",
        successColorSuppl: "#28b181",
        warningColor: "#e6b731",
        warningColorHover: "#e6be4b",
        warningColorPressed: "#caa12b",
        warningColorSuppl: "#e6be4b",
        errorColor: "#f33966",
        errorColorHover: "#f15a7f",
        errorColorPressed: "#cf2750",
        errorColorSuppl: "#f15a7f",
    },
    Checkbox: {
        checkMarkColorDisabledChecked: "#2196F3",
    },
    Tag: {
        borderRadius: "4px",
    },
}

export const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
        borderRadius: "6px",
        primaryColor: "#7480ff",
        primaryColorHover: "#8e97fd",
        primaryColorPressed: "#646fdd",
        primaryColorSuppl: "#4851b6",
        infoColor: "#988cc9",
        infoColorHover: "#aca5ca",
        infoColorPressed: "#7d70b3",
        infoColorSuppl: "#655a96",
        successColor: "#61bc84",
        successColorPressed: "#4ea56f",
        successColorHover: "#71bb8e",
        successColorSuppl: "#3f8f5d",
        warningColor: "#ebc75e",
        warningColorHover: "#ebcd78",
        warningColorPressed: "#cfae4d",
        warningColorSuppl: "#b8993e",
        errorColor: "#dd5454",
        errorColorHover: "#df6c6c",
        errorColorPressed: "#bd4949",
        errorColorSuppl: "#a54141",
    },
    Checkbox: {
        checkMarkColorDisabledChecked: "#7480ff",
    },
    Tag: {
        borderRadius: "4px",
    },
}
