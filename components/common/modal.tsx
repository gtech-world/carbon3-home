import classNames from "classnames";
import { HTMLAttributes, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Modal(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...other } = p;
  const [root, setRoot] = useState<HTMLElement>();
  useEffect(() => {
    const app = document.getElementById("__app");
    app && setRoot(app);
  }, []);
  if (!root) return null;
  return createPortal(
    <div {...other} className={classNames("fixed left-0 top-0 w-full h-full overflow-auto z-50 bg-white", className)}>
      {children}
    </div>,
    root
  );
}
