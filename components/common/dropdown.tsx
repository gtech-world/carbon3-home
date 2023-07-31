import classNames from "classnames";
import { ReactNode, useRef } from "react";
import { useClickAway, useToggle } from "react-use";
export interface DropdownItem {
  text: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  children?: ReactNode;
  onClick?: (index: number) => void;
  className?: string;
}

export function Dropdown(p: DropdownProps) {
  const { items, children, onClick, className } = p;
  const [open, onToggle] = useToggle(false);
  // const ref = useAutoAnim<HTMLDivElement>('t-side')
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => open && onToggle(false));
  if (items.length === 0) return null;
  return (
    <div
      ref={ref}
      className={classNames(
        "bg-white text-black px-5 py-3 text-lg rounded-lg relative cursor-pointer",
        className
      )}
      onClick={() => onToggle()}
    >
      <div className="flex justify-between items-center">{children}</div>
      {open && (
        <div
          className="max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto"
          style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)", top: "calc(100% + 8px)" }}
        >
          <div className="">
            {items.map((item, index) => (
              <div
                key={`select_item_${index}`}
                className={classNames("w-full break-all px-5 py-2 text-sm hover:bg-gray-16")}
                onClick={() => onClick && onClick(index)}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
