import classNames from "classnames";
import {HTMLAttributes, MutableRefObject, useRef} from "react";
import { createPortal } from "react-dom";
import {FiX} from 'react-icons/fi'
import {useClickAway} from "react-use";

export const modalRootRef: MutableRefObject<HTMLDivElement | null> = { current: null };

export function ModalHeader(p:{title?: string,onClose?: Function}){
  const {title,onClose} = p
  return(
    <div className="text-xl font-bold flex justify-between items-center border-b pb-6 mb-6">
      <span>{title}</span>
      <FiX onClick={()=>onClose && onClose()} className="text-2xl cursor-pointer" />
    </div>
  )
}

export function Modal(p: {title?:string; onClose?:Function} & HTMLAttributes<HTMLDivElement>) {
  const { className,title,onClose, children, ...other } = p;
  if (!modalRootRef.current) return null;
  const ref = useRef(null)
  useClickAway(ref, () => onClose && onClose());
  return createPortal(
    <div {...other} className={classNames("fixed left-0 top-0 w-full h-full overflow-auto z-50 bg-black/25 flex justify-center items-center", className)}>
      <div ref={ref} className="bg-white rounded p-5 min-w-[20rem]">
        <ModalHeader title={title} onClose={onClose}/>
        {children}
      </div>
    </div>,
    modalRootRef.current
  );
}
