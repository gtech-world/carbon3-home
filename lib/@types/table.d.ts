import React, { MutableRefObject } from "react";

export interface ITable<T, VT> {
  /**@name 列表 */
  columns?: TableColumns<T, VT>[];
  className?: string;
  headerClassName?: object;
  cellClassName?: Function;
  size?: string;
  loading?: boolean;
  maxHeight?: string;
  hiddenHeader?: boolean;
  /** @name 左上角 title部分 */
  headerTitle?: React.ReactNode | string;
  mouseHoverKey?: string;
  columnsHeight?: string;
  isSetBorder?: boolean;
  tableId?: string;
  columnsClassName?: string;
  /** @name 为了区分有些table外边部分div不需要  */
  noContainer?: boolean;
  /** @name 触发点击行事件  */
  onChangeColumn?: (item) => item;
  /** @name 设置请求回来的res取值方式 */
  setRows?: (res: Record<string, any>) => Record<string, any>;
  params?: VT;
  /** @name 不需要请求接口时使用的  */
  data?: T[];
  columnsWidth?: string | number;
  columnEmptyText?: string | false;
  noLoading?: boolean;
  /** @name 参考TableAction  */
  tableRef?: MutableRefObject<TableAction | undefined> | ((actionRef: TableAction) => void);
  /** @name 执行列表请求的api  */
  api?: (params: number) => Promise<R>;
}

// | reload | 重新加载 | `void()` |
// | getDataSource | 获取当前列表数据 | `() => Record<string, any>[]` |
// | setTableData | 修改表格的数据及请求回来的列表数据 | `void()` |
export type TableAction = {
  /** @name   */
  reload: (params?: number) => void;
  getDataSource: () => Record<string, any>[];
  // getParams: () => Record<string, any>;
  onReset: () => void;
  // setTableData: (rows: any[]) => void; //修改表格的数据及请求回来的列表数据
  submit: () => void;
};
export type SortOrder = "descend" | "ascend" | null;
export type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;

export declare type TableSchema<Entity = Record<string, any>> = {
  key?: React.Key;
  dataIndex: any;
  title?: string | React.ReactNode;
  tooltip?: any;
  tip?: any;
  filterOptions?: [];
  width?: string | number;
  sorter?:
    | string
    | boolean
    | CompareFn<T>
    | {
        compare?: CompareFn<T>;
        multiple?: number;
      };
  emptyText?: ReactNode;
  renderText?: (text: any, record: Entity, index: number) => any;
  render?: (
    text: any,
    entity: Entity,
    index: number & {
      isEditable?: boolean;
    },
  ) =>
    | React.ReactNode
    | {
        children: React.ReactNode;
        props: any;
      };
};

type TableColumnType<T, ValueType = "text"> = Omit<TableSchema<T>, "width"> & {
  width?: "XXXS" | "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL" | string | number;
};

type ProColumnGroupType<RecordType, ValueType> = {
  children: TableColumns<RecordType>[];
} & TableColumnType<RecordType, ValueType>;
export type TableColumns<T, ValueType = "text"> = ProColumnGroupType<T, ValueType> | TableColumnType<T, ValueType>;
