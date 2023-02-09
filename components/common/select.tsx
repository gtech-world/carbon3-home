import classNames from "classnames";
import { useCallback, useRef, useState } from "react";
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
}
export function useSelectState<T extends SelectItem>(items: T[], initIndex: number = 0): SelectProps {
  const [currentIndex, setCurrentIndex] = useState(initIndex);
  return { onChange: setCurrentIndex, items, current: currentIndex };
}

export function Select(p: SelectProps) {
  const { items, current, onChange, className } = p;
  const cText = items[current].text;
  const [open, onToggle] = useToggle(false);
  const onClickItem = useCallback(
    (index: number) => {
      if (current !== index) {
        onChange(index);
      }
    },
    [current]
  );
  const ref = useRef(null);
  useClickAway(ref, () => open && onToggle(false));
  if (items.length === 0) return null;
  return (
    <div
      ref={ref}
      className={classNames(
        "bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",
        className
      )}
      onClick={() => onToggle()}
    >
      <div className="flex justify-between items-center">
        <span>{cText}</span>
        {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </div>
      {open && (
        <div className="absolute left-0 top-full w-full bg-white rounded-lg overflow-hidden" style={{ border: "1px solid #DDDDDD" }}>
          {items.map((item, index) => (
            <div
              key={`select_item_${index}`}
              style={{
                borderTop: index > 0 ? "1px solid #DDDDDD" : "none",
                backgroundColor: index === current ? "rgba(0,0,0,0.1)" : "transparent",
              }}
              className={classNames("px-5 py-2 text-base mo:text-xs")}
              onClick={() => onClickItem(index)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
