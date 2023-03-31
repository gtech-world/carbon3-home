import classNames from "classnames";
import React, { useEffect } from "react";
import { VscQuestion } from "react-icons/vsc";
import ReactTooltip from "react-tooltip";

interface ITable{
  columns: any[];
  data: any[]
  className: string
}
export function Table(p: ITable) {
  const {columns,data,className} = p
  return (
    <div className={classNames("w-full mo:text-[.9375rem]",className)}>
      <table className="w-full text-left">
        <thead className="bg-gray-14 ">
        <tr className="px-3">
          {
            columns.map((v,i)=>{
              return(
                <th key={`columns${i}`} className={classNames('px-3 py-2 relative',i===0 && 'rounded-l overflow-hidden', i===(columns.length-1) && 'rounded-r overflow-hidden')}>
                  {
                    !!v.tip &&
                    <VscQuestion data-for="tooltip" data-tip={v.tip} className="inline-block text-xl mt-[-0.15rem] mr-1" />
                  }
                  <span>{v.title}</span>
                </th>
              )
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          data.map((item,itemIndex)=>{
            return(
              <tr key={`table_data_${itemIndex}`}>
                {
                  columns.map((column,columnIndex)=>{
                    return(
                      <td key={`data_column_${columnIndex}`} className={classNames("px-3 py-2",!!column.tip && 'pl-9')}>
                        {
                          column.render?column.render(item[column.dataIndex]):item[column.dataIndex]
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  );
}
