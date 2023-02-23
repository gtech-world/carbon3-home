import classNames from "classnames";
import { useRouter } from "next/router";
import { Fragment, HTMLAttributes, useRef } from "react";
import { RxTriangleUp } from "react-icons/rx";
import { useClickAway, useToggle } from "react-use";
import { useIsMobile } from "./context";

export interface MenuItem {
  topSplit?: boolean;
  icon?: any;
  text: string;
  to?: string;
  onClick?: () => void;
}
export interface PoperMenuProps {
  arrow?: HTMLAttributes<HTMLDivElement>;
  menus: MenuItem[];
}
export function PoperMenu(p: HTMLAttributes<HTMLDivElement> & PoperMenuProps) {
  const { className, children, arrow = {}, menus, ...other } = p;
  const [show, toggleShow] = useToggle(false);
  //   const refChild = useRef<HTMLDivElement>(null);
  //   const hover = useHoverDirty(refChild);
  const ref = useRef(null);
  useClickAway(ref, () => show && toggleShow(false));
  const { push } = useRouter();
  const onClickItem = (item: MenuItem) => {
    if (item.to) {
      push(item.to);
    } else if (item.onClick) {
      item.onClick();
    }
  };
  const isMobile = useIsMobile();
  return (
    <div {...other} style={{ position: isMobile ? "initial" : "relative" }} className={classNames(className)} ref={ref}>
      <div className="flex" onClick={() => toggleShow()}>
        {children}
      </div>
      {show && menus.length > 0 && (
        <div
          style={{ filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))" }}
          className={classNames("absolute w-[13.75rem] top-full right-0")}
        >
          <RxTriangleUp className="absolute text-white text-2xl right-4 top-[-4px] hidden mo:block" />
          <div className="py-[.625rem] mo:py-[.375rem] w-full bg-white mt-[.625rem] mo:mt-[.625rem] rounded-lg z-10 relative">
            {menus.map((item, i) => (
              <Fragment key={`poper_menu_item${i}`}>
                { item.topSplit && i > 0 && <div className="h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]"/>}
                <div
                  className="flex items-center py-[.625rem] mo:py-[.875rem] px-4 text-black hover:text-green-2 cursor-pointer"
                  onClick={() => onClickItem(item)}
                >
                  {!!item.icon && <div className="text-xl mo:text-2xl">{item.icon}</div>}
                  <div className="text-sm mo:text-base font-medium ml-3">{item.text}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
