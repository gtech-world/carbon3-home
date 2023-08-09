import { HTMLAttributes, useMemo } from "react";
import classnames from "classnames";
import { FiChevronLeft, FiChevronRight, FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
export interface Props {
  total: number;
  pgSize: number;
  pgNum: number;
  onChange?: (p: number, count?: number) => void;
}

interface Item {
  name: string;
}

const omit = "...";
export function Pagination(p: Props & HTMLAttributes<HTMLDivElement>) {
  const range = (num: number, end?: number) => {
    const arr = [];
    if (end) {
      for (let i = num; i < end; i++) {
        arr.push(i);
      }
      return arr;
    }
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  };
  const { total, pgSize, pgNum, onChange, className } = p;
  const count = Math.ceil(total / pgSize);
  const items: Item[] = useMemo(() => {
    if (count <= 1) return [];
    if (count <= 6) return range(count).map((i) => ({ name: `${i + 1}` }));
    if (pgNum <= 3)
      return range(pgNum + 1)
        .map((i) => ({ name: `${i + 1}` }))
        .concat([{ name: omit }, { name: "" + count }]);
    if (pgNum >= count - 2)
      return [{ name: "1" }, { name: omit }].concat(range(pgNum - 2, count).map((i: number) => ({ name: `${i + 1}` })));
    return [
      { name: "1" },
      { name: omit },
      { name: pgNum - 1 + "" },
      { name: pgNum + "" },
      { name: pgNum + 1 + "" },
      { name: omit },
      { name: count + "" },
    ];
  }, [count, pgNum]);
  const doNext = () => {
    onChange && pgNum < count && onChange(pgNum + 1, count);
  };
  const doFirst = () => {
    onChange && onChange(1, count);
  };
  const doPrev = () => {
    onChange && pgNum > 1 && onChange(pgNum - 1, count);
  };
  const doLast = () => {
    onChange && onChange(count);
  };
  if (total <= pgSize) return null;

  return (
    <div className={classnames("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold", className)}>
      <div className="flex">
        {count > 1 && (
          <div className="flex">
            <span
              onClick={doFirst}
              className="mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
              <FiChevronsLeft />
            </span>
            <span
              onClick={doPrev}
              className="mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
              <FiChevronLeft />
            </span>
          </div>
        )}
        {items.map((page, i) => (
          <div
            key={`key_page_${i}`}
            className={classnames(
              page.name === "" + pgNum ? "text-white bg-green-2" : "bg-white",
              {
                omit: page.name === omit,
              },
              "mx-[0.185rem] flex items-center justify-center min-w-[32px] h-[32px] px-1.5 rounded-lg",
              page.name != omit && "border cursor-pointer",
            )}
            onClick={() => {
              onChange && page.name !== omit && onChange(+page.name, count);
            }}>
            {page.name}
          </div>
        ))}
        {count > 1 && (
          <div className="flex">
            <span
              onClick={doNext}
              className="mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
              <FiChevronRight />
            </span>
            <span
              onClick={doLast}
              className=" mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
              <FiChevronsRight />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
