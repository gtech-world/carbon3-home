declare namespace Table  {
  interface ITable {
    columns: any[];
    data: any[];
    className?: string;
    headerStyle?: object;
    cellClassName?: Function;
    size?: string;
    loading?: boolean;
    maxHeight?: string;
    hiddenHeader?: boolean;
    mouseHoverKey?: string;
    columnsHeight?: string;
    isSetBorder?: boolean;
    tableId?: string;
  }

}