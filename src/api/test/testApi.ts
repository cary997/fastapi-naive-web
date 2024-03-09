/*
 * @Author: Cary
 * @Date: 2024-03-03 11:22:01
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-06 09:43:15
 * @FilePath: /src/api/test/testApi.ts
 * @Descripttion:
 */
import { http } from "@/utils/http"
import { emailSettingsInfo, ldapConfingInfo } from "../system/type"

/**测试发送邮件*/
export const testEmailSettingsApi = (
    data: emailSettingsInfo,
    receive: string,
) => {
    return http.request<BaseResponse>(
        "post",
        `/test/apitest/email/?receive=${receive}`,
        { data },
        { printError: false },
    )
}

export interface testLdapResault {
    username?: string
    nickname?: string
    email?: string
    phone?: string
}
interface testLdapRespinse extends BaseResponse {
    data?: testLdapResault
}

/**测试ldap*/
export const testLdapSettingsApi = (
    data: ldapConfingInfo,
    username: string,
) => {
    return http.request<testLdapRespinse>(
        "post",
        `/test/apitest/ldap/?username=${username}`,
        { data },
        { printError: false },
    )
}
