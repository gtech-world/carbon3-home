import { Modal } from "@components/common/modal";
import { Attrs, AttrsProps } from "@components/items/attrs";
import { HTMLAttributes, MouseEventHandler } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useToggle } from "react-use";
import { PartInfos } from "./pcbom";

export function BomNodeModal(p: { data: any; onBack: MouseEventHandler<HTMLButtonElement> }) {
  const { data, onBack } = p;
  const currentAttrs: AttrsProps[] = [
    {
      title: "Sourcing - Emission from Purchasing Sourcing - Emission from Purchasing ",
      sub: "Item #2: Climate SystemItem #2: Climate SystemItem #2: Climate SystemItem #2: Climate System",
      badge: [
        { type: "blue", txt: "2" },
        { type: "orange", txt: "RefData" },
      ],
    },
    {
      title: "Sourcing - Emission from Purchasing Sourcing - Emission from Purchasing ",
      sub: "Item #2: Climate SystemItem #2: Climate SystemItem #2: Climate SystemItem #2: Climate System",
      badge: [
        { type: "blue", txt: "2" },
        { type: "orange", txt: "RefData" },
      ],
    },
    {
      title: "Sourcing - Emission from Purchasing Sourcing - Emission from Purchasing ",
      sub: "Item #2: Climate SystemItem #2: Climate SystemItem #2: Climate SystemItem #2: Climate System",
      badge: [
        { type: "blue", txt: "2" },
        { type: "orange", txt: "RefData" },
      ],
    },
    {
      title: "Sourcing - Emission from Purchasing Sourcing - Emission from Purchasing ",
      sub: "Item #2",
      badge: [
        { type: "blue", txt: "2" },
        { type: "orange", txt: "RefData" },
      ],
    },
  ];
  return (
    <Modal>
      <div className="sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white">
        <button className="text-2xl" onClick={onBack}>
          <IoChevronBackOutline />
        </button>
        <span className="flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4">{data.name}</span>
        <div className="w-6" />
      </div>
      <div className="p-5">
        {(data.children as any[]).map((node, i) => (
          <BomItem key={`bomItem_${i}`} data={node} />
        ))}
        { (data.children as any[]).length > 0 && <div className="h-5"/>}
        <PartInfos node={data} />
        <div className="text-[.9375rem] font-bold mt-5 mb-[.875rem]">Attributable to Carbon Activities:</div>
        {currentAttrs.map((attr, i) => (
          <Attrs key={`attrs_${i}`} {...attr} />
        ))}
      </div>
    </Modal>
  );
}

export function BomItem(p: { data: any } & HTMLAttributes<HTMLDivElement>) {
  const { data } = p;
  const [open, toggle] = useToggle(false);
  return (
    <div
      onClick={() => {
        toggle(true);
        console.info("open bom modal");
      }}
      className="cursor-pointer flex justify-between items-end w-full px-5 py-3 border border-solid border-black rounded-lg [&:nth-child(n+2)]:mt-5"
    >
      <div className="text-lg flex-grow-0 whitespace-nowrap overflow-hidden text-ellipsis">{data.name}</div>
      <IoChevronForwardOutline className="text-2xl flex-shrink-0" />
      {open && (
        <BomNodeModal
          data={data}
          onBack={(e) => {
            toggle(false);
            console.info("close bom modal");
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}
