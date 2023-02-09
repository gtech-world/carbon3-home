import { Modal } from "@components/common/modal";
import { Fragment, MouseEventHandler } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import classNames from "classnames";
import { useToggle } from "react-use";
import { MobileActL3 } from "./mobileActL3";

export function MobileActL2Item(p: { data: any; index: number }) {
  const { data, index } = p;
  const [open, toggle] = useToggle(false);
  return (
    <div
      className="w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg"
      style={{ marginTop: index > 0 ? "1.25rem" : "0px" }}
      onClick={() => toggle(true)}
    >
      <div
        style={{
          WebkitLineClamp: 2,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
        className={classNames("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis")}
      >
        {data.name}
      </div>
      {data.carbon_emission !== undefined && (
        <div className="text-sm mt-[.625rem] text-gray-6">{`${data.carbon_emission}kg / ${data.items} items`}</div>
      )}
      {open && (
        <MobileActL3
          data={data}
          onBack={(e) => {
            toggle(false);
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}

export function MobileActL2(p: { data: any; onBack: MouseEventHandler<HTMLButtonElement> }) {
  const { data, onBack } = p;
  console.info("mobact2:", data);
  return (
    <Modal>
      <div className="sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white">
        <button className="text-2xl" onClick={onBack}>
          <IoChevronBackOutline />
        </button>
        <span className="flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4">{data.name}</span>
        <div className="w-6" />
      </div>
      <div className="p-5 w-full">
        {(data.sourcings as any[]).map((item, i) => (
          <Fragment key={`sourcing_item_${i}`}>
            <MobileActL2Item data={item} index={i} />
          </Fragment>
        ))}
      </div>
    </Modal>
  );
}
