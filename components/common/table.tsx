import classNames from "classnames";
import { VscQuestion } from "react-icons/vsc";
import { FiChevronRight, FiFilter } from "react-icons/fi";
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Loading } from "@components/common/loading";
import { useClickAway } from "react-use";
import { SIZE } from "@components/const";
import { ITable, TableSchema } from "@lib/@types/table";
import { Pagination } from "./pagination";
import { scrollToTop } from "utils";

interface Sizes {
  XXXS: number;
  XXS: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
  XXXL: number;
  [key: string]: number;
}

export const widthMap: Sizes = {
  XXXS: 60,
  XXS: 80,
  XS: 100,
  S: 120,
  M: 140,
  L: 160,
  XL: 180,
  XXL: 200,
  XXXL: 220,
};

export const Table = <T extends Record<string, any>, U extends Record<string, any> = Record<string, any>>({
  columns: cols,
  className,
  size = "",
  cellClassName,
  headerClassName,
  maxHeight,
  headerTitle,
  hiddenHeader = false,
  mouseHoverKey = "",
  columnsHeight = "",
  isSetBorder = false,
  tableId = undefined,
  columnsClassName,
  columnsWidth,
  data,
  api,
  tableRef,
  columnEmptyText,
  noLoading,
  onChangeColumn,
  setRows,
  params,
  noContainer = false,
}: ITable<T, U>) => {
  const [tableData, setTableData] = useState<T[]>([]);
  const [filters, setFilters] = useState<any>({});
  const [cacheFilteredInfo, setCacheFilteredInfo] = useState<Record<string, any>>({});
  const [cacheSortedInfo, setCacheSortedInfo] = useState<Record<string, any>>({});
  const dataLenRef = useRef<number>(0);
  const [loading, setLoading] = useState<boolean | undefined>(false);
  const [pgNum, setPgNum] = useState(1);
  const [reloadStatus, setReloadStatus] = useState<number>(1);
  const [mouseHoverItem, setMouseHoverItem] = useState<Record<string, any>>({});
  const noLoadingRef = useRef(noLoading);
  const ref = useRef(null);
  const [pager, setPager] = useState<Page>({
    countId: 0,
    current: 0,
    maxLimit: 0,
    optimizeCountSql: true,
    orders: [],
    pages: 0,
    searchCount: true,
    size: 10,
    total: 0,
  });

  const getList = useCallback(async () => {
    if (typeof api !== "function") return;

    setLoading(!noLoadingRef.current);
    try {
      let res = await api(pgNum);
      setLoading(false);
      if (res && res?.records && res?.records?.length) {
        const result = typeof setRows === "function" ? setRows(res) : res;

        setTableData([]);
        setTableData(result.records || []);
        setPager(result);
      }
    } catch (e) {
      console.log("error:", e);
    } finally {
      setLoading(false);
    }
  }, [api, pgNum]);

  useEffect(() => {
    getList();
  }, [getList, reloadStatus]);

  useClickAway(ref, () => {
    for (let key in filters) {
      if (filters[key]) {
        filters[key].isFilterOpen = false;
        setFilters({ ...filters });
      }
    }
  });

  const finalDataSource = useMemo(() => {
    const dataSource = typeof api === "function" ? tableData || [] : data || [];
    dataLenRef.current = dataSource.length;
    return [...dataSource];
  }, [tableData, pgNum, data]);

  // 获取默认列宽度
  const baseColumnsWidth = useMemo(() => {
    return typeof columnsWidth === "number"
      ? columnsWidth < 60
        ? 60
        : columnsWidth
      : (columnsWidth && widthMap[columnsWidth]) || 50;
  }, [columnsWidth]);

  const calculateWidth = (col: TableSchema) => {
    const key = col.key || col.dataIndex;
    if (typeof col.width === "number" && col.width <= 0) {
      col.width = baseColumnsWidth;
    } else if (typeof col.width === "string" && widthMap[col.width]) {
      col.width = widthMap[col.width];
    } else {
      col.width = col.width || baseColumnsWidth;
    }
    return key;
  };

  const getSorterOptions = (col: TableSchema) => {
    if (!col.sorter) {
      return {};
    }
    const key = col.key || col.dataIndex;
    return {
      key,
      sortOrder: cacheSortedInfo.columnKey === key && cacheSortedInfo.order,
    };
  };

  const getColumnRenderer = (col: TableSchema) => {
    const rt = col.renderText;
    const rr = col.render;

    if (typeof rt === "function" || typeof rr === "function") {
      return (text: any, record: Record<string, any>, index: number) => {
        // const t = text as React.ReactElement;
        // if (index === dataLenRef.current) {
        //   console.log("dasdas,", t?.props?.children);

        //   return t?.props?.children !== "-" ? text : " ";
        // }
        return rt?.(text, record, index) || rr?.(text, record, index) || " ";
      };
    }

    return (text: any, _record: any, index: number) => {
      if (index === dataLenRef.current) {
        return text || " ";
      }
      return text !== undefined && text !== null ? text : columnEmptyText || " ";
    };
  };

  const columns = useMemo(() => {
    return (cols || []).map((col) => {
      // const key = calculateWidth(col);
      const sorterOptions = getSorterOptions(col as TableSchema);
      const renderFunction = getColumnRenderer(col as TableSchema);
      return {
        ...col,
        ...sorterOptions,
        render: renderFunction,
      };
    });
  }, [cols, cacheSortedInfo, cacheFilteredInfo, baseColumnsWidth, tableData, data]);

  // const columns = useMemo(() => {
  //   const newCols = (cols || []).map((col) => {
  //     const key = col.key || col.dataIndex;

  //     if (typeof col.width === "number") {
  //       if (col.width <= 0) {
  //         col.width = baseColumnsWidth;
  //       }
  //     } else if (typeof col.width === "string" && widthMap[col.width]) {
  //       col.width = widthMap[col.width];
  //     } else if (!col.width) {
  //       col.width = baseColumnsWidth;
  //     }

  //     const sorterOptions = col.sorter
  //       ? {
  //           key,
  //           sortOrder: col.sorter ? cacheSortedInfo.columnKey === key && cacheSortedInfo.order : false,
  //         }
  //       : {};
  //     const rt = col.renderText;
  //     const rr = col.render;
  //     if (typeof rt === "function") {
  //       col.renderText = (text, record, index) => {
  //         if (index === dataLenRef.current) {
  //           return text || " ";
  //         }
  //         return rt(text, record, index);
  //       };
  //     } else if (typeof rr === "function") {
  //       col.render = (text, record, index) => {
  //         const t: React.ReactElement = text as React.ReactElement;
  //         // if (index === dataLenRef.current) {
  //         //   return typeof t === "string"
  //         //     ? t !== "-"
  //         //       ? t
  //         //       : " "
  //         //     : t && t.props && t.props.chidren && t.props.chidren !== "-"
  //         //     ? text
  //         //     : " ";
  //         // }
  //         return rr(text, record, index);
  //       };
  //     } else {
  //       col.renderText = (text, _record, index) => {
  //         if (index === dataLenRef.current) {
  //           return text || " ";
  //         }
  //         return text !== undefined && text !== null ? text : columnEmptyText || " ";
  //       };
  //     }
  //     return {
  //       ...col,
  //       ...sorterOptions,
  //     };
  //   });
  //   return newCols;
  // }, [cols, cacheSortedInfo, cacheFilteredInfo, baseColumnsWidth, tableData, data, dataLenRef.current]);

  useEffect(() => {
    columns.map((v: any) => {
      if (v.filterOptions) {
        filters[v.dataIndex] = {
          isFilterOpen: false,
          filterValueIndex: filters[v.dataIndex]?.filterValueIndex > -1 ? filters[v.dataIndex].filterValueIndex : -1,
        };
      }
    });
    setFilters(filters);
  }, [columns]);

  // 暴露方法
  useImperativeHandle(tableRef, () => ({
    reload: (num) => {
      setReloadStatus(reloadStatus + 1);
      noLoadingRef.current = true;
      if (!num) return;
      setPgNum(num);
    },
    getDataSource: () => tableData,
    // getParams: () => finalParams,
    onReset: () => {
      // handleReset();
    },
    submit: async () => {},
  }));
  //暂时没用到，先不写
  // const expand = (itemIndex: number) => {
  //   if (tableData[itemIndex].level === undefined) {
  //     tableData[itemIndex].level = 0;
  //   }
  //   tableData[itemIndex].children.map((v: any) => {
  //     v.level = tableData[itemIndex].level + 1;
  //   });
  //   tableData[itemIndex].open = !tableData[itemIndex].open;
  //   if (tableData[itemIndex].open) {
  //     setTableData(
  //       tableData
  //         .slice(0, itemIndex + 1)
  //         .concat(tableData[itemIndex].children)
  //         .concat(tableData.slice(itemIndex + 1)),
  //     );
  //   } else {
  //     // 计算所有展开的 children 数量
  //     let openChildrenCount = tableData[itemIndex].children.length;
  //     tableData[itemIndex].children.map((v: any) => {
  //       if (v.open) {
  //         v.open = false;
  //         openChildrenCount += v.children.length;
  //       }
  //     });
  //     tableData.splice(itemIndex + 1, openChildrenCount);
  //     setTableData([...tableData]);
  //   }
  // };

  const handleFilterValue = (item: any, index: number) => {
    Object.assign(filters, {
      [item.dataIndex]: {
        filterValueIndex: index,
        isFilterOpen: false,
      },
    });
    item.onFilterChange && item.onFilterChange(index > -1 ? item.filterOptions[index] : null);
    setFilters(filters);
  };

  const handleFilterOpen = (item: any) => {
    filters[item.dataIndex].isFilterOpen = !filters[item.dataIndex].isFilterOpen;
    setFilters({ ...filters });
  };

  const ATable = () => {
    return (
      <div className="text-base leading-[1.625rem]">
        <div
          className={classNames(
            "w-full",
            className,
            size === "small" && "text-xs",
            size === "big" && "text-lg mo:text-[.9375rem] ",
          )}>
          <table border={1} cellSpacing={0} className="w-full text-left " id={tableId}>
            {!hiddenHeader && (
              <thead
                className={classNames(
                  "bg-gray-14 ",
                  { "border bg-[#E5E5E5]": isSetBorder },
                  className,
                  size === "small" && "text-sm",
                )}
                style={headerClassName}>
                <tr className="px-3">
                  {columns &&
                    columns.map((v, i) => {
                      return (
                        <th
                          style={{ width: v.width ? v.width : "auto" }}
                          key={`columns${i}`}
                          className={classNames(
                            "px-3 relative break-keep",
                            i === 0 && ` ${(!isSetBorder && "rounded-l") || ""} overflow-hidden`,
                            i === columns.length - 1 && `${(!isSetBorder && "rounded-r") || ""} overflow-hidden`,
                            (SIZE as any)[size] || "py-2",
                          )}>
                          {!!v?.tip && (
                            <VscQuestion
                              data-tooltip-id="tooltip"
                              data-tooltip-content={v.tip}
                              className="inline-block text-xl mt-[-0.15rem] mr-1"
                            />
                          )}
                          <span>{v.title}</span>
                          {!!filters[v.dataIndex] && (
                            <div className="inline-block" ref={ref}>
                              <FiFilter
                                color={filters[v.dataIndex]?.filterValueIndex > -1 ? "#29953A" : ""}
                                onClick={() => {
                                  handleFilterOpen(v);
                                }}
                                className="inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"
                              />
                              {filters[v.dataIndex].isFilterOpen && (
                                <div className="absolute left-0 font-normal top-10">
                                  <ul
                                    className="bg-white w-[12.375rem] max-h-[14.875rem] overflow-auto text-sm rounded-lg py-3"
                                    style={{
                                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
                                    }}>
                                    <li
                                      className={classNames(
                                        "py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",
                                        filters[v.key].filterValueIndex === -1 && "text-green-2",
                                      )}
                                      onClick={() => {
                                        handleFilterValue(v, -1);
                                      }}>
                                      All
                                    </li>
                                    {v?.filterOptions?.map((option: any, optionIndex: number) => {
                                      return (
                                        <li
                                          key={`productList${optionIndex}`}
                                          onClick={() => {
                                            handleFilterValue(v, optionIndex);
                                          }}
                                          className={classNames(
                                            "py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",
                                            filters[v.dataIndex].filterValueIndex === optionIndex ? "text-green-2" : "",
                                          )}>
                                          {option.text}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </th>
                      );
                    })}
                </tr>
              </thead>
            )}
            {!loading && (
              <tbody style={{ maxHeight }} className="w-full overflow-y-auto ">
                {finalDataSource.map((item, itemIndex) => {
                  return (
                    <tr
                      key={`table_data_${itemIndex}`}
                      className={` column-level-${item.level || 0} ${columnsHeight} `}>
                      {columns.map((column, columnIndex) => {
                        return (
                          <td
                            key={`data_column_${columnIndex}`}
                            className={classNames(
                              columnsClassName,
                              `px-3 ${
                                mouseHoverItem[mouseHoverKey] === item[mouseHoverKey] && mouseHoverKey
                                  ? "bg-[#F3F3F3]"
                                  : ""
                              }  `,
                              {
                                border: isSetBorder,
                              },
                              (SIZE as any)[size] || "py-2",
                              !!column.tip && "pl-9",
                              cellClassName && cellClassName(column, columnIndex, itemIndex),
                            )}
                            style={{ width: column.width ? column.width : "auto" }}>
                            <div
                              onMouseOver={() => mouseHoverKey && setMouseHoverItem(item)}
                              onClick={() => (typeof onChangeColumn === "function" ? onChangeColumn(item) : undefined)}
                              className="flex items-center "
                              style={{
                                marginLeft: (item.level && columnIndex === 0 ? item.level : 0) * 1.25 + "rem",
                              }}>
                              {!!item?.children && item?.children.length > 0 && columnIndex === 0 && (
                                <FiChevronRight
                                  // onClick={() => expand(itemIndex)}
                                  className={classNames(
                                    "mr-2 cursor-pointer text-gray-9",
                                    item.open && "rotate-[90deg]",
                                  )}
                                />
                              )}

                              {column.render
                                ? column.render(item[column.dataIndex], item, columnIndex)
                                : column.emptyText && !item[column.dataIndex]
                                ? "-"
                                : item[column.dataIndex]}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>

          {loading ? (
            <Loading className="pt-8" />
          ) : (
            !(finalDataSource && finalDataSource.length > 0) && (
              <div className="flex justify-center w-full py-20">无数据</div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {headerTitle}
      {noContainer ? (
        <ATable />
      ) : (
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <ATable />
          </div>
        </div>
      )}

      <Pagination
        className="fixed bottom-0 left-0 w-full p-4 my-4 mo:static "
        onChange={(v: any, count?: number) => {
          setPgNum(v);
          if (v === 1 || !count) return;
          setLoading(true);
          noLoadingRef.current = false;
          scrollToTop();
        }}
        total={pager.total || 0}
        pgSize={10}
        pgNum={pgNum}
      />
    </div>
  );
};
