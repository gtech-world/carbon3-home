import classNames from "classnames";
import { VscQuestion } from "react-icons/vsc";
import { FiChevronRight, FiFilter } from "react-icons/fi";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { Loading } from "@components/common/loading";
import { useClickAway } from "react-use";
import { SIZE } from "@components/const";

export const Table: FC<Table.ITable> = ({
  columns,
  data,
  className,
  cellClassName,
  headerClassName,
  size = "",
  maxHeight,
  loading = false,
  hiddenHeader = false,
  mouseHoverKey = "",
  columnsHeight = "",
  isSetBorder = false,
  tableId = undefined,
  columnsClassName,
  onChangeColumn = (item: any) => item,
}) => {
  const [tableData, setTableData] = useState<any>(data || []);
  const [filters, setFilters] = useState<any>({});
  const [mouseHoverItem, setMouseHoverItem] = useState<Record<string, any>>({});
  const ref = useRef(null);

  useClickAway(ref, () => {
    for (let key in filters) {
      if (filters[key]) {
        filters[key].isFilterOpen = false;
        setFilters({ ...filters });
      }
    }
  });

  useEffect(() => {
    setTableData(data);
  }, [data]);

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

  const expand = (itemIndex: number) => {
    if (tableData[itemIndex].level === undefined) {
      tableData[itemIndex].level = 0;
    }
    tableData[itemIndex].children.map((v: any) => {
      v.level = tableData[itemIndex].level + 1;
    });
    tableData[itemIndex].open = !tableData[itemIndex].open;
    if (tableData[itemIndex].open) {
      setTableData(
        tableData
          .slice(0, itemIndex + 1)
          .concat(tableData[itemIndex].children)
          .concat(tableData.slice(itemIndex + 1)),
      );
    } else {
      // 计算所有展开的 children 数量
      let openChildrenCount = tableData[itemIndex].children.length;
      tableData[itemIndex].children.map((v: any) => {
        if (v.open) {
          v.open = false;
          openChildrenCount += v.children.length;
        }
      });
      tableData.splice(itemIndex + 1, openChildrenCount);
      setTableData([...tableData]);
    }
  };

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

  return (
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
                      {!!v.tip && (
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
                                    filters[v.dataIndex].filterValueIndex === -1 && "text-green-2",
                                  )}
                                  onClick={() => {
                                    handleFilterValue(v, -1);
                                  }}>
                                  All
                                </li>
                                {v.filterOptions.map((option: any, optionIndex: number) => {
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
            {(tableData || []).map((item: any, itemIndex: number) => {
              return (
                <tr
                  key={`table_data_${itemIndex}`}
                  className={` column-level-${item.level ? item.level : 0} ${columnsHeight} `}>
                  {columns.map((column, columnIndex) => {
                    return (
                      <td
                        key={`data_column_${columnIndex}`}
                        className={classNames(
                          columnsClassName,
                          `px-3  `,
                          {
                            "bg-[#F3F3F3]": mouseHoverItem[mouseHoverKey] === item[mouseHoverKey] && mouseHoverKey,
                            border: isSetBorder,
                          },
                          (SIZE as any)[size] || "py-2",
                          !!column.tip && "pl-9",
                          cellClassName && cellClassName(column, columnIndex, itemIndex),
                        )}
                        style={{ width: column.width ? column.width : "auto" }}>
                        <div
                          onMouseOver={() => setMouseHoverItem(item)}
                          onClick={() => (typeof onChangeColumn === "function" ? onChangeColumn(item) : undefined)}
                          className="flex items-center "
                          style={{
                            marginLeft: (item.level && columnIndex === 0 ? item.level : 0) * 1.25 + "rem",
                          }}>
                          {!!item?.children && item?.children.length > 0 && columnIndex === 0 && (
                            <FiChevronRight
                              onClick={() => expand(itemIndex)}
                              className={classNames("mr-2 cursor-pointer text-gray-9", item.open && "rotate-[90deg]")}
                            />
                          )}
                          {column.render
                            ? column.render(item[column.dataIndex], item)
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
        !(tableData && tableData.length > 0) && <div className="flex justify-center w-full py-20">无数据</div>
      )}
    </div>
  );
};
