import classNames from "classnames";
import { HTMLAttributes, MutableRefObject } from "react";
import { createPortal } from "react-dom";

export const modalRootRef: MutableRefObject<HTMLDivElement | null> = { current: null };

export function Modal(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...other } = p;
  if (!modalRootRef.current) return null;
  return createPortal(
    <div {...other} className={classNames("fixed left-0 top-0 w-full h-full overflow-auto z-50 bg-white", className)}>
      {children}
    </div>,
    modalRootRef.current
  );
}
