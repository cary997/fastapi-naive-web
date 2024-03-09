/*
 * @Author: Cary
 * @Date: 2024-02-27 02:27:52
 * @LastEditors:
 * @LastEditTime: 2024-03-04 00:16:58
 * @FilePath: /src/store/modules/appSettings.ts
 * @Descripttion:
 */
import { getSystemSettingsApi } from "@/api/system/settingsApi"
import { settingsInfo, settingsResponse } from "@/api/system/type"
import { defineStore } from "pinia"
const ldapDefaultData = {
    config: {
        enable: false,
        hosts: [],
        user: null,
        password: null,
        base_ou: null,
        attributes: {
            username: "sAMAccountName",
            nickname: "cn",
            email: "mail",
            phone: "telephoneNumber",
        },
    },
    sync: {
        enable: false,
        interval: 0,
        default_status: false,
        sync_rule: 1,
    },
}
const generalDefaultData = {
    watermark: false,
    user_default_password: null,
    user_default_roles: [],
    watermarkContent: 1,
    watermarkSize: 2,
}
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
        ldap: ldapDefaultData,
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
            this.ldap = data.ldap
            this.security = data.security
            this.channels = data.channels
        },
    },
})

export default useSettingsStore
