import classNames from "classnames";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";

export function Button(p: HTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...other } = p;

  return (
    <button {...other} className={classNames(className)}>
      {p.children}
    </button>
  );
}

export type BtnProps = {
  busy?: boolean;
  defStyle?: "btn-primary" | "btn-primary-1";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Btn(p: BtnProps) {
  const { busy, disabled, className, defStyle = "btn-primary", children, ...props } = p;
  return (
    <button
      className={classNames(className, {
        [defStyle]: !disabled,
        "btn-disable": disabled,
      })}
      {...props}>
      {busy ? <FaSpinner className="animate-spin" /> : children}
    </button>
  );
}
