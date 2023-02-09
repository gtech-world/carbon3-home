import { Modal } from "@components/common/modal";
import { AttrsFull } from "@components/items/attrs";
import { MouseEventHandler } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

export function MobileActL3(p: { data: any; onBack: MouseEventHandler<HTMLButtonElement> }) {
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
      <div className="p-5 w-full">
        <div className="bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal">
          {data.name}
        </div>
        {data.carbon_emission !== undefined && (
          <div className="text-sm mt-[.625rem] text-gray-6">{`${data.carbon_emission}kg / ${data.boms.length} items`}</div>
        )}
        <div className="w-full mt-5">
          {(data.boms as any[]).map((item, i) => (
            <AttrsFull
              key={`attrs_source_${i}`}
              title={`#${i + 1} ${item.name}*${item.count}`}
              tit_r={item.carbon_emission === undefined ? undefined : `${item.carbon_emission}kg`}
              sub={item.calc}
              badge={[
                { type: "blue", txt: `${item.count}` },
                { type: "orange", txt: item.refData ? "RefData" : "Supplier" },
              ]}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}
