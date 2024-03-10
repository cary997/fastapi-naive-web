<!--
 * @Author: Cary
 * @Date: 2024-03-02 04:44:01
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-10 10:08:48
 * @FilePath: /src/pages/system/settings/channelsSettings/mailSettings.vue
 * @Descripttion: 
-->
<template>
    <div class="flex flex-col items-center space-y-4">
        <n-form v-model:model="data" label-placement="left" label-width="auto">
            <n-form-item label="服务器" path="email.MAIL_SERVER">
                <n-input
                    v-model:value="data.email.MAIL_SERVER"
                    clearable
                    placeholder="smtp.example.com"
                />
                <n-input-number
                    v-model:value="data.email.MAIL_PORT"
                    :show-button="false"
                    placeholder="587"
                    class="ml-2 w-20"
                ></n-input-number>
            </n-form-item>
            <n-form-item label="用户名" path="email.MAIL_USERNAME">
                <n-input
                    v-model:value="data.email.MAIL_USERNAME"
                    clearable
                    placeholder="username"
                />
            </n-form-item>
            <n-form-item label="密码" path="email.MAIL_PASSWORD">
                <n-input
                    v-model:value="data.email.MAIL_PASSWORD"
                    type="password"
                    clearable
                    show-password-on="click"
                    placeholder="**********"
                    class="mr-2"
                />
                <show-password
                    v-if="data.email.MAIL_PASSWORD"
                    :value="data.email.MAIL_PASSWORD"
                ></show-password>
            </n-form-item>
            <n-form-item label="发件地址" path="email.MAIL_FROM">
                <n-input
                    v-model:value="data.email.MAIL_FROM"
                    clearable
                    placeholder="username"
                />
            </n-form-item>
            <n-form-item label="显示名称" path="email.MAIL_FROM_NAME">
                <n-input
                    v-model:value="data.email.MAIL_FROM_NAME"
                    clearable
                    placeholder="FastApi Naive"
                />
            </n-form-item>
            <n-form-item label="TLS连接" path="email.MAIL_STARTTLS">
                <n-switch v-model:value="data.email.MAIL_STARTTLS" />
            </n-form-item>
            <n-form-item label="TLS/SSL连接" path="email.MAIL_SSL_TLS">
                <n-switch v-model:value="data.email.MAIL_SSL_TLS" />
            </n-form-item>
            <n-form-item label="登录服务器" path="email.USE_CREDENTIALS">
                <n-switch v-model:value="data.email.USE_CREDENTIALS" />
            </n-form-item>
            <n-form-item label="验证服务器证书" path="email.VALIDATE_CERTS">
                <n-switch v-model:value="data.email.VALIDATE_CERTS" />
            </n-form-item>
            <n-form-item label="收件地址" path="testMail">
                <n-input
                    v-model:value="testMail"
                    clearable
                    placeholder="test@example.com"
                    class="mr-2"
                />
                <n-button @click="handleTestClick" :loading="testLoading">
                    <n-icon
                        v-if="testStatus == 1"
                        :size="18"
                        class="text-success"
                    >
                        <CheckmarkCircle20Filled />
                    </n-icon>
                    <n-icon
                        v-if="testStatus == 2"
                        :size="18"
                        class="text-error"
                    >
                        <ErrorCircle20Filled />
                    </n-icon>
                    测试连接
                </n-button>
            </n-form-item>
        </n-form>
        <span class="text-error">{{ testMsg }}</span>
    </div>
</template>

<script lang="ts" setup>
import { channelsInfo } from "@/api/system/type"
import { PropType, ref, toRaw, unref } from "vue"
import {
    NForm,
    NFormItem,
    NInput,
    NInputNumber,
    NButton,
    NIcon,
    NSwitch,
} from "naive-ui"
import { CheckmarkCircle20Filled, ErrorCircle20Filled } from "@vicons/fluent"
import { testEmailSettingsApi } from "@/api/test/testApi"

//双向绑定
const data = defineModel({
    type: Object as PropType<channelsInfo>,
})

//测试配置回调
const testStatus = ref<number>(0)
const testMail = ref<string>(null)
const testMsg = ref<string>(null)
const testLoading = ref<boolean>(false)
const handleTestClick = async () => {
    testLoading.value = true
    const testConfig = toRaw(unref(data.value))
    const testReceive = toRaw(unref(testMail.value))
    await testEmailSettingsApi(testConfig.email, testReceive)
        .then(res => {
            if (res.code) {
                testStatus.value = 1
            }
            testMsg.value = null
        })
        .catch(error => {
            testStatus.value = 2
            if (error?.response?.data?.message) {
                testMsg.value = error.response.data.message
            } else {
                testMsg.value = error.message
            }

            console.log(error)
        })
        .finally(() => {
            testLoading.value = false
        })
}
</script>
