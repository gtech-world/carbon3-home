import { useT } from "@lib/hooks/useT";
import classNames from "classnames";
import { HtmlHTMLAttributes } from "react";

export function Empty(p: HtmlHTMLAttributes<HTMLDivElement>) {
  const { className, children = "Data not available for this input.", ...other } = p;
  const { t } = useT();
  const child = typeof children == "string" ? t(children) : children;
  return (
    <div
      {...other}
      className={classNames(className, "w-full h-full text-center text-lg text-black flex flex-col items-center")}>
      <div className="flex-1" />
      {child}
      <div className="flex-[2]" />
    </div>
  );
}
