import classNames from "classnames";
import { HTMLAttributes } from "react";
import { useIsMobile } from "./context";
import { Header, MobileHeader } from "./header";
import { useHeaderTipHeight } from "./headerTip";

export function HomeHeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const isMobile = useIsMobile();
  return (
    <div className="relative flex flex-col flex-1 w-full min-h-fit bg-gray-16 ">
      {isMobile ? (
        <div className="absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ">
          <img className="absolute bottom-0 right-0 object-cover w-full" src="/home-bg-r.jpg" />
          <div
            className="w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]"
            style={{
              background: "linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)",
            }}
          />
        </div>
      ) : (
        <div className="absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden ">
          <img className="absolute top-0 right-0 object-cover h-full" src="/home-bg-r.jpg" />
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
              background: "linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          />
        </div>
      )}
      <Header className="h-[6.75rem] mo:h-[4.25rem] mo:sticky mo:bg-white mo:text-green-2 mo:p-4" />
      <div
        className={classNames("z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col", className)}
        {...props}>
        {children}
      </div>
    </div>
  );
}

export function HeaderLayout(
  p: HTMLAttributes<HTMLDivElement> & {
    tits?: string | null;
    isManager?: boolean;
    nopx?: boolean;
  },
) {
  const { className, tits, isManager, nopx, children, ...props } = p;
  const isMobile = useIsMobile();
  const h = useHeaderTipHeight();
  return (
    <div className="relative flex flex-col flex-1 w-full min-h-fit">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <Header
          nopx={nopx}
          tits={tits}
          isManager={isManager}
          style={{ top: `${h}px` }}
          className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2"
        />
      )}
      <div
        className={classNames("z-[2] flex-1 relative w-full py-6 px-[3.125rem] mx-auto mo:px-5", className)}
        {...props}>
        {children}
      </div>
    </div>
  );
}

export function MainHeaderLayout(p: { showQuery?: boolean; menus?: any[] } & HTMLAttributes<HTMLDivElement>) {
  const { className, children, showQuery = true, menus = [], ...props } = p;
  const h = useHeaderTipHeight();
  return (
    <div className="relative flex flex-col flex-1 w-full min-h-fit bg-gray-16">
      <Header
        menus={menus}
        isManager={true}
        showQuery={showQuery}
        style={{ top: `${h}px` }}
        className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />
      <div className={classNames("z-[2] flex-1 w-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
