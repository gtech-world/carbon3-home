import classNames from "classnames";
import { HTMLAttributes } from "react";

export function Button(p: HTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...other } = p;
  return (
    <button {...other} className={classNames(className, "hover:bg-green-28")}>
      {p.children}
    </button>
  );
}
