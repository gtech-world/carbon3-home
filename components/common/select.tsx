import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useClickAway, useToggle } from "react-use";
export interface SelectItem {
  text: string;
}

export interface SelectProps {
  items: SelectItem[];
  current: number;
  onChange: (index: number) => void;
  className?: string;
  currentClassName?: string;
  openClassName?: string;
}
export function useSelectState<T extends SelectItem>(items: T[], initIndex: number = 0): SelectProps {
  const [currentIndex, setCurrentIndex] = useState(initIndex);
  useEffect(() => {
    setCurrentIndex(initIndex);
  }, [items, initIndex]);
  return { onChange: setCurrentIndex, items, current: currentIndex };
}

export function Select(p: SelectProps) {
  const {
    items,
    current,
    onChange,
    className = "bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm",
    currentClassName = "flex justify-between items-center",
    openClassName = "max-h-[18rem] bg-white  rounded-lg py-3 ",
  } = p;
  const cText = items[current] ? items[current].text : "";
  const [open, onToggle] = useToggle(false);
  const onClickItem = useCallback(
    (index: number) => {
      if (current !== index) {
        onChange(index);
      }
    },
    [current],
  );
  const ref = useAutoAnim<HTMLDivElement>("t-side");
  // const ref = useRef<HTMLDivElement>(null)
  useClickAway(ref, () => open && onToggle(false));
  if (items.length === 0) return null;
  return (
    <div ref={ref} className={classNames("relative cursor-pointer", className)} onClick={() => onToggle()}>
      <div className={currentClassName}>
        <span className="truncate">{cText}</span>
        {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </div>
      {open && (
        <div
          className={classNames("absolute left-0 w-full overflow-x-hidden overflow-y-auto", openClassName)}
          style={{
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
            top: "calc(100% + 8px)",
          }}>
          <div className="">
            {items.map((item, index) => (
              <div
                key={`select_item_${index}`}
                style={
                  {
                    // borderTop: index > 0 ? "1px solid #DDDDDD" : undefined,
                    // backgroundColor: index === current ? "rgba(0,0,0,0.1)" : "transparent",
                  }
                }
                className={classNames("w-full break-all px-5 py-2 text-sm hover:bg-gray-16", {
                  "text-green-2": index === current,
                })}
                onClick={() => onClickItem(index)}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export const Select2 = (p: SelectProps) => {
  return (
    <Select
      className="h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200"
      currentClassName="h-full flex justify-between items-center"
      {...p}
    />
  );
};
