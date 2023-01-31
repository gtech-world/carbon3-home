import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { Header } from "./header";

export function HomeHeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  return (
    <div className="h-full w-full bg-slate-50 relative">
      <div className="absolute z-0 top-0 w-full h-[48.75rem] bg-green-2">
        <img className="object-cover h-full absolute right-0 top-0" src="/home-bg-r.png" />
        <div
          className="w-full h-full absolute lg:left-[calc(50%_-_45rem)]"
          style={{
            background: "linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        />
        <div
          className="w-full h-full absolute lg:left-[calc(50%_-_45rem)]"
          style={{
            background: "linear-gradient(270deg, #227A30 38.28%, rgba(34, 122, 48, 0) 77.8%)",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        />
      </div>
      <Header />
      <div className={classNames("z-[2] relative w-full py-6 max-w-[90rem] px-[7.5rem] mx-auto", className)} {...props}>
        {children}
      </div>
    </div>
  );
}

export function HeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  return (
    <div className="h-full w-full bg-slate-50 relative">
      <Header className="!sticky !px-[3.125rem] !py-4 !max-w-none bg-green-2" />
      <div className={classNames("z-[2] relative w-full py-6 px-[3.125rem] mx-auto", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
