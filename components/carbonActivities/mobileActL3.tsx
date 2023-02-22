import { Modal } from "@components/common/modal";
import { AttrsFull } from "@components/items/attrs";
import { InventoryProductProcess, ProductProcess } from "@lib/@types/type";
import { MouseEventHandler } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

export function MobileActL3(p: {
  data: ProductProcess | InventoryProductProcess;
  onBack: MouseEventHandler<HTMLButtonElement>;
}) {
  const { data, onBack } = p;
  const iData = data as InventoryProductProcess;
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
        {iData.carbon_emission !== undefined && (
          <div className="text-sm mt-[.625rem] text-gray-6">{`${iData.carbon_emission}kg / ${iData.activityTypes.length} items`}</div>
        )}
        <div className="w-full mt-5">
          {iData.activityTypes.map((item, i) => (
            <AttrsFull
              key={`attrs_source_${i}`}
              title={`#${i + 1} ${item.displayName}`}
              tit_r={item.carbon_emission === undefined ? undefined : `${item.carbon_emission}kg`}
              sub={item.description}
              // badge={[
              //   { type: "blue", txt: `${2}` },
              //   { type: "orange", txt: item.scope ? "RefData" : "Supplier" },
              // ]}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}
