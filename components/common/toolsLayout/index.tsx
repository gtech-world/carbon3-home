import { useRouter } from "next/router";
import { Fragment, HTMLAttributes, useMemo } from "react";
import { useHeaderTipHeight } from "../headerTip";
import { FiChevronLeft } from "react-icons/fi";
import { ToolsHeader } from "@components/common/toolsLayout/header";
import classNames from "classnames";

export function ToolsLayout(
  p: {
    canBack?: boolean;
    isNew?: boolean;
    link?: { pathName: string; homeTitle: string; currentTitle: string };
  } & HTMLAttributes<HTMLDivElement>,
) {
  const { className, canBack, children, link, isNew, ...props } = p;
  const { push } = useRouter();
  const h = useHeaderTipHeight();

  return (
    <div className="relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16">
      <ToolsHeader
        showQuery={true}
        style={{ top: `${h}px` }}
        className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />

      <div
        className={classNames("w-full h-full mx-auto px-[60px] flex flex-col flex-1", {
          " max-w-[90rem]": !isNew,
        })}>
        {canBack && (
          <div
            className={`flex items-center my-5 text-sm ${!link?.pathName ? "cursor-pointer" : "cursor-default"}`}
            onClick={() => (link?.pathName ? undefined : push("/carbon/service"))}>
            {!link && <FiChevronLeft className="text-lg" />}
            {link && JSON.stringify(link) !== "{}" ? (
              <div className="flex flex-row">
                <span
                  className="text-[#000000] cursor-pointer font-bold  text-[14px]"
                  onClick={() => push(link?.pathName)}>
                  {link.homeTitle}
                </span>
                <div className="mx-1 "> / </div>
                <span className="cu text-[#999999] font-normal text-[14px]"> {link.currentTitle}</span>
              </div>
            ) : (
              "返回"
            )}
          </div>
        )}
        <div className={classNames("flex flex-col ", className)}>{children}</div>
      </div>
    </div>
  );
}
