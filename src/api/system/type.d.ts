/*
 * @Author: Cary
 * @Date: 2024-02-27 02:19:38
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-03 08:25:44
 * @FilePath: /fastapi-naive-web/src/api/system/type.d.ts
 * @Descripttion:
 */
/*
 * @Author: Cary
 * @Date: 2024-02-27 02:19:38
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-29 02:19:55
 * @FilePath: /fastapi-naive-web/src/api/system/type.d.ts
 * @Descripttion:
 */

/**常规配置 */
export interface generalInfo {
    watermark?: boolean
    user_default_password?: string
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
export interface emailSettingsInfo {
    /**邮件服务配置 */
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
    /**安全配置 */
    security?: securityInfo
    /**通知渠道配置 */
    channels?: channelsInfo
}

export interface settingsResponse extends BaseResponse {
    data: settingsInfo
}
