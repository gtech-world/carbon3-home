import React, { ReactNode } from "react";

export interface TableProps {
  header: ReactNode[];
  data: ReactNode[][];
  empty?: ReactNode;
  className?: string;
  headerClassName?: string;
  tbodyClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
  headerItemClassName?: string;
}

export function DefEmpty() {
  return (
    <tr className=" text-black text-center text-lg font-normal ">
      <td colSpan={100} className="h-[100px] py-5 align-top">
        无数据
      </td>
    </tr>
  );
}

export const STable = ({
  header,
  data,
  empty = <DefEmpty />,
  className = "min-w-full relative",
  headerClassName = "bg-neutral-200 sticky top-0 text-left text-black text-lg font-bold leading-[27px]",
  headerItemClassName = "p-3",
  tbodyClassName = "bg-white ",
  rowClassName = "text-black text-sm font-normal whitespace-nowrap",
  cellClassName = "p-3",
}: TableProps) => {
  return (
    <table className={className}>
      <thead>
        <tr className={headerClassName}>
          {header.map((head, i) => (
            <th key={i} scope="col" className={headerItemClassName}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={tbodyClassName}>
        {data.map((items, index) => (
          <tr key={index} className={rowClassName}>
            {items.map((value, i) => (
              <td key={i} className={cellClassName}>
                {value}
              </td>
            ))}
          </tr>
        ))}
        {data.length === 0 && empty}
      </tbody>
    </table>
  );
};
export default STable;
