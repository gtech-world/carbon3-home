import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { useIsMobile } from "./context";
import { Header, MobileHeader } from "./header";

export function HomeHeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const isMobile = useIsMobile();
  return (
    <div className="h-full w-full bg-slate-50 relative overflow-y-auto">
      {isMobile ? (
        <div className="absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ">
          <img className="object-cover w-full absolute right-0 bottom-0" src="/home-bg-r.png" />
          <div
            className="w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]"
            style={{ background: "linear-gradient(180deg, #227A30 48.84%, rgba(34, 122, 48, 0) 96.76%)" }}
          />
        </div>
      ) : (
        <div className="absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden">
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
      )}
      <Header className="h-[6.75rem] mo:h-[4.25rem] mo:sticky mo:bg-white mo:text-green-2 mo:p-4" />
      <div
        className={classNames(
          "z-[2] relative w-full py-6 max-w-[90rem] px-[7.5rem] mx-auto mo:mx-0 mo:px-5 mo:flex mo:flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function HeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const isMobile = useIsMobile();
  return (
    <div className="h-full w-full relative">
      {isMobile ? <MobileHeader /> : <Header className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2" />}
      <div className={classNames("z-[2] relative w-full py-6 px-[3.125rem] mx-auto mo:px-5", className)} {...props}>
        {children}
      </div>
    </div>
  );
}

export function MainHeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50 relative">
      <Header
        tits={["AICD Supply Chain", "Traceability System"]}
        className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />
      <div
        className={classNames(
          "z-[2] h-max min-h-[calc(100%_-_4.75rem)] w-full py-6 px-[3.125rem] mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
