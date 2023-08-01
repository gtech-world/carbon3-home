import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { Fragment, HTMLAttributes } from "react";
import { RxTriangleUp } from "react-icons/rx";
import { useClickAway, useToggle } from "react-use";
import AButton from "./aButton";
export interface MenuItem {
  topSplit?: boolean;
  icon?: any;
  text: string;
  to?: string;
  selected?: boolean;
  onClick?: () => void;
}
export interface PoperMenuProps {
  arrow?: HTMLAttributes<HTMLDivElement>;
  menus: MenuItem[];
}
function _PoperMenu(p: HTMLAttributes<HTMLDivElement> & PoperMenuProps) {
  const { className, children, arrow = {}, menus, ...other } = p;
  const [show, toggleShow] = useToggle(false);
  const ref = useAutoAnim<HTMLDivElement>("t-side");
  useClickAway(ref, () => show && toggleShow(false));
  const onClickItem = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    toggleShow();
  };

  return (
    <div {...other} style={{ position: "relative" }} className={classNames(className)} ref={ref}>
      <div
        className="flex"
        onClick={(e) => {
          toggleShow();
        }}>
        {children}
      </div>
      {show && menus.length > 0 && (
        <div
          style={{ filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))" }}
          className={classNames("absolute w-[13.75rem] top-full right-0 mo:right-[-1rem]")}>
          <RxTriangleUp className="absolute text-white text-2xl right-4 top-[-4px] hidden mo:block" />
          <div className="py-[.625rem] mo:py-[.375rem] w-full bg-white mt-[.625rem] mo:mt-[.625rem] rounded-lg z-10 relative">
            {menus.map((item, i) => (
              <Fragment key={`poper_menu_item${i}`}>
                {item.topSplit && i > 0 && <div className="h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]" />}
                <AButton
                  href={item.to ? item.to : "#"}
                  className={classNames(
                    "flex items-center py-[.625rem] mo:py-[.875rem] px-4 text-black hover:text-green-2 cursor-pointer",
                    {
                      "text-green-2": item.selected,
                    },
                  )}
                  onClick={() => !item.to && onClickItem(item)}>
                  {!!item.icon && <div className="text-xl mo:text-2xl">{item.icon}</div>}
                  <div
                    className="ml-3 text-sm font-medium mo:text-base"
                    dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </AButton>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export const PoperMenu = React.memo(_PoperMenu);
