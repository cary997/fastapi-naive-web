/*
 * @Author: Cary
 * @Date: 2024-02-17 15:43:10
 * @LastEditors:
 * @LastEditTime: 2024-02-19 04:17:09
 * @FilePath: \fastapi-naive-web\src\components\Tables\BaseProps.ts
 * @Descripttion:
 */
import { NDataTable } from "naive-ui"

export const BaseProps = {
    ...NDataTable.props, // 这里继承原 UI 组件的 props
    tableTitle: {
        type: String,
        default: null,
    },
    refresData: {
        type: Function,
        default: null,
    },
}
