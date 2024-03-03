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
                    />
                    <NText depth="3" class="text-sm">
                        创建用户时的默认密码
                    </NText>
                </div>
            </n-form-item>
            <n-form-item label="开启水印" path="watermark">
                <div class="flex flex-col space-y-2">
                    <n-switch v-model:value="data.watermark">
                        <template #checked>
                            {{ $t("status.enable") }}
                        </template>
                        <template #unchecked>
                            {{ $t("status.disable") }}
                        </template>
                    </n-switch>
                </div>
            </n-form-item>
        </n-form>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { generalInfo } from "@/api/system/type"
import { FormItemRule, FormRules, NForm, NFormItem, NInput, NSwitch, NText } from "naive-ui"
import { passwordPattern } from "@/utils/regularTools";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
//双向绑定
const data = defineModel({
    type: Object as PropType<generalInfo>,
})

const rules: FormRules = {
    user_default_password: {
        required: true,
        trigger: ["blur", "input"],
        validator(rule: FormItemRule, value: string) {
            if (!value) {
                return new Error(t("Form.required"))
            } else if (!passwordPattern.test(value)) {
                return new Error(t("headers.changePwdModal.pwdErrorMsg"))
            }
            return true
        },
    },

}
</script>
