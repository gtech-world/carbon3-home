import classNames from "classnames";
import { HtmlHTMLAttributes } from "react";

export function Empty(p: HtmlHTMLAttributes<HTMLDivElement>) {
  const { className, children = "Data not available for this input.", ...other } = p;
  return (
    <div {...other} className={classNames(className, "w-full text-center text-lg text-black flex flex-col items-center")}>
      <div className="flex-1" />
      {children}
      <div className="flex-[2]" />
    </div>
  );
}
