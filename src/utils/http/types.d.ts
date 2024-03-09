/*
 * @Author: Cary
 * @Date: 2022-12-27 10:41:54
 * @LastEditors:
 * @LastEditTime: 2024-03-03 09:45:29
 * @FilePath: /src/utils/http/types.d.ts
 * @Descripttion:
 */
import Axios, {
    Method,
    AxiosError,
    AxiosResponse,
    AxiosRequestConfig,
} from "axios"

// export type resultType = {
//   access_token?: string;
// };

export type RequestMethods = Extract<
    Method,
    "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>
export interface HttpResponse extends AxiosResponse {
    config: HttpRequestConfig
}

export interface HttpError extends AxiosError {
    config: HttpRequestConfig
    isCancelRequest?: boolean
    response?: HttpResponse
}

export interface HttpRequestConfig extends AxiosRequestConfig {
    printError?: boolean
    beforeRequestCallback?: (request: HttpRequestConfig) => void
    beforeResponseCallback?: (response: HttpResponse) => void
}
