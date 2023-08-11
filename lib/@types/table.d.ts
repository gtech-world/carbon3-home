declare namespace Table {
  interface ITable {
    columns: any[];
    data: any[];
    className?: string;
    headerClassName?: object;
    cellClassName?: Function;
    size?: string;
    loading?: boolean;
    maxHeight?: string;
    hiddenHeader?: boolean;
    mouseHoverKey?: string;
    columnsHeight?: string;
    isSetBorder?: boolean;
    tableId?: string;
    columnsClassName?:string;
    onChangeColumn?: (item) => item;
  }
}
