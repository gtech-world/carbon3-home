import { useOn } from "@lib/hooks/useOn";
import classNames from "classnames";
import { HTMLAttributes, MouseEvent, MutableRefObject, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

export const modalRootRef: MutableRefObject<HTMLDivElement | null> = {
  current: null,
};

export function ModalHeader(p: {
  title?: string;
  titleStyle?: string;
  containerStyle?: string;
  onClose?: Function;
}) {
  const { title, onClose, titleStyle, containerStyle } = p;
  return (
    <div
      className={classNames(
        "flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b",
        containerStyle
      )}
    >
      <span className={titleStyle}>{title}</span>
      <FiX
        onClick={(e) => {
          e.stopPropagation();
          onClose && onClose();
        }}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
}

export function ModalFooter(p: {}) {
  return <div></div>;
}

export function Modal(
  p: {
    title?: string;
    titleStyle?: string;
    containerStyle?: string;
    onClose?: Function;
    outClose?: boolean;
  } & HTMLAttributes<HTMLDivElement>
) {
  const {
    className,
    title,
    onClose,
    outClose = true,
    titleStyle,
    containerStyle,
    children,
    ...other
  } = p;
  const ref = useRef<HTMLDivElement>(null);
  const onClickOut = useOn((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const isChild =
      ref.current &&
      ref.current !== e.target &&
      ref.current.contains(e.target as any);
    !isChild && outClose && onClose && onClose();
  });
  if (!modalRootRef.current) return null;
  return createPortal(
    <div
      {...other}
      ref={ref}
      onClick={onClickOut}
      className={classNames(
        "fixed left-0  top-0 w-full h-full overflow-auto z-50 bg-black/25 flex justify-center items-center",
        className
      )}
    >
      <div
        id="mo"
        ref={ref}
        className={classNames(
          "bg-white rounded p-5 min-w-[20rem] min-h-[150] "
        )}
      >
        <ModalHeader
          title={title}
          containerStyle={containerStyle}
          titleStyle={titleStyle}
          onClose={onClose}
        />
        {children}
      </div>
    </div>,
    modalRootRef.current
  );
}
