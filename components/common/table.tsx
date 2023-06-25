import classNames from "classnames";
import { VscQuestion } from "react-icons/vsc";
import {FiChevronRight} from 'react-icons/fi'
import {useEffect, useMemo, useState} from "react";
import {Loading} from "@components/common/loading";

interface ITable{
  columns: any[];
  data: any[]
  className?: string
  headerStyle?: object
  cellClassName?: Function
  size?: string
  loading?: boolean
}
export function Table(p: ITable) {
  const {columns,data,className,cellClassName,headerStyle,size,loading=false} = p
  const [tableData,setTableData] = useState(data || [])
  useEffect(()=>{
    setTableData(data)
  },[data])
  const expand = (itemIndex:number)=>{
    if(tableData[itemIndex].level === undefined){
      tableData[itemIndex].level = 0
    }
    tableData[itemIndex].children.map((v:any)=>{
      v.level = tableData[itemIndex].level+1
    })
    tableData[itemIndex].open = !tableData[itemIndex].open;
    if(tableData[itemIndex].open){
      setTableData(tableData.slice(0,itemIndex+1).concat(tableData[itemIndex].children).concat(tableData.slice(itemIndex+1)))
    }else {
      // 计算所有展开的 children 数量
      let openChildrenCount = tableData[itemIndex].children.length
      tableData[itemIndex].children.map((v:any)=>{
        if(v.open){
          v.open = false
          openChildrenCount += v.children.length
        }
      })
      tableData.splice(itemIndex+1,openChildrenCount)
      setTableData([...tableData])
    }
  }
  return (
    <div className={classNames("w-full mo:text-[.9375rem]",className,size ==='small' && 'text-xs',size ==='big' && 'text-lg')}>
      <table className="w-full text-left">
        <thead className={classNames('bg-gray-14 ',className,size ==='small' && 'text-sm')} style={headerStyle}>
        <tr className="px-3">
          {
            columns.map((v,i)=>{
              return(
                <th key={`columns${i}`} className={classNames('px-3 relative',
                  i===0 && 'rounded-l overflow-hidden',
                  i===(columns.length-1) && 'rounded-r overflow-hidden',
                  size === 'small' ? 'py-1':(size === 'big'?'py-3':'py-2'),
                )}>
                  {
                    !!v.tip &&
                    <VscQuestion data-tooltip-id="tooltip" data-tooltip-content={v.tip} className="inline-block text-xl mt-[-0.15rem] mr-1" />
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
              tableData.map((item,itemIndex)=>{
                return(
                  <tr key={`table_data_${itemIndex}`} className={`column-level-${item.level?item.level:0}`}>
                    {
                      columns.map((column,columnIndex)=>{
                        return(
                          <td key={`data_column_${columnIndex}`}
                              className={classNames(
                                "px-3",
                                size === 'small' ? 'py-1':(size === 'big'?'py-3':'py-2'),
                                !!column.tip && 'pl-9',
                                cellClassName && cellClassName(column,columnIndex,itemIndex),
                                )}
                              style={{minWidth: (column.width?column.width:'auto')}}
                          >
                            <div className="flex items-center"
                                 style={{marginLeft: ((item.level && columnIndex === 0)?item.level:0)*1.25+'rem'}}>
                              {
                                !!item?.children && columnIndex === 0 &&
                                <FiChevronRight onClick={()=>expand(itemIndex)} className={classNames('mr-2 cursor-pointer text-gray-9',item.open && 'rotate-[90deg]')} />
                              }
                              {
                                column.render?column.render(item[column.dataIndex],item):((column.emptyText && !item[column.dataIndex])?'-':item[column.dataIndex])
                              }
                            </div>

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
      {
        loading && <Loading className="pt-8" />
      }
    </div>
  );
}
