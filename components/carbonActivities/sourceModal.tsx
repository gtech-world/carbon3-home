import { Modal } from "@components/common/modal";
import { MouseEventHandler } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Source } from "./pcSource";

export function SourceModal(p: { data: any; onBack: MouseEventHandler<HTMLButtonElement> }) {
  const { data, onBack } = p;
  return (
    <Modal>
      <div className="sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white">
        <button className="text-2xl" onClick={onBack}>
          <IoChevronBackOutline />
        </button>
        <span className="flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4">{data.name}</span>
        <div className="w-6" />
      </div>
      <div className="p-5 w-full flex flex-col">
        <Source data={data}/>
      </div>
    </Modal>
  );
}
