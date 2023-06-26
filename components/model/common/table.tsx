import classNames from "classnames";
import { Fragment, ReactNode } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useToggle } from "react-use";

export function Table(p: { infos: ReactNode[][]; title: string; head: string[] }) {
  const { infos, title, head } = p;
  const [show, toggleShow] = useToggle(true);
  return (
    <div className="">
      <div className="flex items-center  cursor-pointer text-lg text-black" onClick={() => toggleShow()}>
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
                  className={classNames("text-xs px-3 py-[1px] whitespace-nowrap", {
                    "bg-gray-16": i % 2 === 0,
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
