import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { Header } from "./header";

export function HeaderLayout(p: HTMLAttributes<HTMLDivElement> & { bg?: React.ReactNode }) {
  const { className, children, bg, ...props } = p;
  return (
    <div className="h-full w-full bg-slate-50 relative">
      {bg}
      <Header />
      <div className={classNames("z-[2] relative w-full py-6 max-w-[90rem] px-[7.5rem] mx-auto", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
