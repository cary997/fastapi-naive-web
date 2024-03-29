/*
 * @Author: Cary
 * @Date: 2023-01-06 14:17:15
 * @LastEditors:
 * @LastEditTime: 2024-02-25 22:04:12
 * @FilePath: /tailwind.config.cjs
 * @Descripttion:
 */
/** @type {import('tailwindcss').Config} */

module.exports = {
    plugins: [require("daisyui")],
    corePlugins: {
        preflight: false,
    },
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: ["class", '[data-theme="dark"]'],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#7480ff",
                    info: "#988cc9",
                    success: "#61bc84",
                    warning: "#ebc75e",
                    error: "#dd5454",
                },
            },
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    info: "#757de8",
                    primary: "#2196F3",
                    success: "#13b17a",
                    warning: "#e6b731",
                    error: "#f33966",
                },
            },
        ],
    },
    theme: {
        extend: {
            flex: {
                "1/4": "0 0 25%",
                "1/5": "0 0 20%",
            },
            colors: {
                // brand colors
                darkbg: "rgb(24, 24, 28)",
            },
            width: {
                screen50: "50vw",
            },
            minHeight: {
                "1/2": "50%",
                "1/3": "33%",
                "1/4": "25%",
                "1/5": "20%",
            },
            maxHeight: {
                "1/2": "50%",
                "1/3": "33%",
                "1/4": "25%",
            },
            minWidth: {
                "1/2": "50%",
                "1/3": "33%",
                "1/4": "25%",
                "1/5": "20%",
            },
            maxWidth: {
                "1/2": "50%",
                "1/3": "33%",
                "1/4": "25%",
            },
            height: {
                screen10: "10vh",
                screen90: "90vh",
            },
            lineHeight: {
                12: "3rem",
                14: "3.5rem",
                16: "4rem",
            },
        },
        screens: {
            xs: "0px",
            s: "640px",
            m: "1024px",
            l: "1280px",
            xl: "1536px",
            xxl: "1920px",
            // => @media (min-width: 1536px) { ... }
        },
    },
}
