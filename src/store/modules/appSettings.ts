/*
 * @Author: Cary
 * @Date: 2024-02-27 02:27:52
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-04 00:16:58
 * @FilePath: /fastapi-naive-web/src/store/modules/appSettings.ts
 * @Descripttion:
 */
import { getSystemSettingsApi } from "@/api/system/settingsApi"
import { settingsInfo, settingsResponse } from "@/api/system/type"
import { defineStore } from "pinia"
const generalDefaultData = { watermark: false, user_default_password: null }
const securityDefaultData = {
    totp: false,
    ip_check: false,
    ip_check_mode: 0,
    ip_black_list: [],
    ip_white_list: [],
}

const channelsefaultData = {
    email: {
        MAIL_FROM: null,
        MAIL_PORT: null,
        MAIL_SERVER: null,
        MAIL_SSL_TLS: false,
        MAIL_PASSWORD: null,
        MAIL_STARTTLS: true,
        MAIL_USERNAME: null,
        MAIL_FROM_NAME: null,
        VALIDATE_CERTS: true,
        USE_CREDENTIALS: true,
    },
}

const useSettingsStore = defineStore({
    id: "app-settings",
    state: (): settingsInfo => ({
        general: generalDefaultData,
        security: securityDefaultData,
        channels: channelsefaultData,
    }),
    actions: {
        getSettings() {
            return new Promise<settingsInfo>((resolve, reject) => {
                getSystemSettingsApi()
                    .then((res: settingsResponse) => {
                        if (res.code) {
                            resolve(res.data)
                        }
                    })
                    .catch((error: Error) => {
                        reject(error)
                    })
            })
        },
        updateSettings(data: settingsInfo) {
            this.general = data.general
            this.security = data.security
            this.channels = data.channels
        },
    },
})

export default useSettingsStore
