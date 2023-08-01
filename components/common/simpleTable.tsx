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
}

export const STable = ({
  header,
  data,
  empty,
  className = "min-w-full divide-y divide-gray-200",
  headerClassName = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
  tbodyClassName = "bg-white divide-y divide-gray-200",
  rowClassName = "",
  cellClassName = "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
}: TableProps) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          {header.map((head, i) => (
            <th key={i} scope="col" className={headerClassName}>
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
