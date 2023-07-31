import classNames from "classnames";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";

export function Button(p: HTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...other } = p;
  return (
    <button {...other} className={classNames(className, "hover:bg-green-28")}>
      {p.children}
    </button>
  );
}

export type BtnProps = {
  busy?: boolean;
  disable?: boolean;
  defStyle?: "btn-primary" | "btn-primary-1";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Btn(p: BtnProps) {
  const { busy, disable, className, defStyle = "btn-primary", children, ...props } = p;
  return (
    <button
      className={classNames(className, {
        [defStyle]: !disable,
        "btn-disable": disable,
      })}
      {...props}
    >
      {busy ? <FaSpinner className="animate-spin" /> : children}
    </button>
  );
}
