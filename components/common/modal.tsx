import classNames from "classnames";
import {HTMLAttributes, MutableRefObject, useRef} from "react";
import { createPortal } from "react-dom";
import {FiX} from 'react-icons/fi'
import {useClickAway} from "react-use";

export const modalRootRef: MutableRefObject<HTMLDivElement | null> = { current: null };

export function ModalHeader(p:{title?: string,onClose?: Function}){
  const {title,onClose} = p
  return(
    <div className="flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b">
      <span>{title}</span>
      <FiX onClick={()=>onClose && onClose()} className="text-2xl cursor-pointer" />
    </div>
  )
}

export function ModalFooter(p:{}){
  return(
    <div>

    </div>
  )
}

export function Modal(p: {title?:string; onClose?:Function} & HTMLAttributes<HTMLDivElement>) {
  const { className,title,onClose, children, ...other } = p;
  const ref = useRef(null)
  useClickAway(ref, () => onClose && onClose());
  if (!modalRootRef.current) return null;
  return createPortal(
    <div {...other} className={classNames("fixed left-0  top-0 w-full h-full overflow-auto z-50 bg-black/25 flex justify-center items-center", className)}>
      <div id='mo' ref={ref} className="bg-white rounded p-5 min-w-[20rem] min-h-[150] ">
        <ModalHeader title={title} onClose={onClose}/>
        {children}
      </div>
    </div>,
    modalRootRef.current
  );
}
