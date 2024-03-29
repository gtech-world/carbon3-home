import classNames from "classnames";
import { HTMLAttributes } from "react";

export interface BadgeProps {
  txt: string;
  type: "blue" | "orange";
}
export function Badge(p: BadgeProps & HTMLAttributes<HTMLDivElement>) {
  const { txt, type, className, ...others } = p;
  return (
    <div
      {...others}
      className={classNames(className, "px-[5px] py-[2px] rounded text-xs text-white", {
        "bg-blue-0": type === "blue",
        "bg-orange-16": type === "orange",
      })}>
      {txt}
    </div>
  );
}

export interface AttrsProps {
  title: string;
  sub: string;
  badge?: BadgeProps[];
}

export function Attrs(p: AttrsProps) {
  const { title, sub, badge = [] } = p;
  return (
    <div
      style={{ border: "1px solid #000000" }}
      className={classNames("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5")}>
      <div className="text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis">{title}</div>
      <div className="flex mt-[.625rem]">
        <div className="text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2">{sub}</div>
        {badge.map((bad, i) => (
          <Badge style={{ marginLeft: 6 }} className="shrink-0" key={`attrs1_badge_${i}`} {...bad} />
        ))}
      </div>
    </div>
  );
}

export interface AttrsFullProps extends AttrsProps {
  tit_r?: string;
}
export function AttrsFull(p: AttrsFullProps) {
  const { title, sub, badge = [], tit_r } = p;
  return (
    <div
      className={classNames(
        "rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16",
      )}>
      <div className="flex">
        <div className="text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2">{title}</div>
        <div className="flex-1" />
        {tit_r !== undefined && (
          <div className="shrink-0 whitespace-nowrap text-sm font-semibold text-green-2">{tit_r}</div>
        )}
      </div>
      <div className="flex mt-[.625rem]">
        <div className="text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2">{sub}</div>
        <div className="flex-1" />
        {badge.map((bad, i) => (
          <Badge style={{ marginLeft: 6 }} className="shrink-0" key={`attrs1_badge_${i}`} {...bad} />
        ))}
      </div>
    </div>
  );
}
