/*
 * @Author: Cary
 * @Date: 2024-02-27 02:19:38
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-06 15:24:36
 * @FilePath: /src/api/system/type.d.ts
 * @Descripttion:
 */

/**常规配置 */
export interface generalInfo {
    watermark?: boolean
    watermarkContent?: number
    watermarkSize?: number
    user_default_password?: string
    user_default_roles?: Array<number>
}

/**安全配置 */
export interface securityInfo {
    /**控制MFA开启 */
    totp?: boolean
    /**IP地址校验 */
    ip_check?: boolean
    /**IP地址校验模式 */
    ip_check_mode?: number
    /**IP地址黑名单 */
    ip_black_list?: Array<str>
    /**IP地址白名单 */
    ip_white_list?: Array<str>
}
/**ldap连接配置 */
export interface ldapConfingInfo {
    enable?: boolean
    hosts?: Array<string>
    user?: string
    password?: string
    base_ou?: string
    paged_size?: number
    attributes?: {
        username?: string
        nickname?: string
        email?: string
        phone?: string
    }
}
/**ldap同步配置 */
export interface ldapSyncInfo {
    /**启用同步 */
    enable?: boolean
    /**同步间隔（分钟 */
    interval?: number
    /**用户是否默认启用*/
    default_status?: boolean
    /**冲突时策略 1以平台为主 2以ldap为主 */
    sync_rule?: number
}
export interface ldapInfo {
    config?: ldapConfingInfo
    sync?: ldapSyncInfo
}
/**邮件服务配置 */
export interface emailSettingsInfo {
    MAIL_FROM?: string
    MAIL_PORT?: number
    MAIL_SERVER?: string
    MAIL_SSL_TLS?: boolean
    MAIL_PASSWORD?: string
    MAIL_STARTTLS?: boolean
    MAIL_USERNAME?: string
    MAIL_FROM_NAME?: string
    VALIDATE_CERTS?: boolean
    USE_CREDENTIALS?: boolean
}
export interface channelsInfo {
    /**邮件服务配置 */
    email?: emailSettingsInfo
}
/**系统设置查询返回结果 */
export interface settingsInfo {
    /**id创建时不用填写，此处用于后端返回时提示 */
    id?: number
    /**update_at创建时不用填写，此处用于后端返回时提示 */
    update_at?: number
    /**update_at创建时不用填写，此处用于后端返回时提示 */
    create_at?: number
    /**常规配置 */
    general?: generalInfo
    /**ldap配置 */
    ldap?: ldapInfo
    /**安全配置 */
    security?: securityInfo
    /**通知渠道配置 */
    channels?: channelsInfo
}

export interface settingsResponse extends BaseResponse {
    data: settingsInfo
}
