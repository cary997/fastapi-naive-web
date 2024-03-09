<template>
    <div class="flex flex-col items-start space-y-4">
        <n-form
            v-model:model="data"
            label-placement="left"
            label-width="auto"
            label-align="right"
            :rules="rules"
        >
            <n-form-item label="用户默认密码" path="user_default_password">
                <div class="flex flex-col space-y-2">
                    <n-input
                        v-model:value="data.user_default_password"
                        clearable
                        showPasswordOn="click"
                        type="password"
                    >
                        <template #password-visible-icon>
                            <n-icon
                                :size="16"
                                :component="Eye24Regular"
                                @click="showPasswordClick(false)"
                            />
                        </template>
                        <template #password-invisible-icon>
                            <n-icon
                                :size="16"
                                :component="EyeOff24Filled"
                                @click="showPasswordClick(true)"
                            />
                        </template>
                    </n-input>
                    <NText depth="3" class="text-sm">
                        创建用户时的默认密码
                    </NText>
                </div>
            </n-form-item>
            <n-form-item label="默认角色" path="default_status">
                <div class="flex flex-col space-y-2">
                    <span>
                        <n-select
                            multiple
                            v-model:value="data.user_default_roles"
                            label-field="nickname"
                            value-field="id"
                            :options="rolesListData"
                        />
                    </span>
                    <NText depth="3" class="text-sm">
                        用户默认角色，所有用户默认权限
                    </NText>
                </div>
            </n-form-item>
            <n-form-item label="开启水印" path="watermark">
                <n-switch v-model:value="data.watermark">
                    <template #checked>
                        {{ $t("status.enable") }}
                    </template>
                    <template #unchecked>
                        {{ $t("status.disable") }}
                    </template>
                </n-switch>
            </n-form-item>
            <n-form-item label="水印内容" path="watermarkContent">
                <n-select
                    v-model:value="data.watermarkContent"
                    :options="contentOptions"
                />
            </n-form-item>
            <n-form-item label="水印密集度" path="watermarkSize">
                <n-select
                    v-model:value="data.watermarkSize"
                    :options="sizeOptions"
                />
            </n-form-item>
        </n-form>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { generalInfo } from "@/api/system/type"
import {
    FormItemRule,
    FormRules,
    NForm,
    NFormItem,
    NInput,
    NSwitch,
    NText,
    NSelect,
    NIcon,
} from "naive-ui"
import { Eye24Regular, EyeOff24Filled } from "@vicons/fluent"
import { aesDecrypt, aesEncrypt } from "@utils/aes"
import { rolesListData } from "@/hooks/auth/useRolesPageHook"
import { useI18n } from "vue-i18n"
const { t } = useI18n()
//双向绑定
const data = defineModel({
    type: Object as PropType<generalInfo>,
})

const contentOptions = [
    {
        label: "用户名",
        value: 1,
    },
    {
        label: "显示名",
        value: 2,
    },
    {
        label: "用户名-显示名",
        value: 3,
    },
]

const sizeOptions = [
    {
        label: "紧凑",
        value: 1,
    },
    {
        label: "默认",
        value: 2,
    },
    {
        label: "宽松",
        value: 3,
    },
]

const rules: FormRules = {
    user_default_password: {
        required: true,
        trigger: ["blur", "input"],
        validator(rule: FormItemRule, value: string) {
            if (!value) {
                return new Error(t("Form.required"))
            }
            return true
        },
    },
}
const showPasswordClick = show => {
    if (show && aesDecrypt(data.value.user_default_password)) {
        data.value.user_default_password = aesDecrypt(
            data.value.user_default_password,
        )
    }
    if (!show) {
        data.value.user_default_password = aesEncrypt(
            data.value.user_default_password,
        )
    }
}
</script>
