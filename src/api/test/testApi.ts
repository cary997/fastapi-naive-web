import { http } from "@/utils/http"
import { emailSettingsInfo } from "../system/type"

/**测试发送邮件*/
export const setSystemSettingsApi = (data: emailSettingsInfo,receive:string) => {
    return http.request<BaseResponse>("post", `/test/apitest/email/?receive=${receive}`, { data },{printError:false})
}