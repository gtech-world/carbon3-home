import classNames from "classnames";
import { Fragment, ReactNode } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useToggle } from "react-use";

export function Table(p: { infos: ReactNode[][]; title: string; head: string[]; className?: string }) {
  const { infos, title, head, className } = p;
  const [show, toggleShow] = useToggle(true);
  return (
    <div className={className}>
      <div className="flex items-center font-bold  cursor-pointer text-lg text-black" onClick={() => toggleShow()}>
        {title}
        {show ? <FaCaretUp className="text-2xl " /> : <FaCaretDown className="text-2xl" />}
      </div>
      {show && (
        <div
          style={{ gridTemplateColumns: `repeat(${head.length}, auto)` }}
          className="mt-3 grid text-sm text-black overflow-x-auto"
        >
          {head.map((item, i) => (
            <div key={"head_" + i} className="px-3 py-2 font-bold text-sm whitespace-nowrap">
              {item}
            </div>
          ))}
          {infos.map((items, i) => (
            <Fragment key={"body_row_" + i}>
              {items.map((item, j) => (
                <div
                  key={"body_col_" + j}
                  className={classNames("text-xs leading-normal px-3 py-[1px] whitespace-nowrap", {
                    "bg-gray-16": i % 2 === 0,
                    "rounded-l-[4px]": j === 0,
                    "rounded-r-[4px]": j === items.length - 1,
                  })}
                >
                  {item}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
