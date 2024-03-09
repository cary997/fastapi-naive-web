<!--
 * @Author: Cary
 * @Date: 2024-03-06 15:49:45
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-09 05:27:47
 * @FilePath: /src/pages/system/settings/ldapSettings/ldapSync.vue
 * @Descripttion: 
-->
<template>
    <div class="flex flex-col flex-1 items-start space-y-4 p-4">
        <n-form
            v-model:model="data"
            label-placement="left"
            label-width="auto"
            label-align="right"
        >
            <n-form-item label="同步频率" path="sync.interval">
                <div class="flex flex-col space-y-2">
                    <span>
                        <n-input-number
                            v-model:value="data.sync.interval"
                            :min="1"
                            clearable
                            :showButton="false"
                        />
                    </span>
                    <span>
                        <NText depth="3" class="text-sm">
                            同步间隔时间，以分钟为单位
                        </NText>
                    </span>
                </div>
            </n-form-item>
            <n-form-item label="冲突策略" path="sync.sync_rule">
                <div class="flex flex-col space-y-2">
                    <span>
                        <n-select
                            v-model:value="data.sync.sync_rule"
                            :options="ruleOtion"
                        />
                    </span>
                    <span>
                        <NText depth="3" class="text-sm">
                            平台为主: 当用户名一致用户类型不会更改<br />
                            LDAP为主: 覆盖已存在的用户更改用户类型为LDAP
                        </NText>
                    </span>
                </div>
            </n-form-item>
            <n-form-item label="默认启用" path="sync.default_status">
                <div class="flex flex-col space-y-2">
                    <span>
                        <NSwitch v-model:value="data.sync.default_status" />
                    </span>
                    <span>
                        <NText depth="3" class="text-sm">
                            新同步的用户是否默认启用，初次同步生效
                        </NText>
                    </span>
                </div>
            </n-form-item>
            <n-form-item label="启用同步" path="sync.enable">
                <div class="flex flex-col space-y-2">
                    <span>
                        <NSwitch v-model:value="data.sync.enable" />
                    </span>
                    <span>
                        <NText depth="3" class="text-sm">
                            打开后才会同步
                        </NText>
                    </span>
                </div>
            </n-form-item>
        </n-form>
        <div class="flex flex-row space-x-2">
            <n-button
                type="primary"
                @click="handleSyncClick"
                :loading="syncLoading"
            >
                <n-icon v-if="syncStatus == 1" :size="18" class="text-success">
                    <CheckmarkCircle20Filled />
                </n-icon>
                <n-icon v-if="syncStatus == 2" :size="18" class="text-error">
                    <ErrorCircle20Filled />
                </n-icon>
                立即同步
            </n-button>
            <span :class="syncStatus==1 ? 'text-success' : 'text-error'">
                {{ syncMsg }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, toRaw, unref } from "vue"
import { ldapInfo } from "@/api/system/type"
import {
    NInputNumber,
    NForm,
    NFormItem,
    NSwitch,
    NSelect,
    NText,
    NButton,
    NIcon,
} from "naive-ui"
import { CheckmarkCircle20Filled, ErrorCircle20Filled } from "@vicons/fluent"
import { ldapSyncApi } from "@/api/system/settingsApi"
//双向绑定
const data = defineModel({
    type: Object as PropType<ldapInfo>,
})
const ruleOtion = [
    {
        label: "平台为主",
        value: 1,
    },
    {
        label: "LDAP为主",
        value: 2,
    },
]

const syncStatus = ref()
const syncLoading = ref(false)
const syncMsg = ref(null)

const handleSyncClick = async () => {
    syncLoading.value = true
    const config = toRaw(unref(data.value))
    await ldapSyncApi(config)
        .then(res => {
            if (res.code) {
                syncStatus.value = 1
            }
            syncMsg.value = res.message
        })
        .catch(error => {
            syncStatus.value = 2
            if (error?.response?.data?.message) {
                console.log(error)
                syncMsg.value = error.response.data.message
            } else {
                syncMsg.value = error.message
            }
        })
        .finally(() => {
            syncLoading.value = false
        })
}
</script>
