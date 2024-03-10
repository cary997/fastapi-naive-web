/*
 * @Author: Cary
 * @Date: 2024-03-06 17:02:06
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-10 05:21:56
 * @FilePath: /src/utils/aes.ts
 * @Descripttion:
 */

import { getConfig } from "@/settings/config"
import CryptoJS from "crypto-js"

// 加密
export const aesEncrypt = word => {
    const keyStr = getConfig().secret_key
    const ivStr = getConfig().secret_iv
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const iv = CryptoJS.enc.Utf8.parse(ivStr)
    const srcs = CryptoJS.enc.Utf8.parse(word)

    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}
// 解密
export const aesDecrypt = word => {
    const keyStr = getConfig().secret_key
    const ivStr = getConfig().secret_iv
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const iv = CryptoJS.enc.Utf8.parse(ivStr)

    const decrypt = CryptoJS.AES.decrypt(word, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    })
    return decrypt.toString(CryptoJS.enc.Utf8)
}
