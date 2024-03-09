/*
 * @Author: Cary
 * @Date: 2024-02-19 15:08:27
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-06 09:43:45
 * @FilePath: /src/components/Tables/type.d.ts
 * @Descripttion:
 */
import {
    InternalRowData,
    TableColumnGroup,
    TableBaseColumn,
    TableSelectionColumn,
    TableExpandColumn,
    TableColumnTitle,
    ColumnKey,
} from "naive-ui/lib/data-table/src/interface"

interface newTableSelectionColumn<T = InternalRowData>
    extends TableSelectionColumn<T> {
    title?: TableColumnTitle
    key: ColumnKey
}

type TableColumn<T = InternalRowData> =
    | TableColumnGroup<T>
    | TableBaseColumn<T>
    | newTableSelectionColumn<T>
    | TableExpandColumn<T>

export type TableColumns<T = InternalRowData> = Array<TableColumn<T>>
