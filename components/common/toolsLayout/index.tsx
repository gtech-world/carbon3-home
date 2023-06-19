import { useRouter } from "next/router";
import { HTMLAttributes, useMemo } from "react";
import { useHeaderTipHeight } from "../headerTip";
import { FiChevronLeft } from "react-icons/fi";
import {ToolsHeader} from "@components/common/toolsLayout/header";
import classNames from "classnames";


export function ToolsLayout(p:{canBack?:boolean} & HTMLAttributes<HTMLDivElement>) {
  const { className,canBack, children, ...props } = p;
  const { push, pathname } = useRouter();
  const h = useHeaderTipHeight();
  return (
    <div className="flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative">
      <ToolsHeader
        showQuery={true}
        style={{ top: `${h}px` }}
        className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />
      <div className="w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1">
        {
          canBack &&
          <div className="flex items-center my-5 text-sm cursor-pointer" onClick={()=>push('/carbon/service')}>
            <FiChevronLeft className="text-lg" />
            返回
          </div>
        }
        <div className={classNames('flex flex-col',className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
