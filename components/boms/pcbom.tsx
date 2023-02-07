import { Attrs, AttrsProps } from "@components/items/attrs";
import classNames from "classnames";
import { createContext, useCallback, useContext, useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
//@ts-ignore
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeTree as MTree } from "react-vtree";

const CurrentBomSelectContext = createContext<[string, (v: string) => void]>(["", () => {}]);

const getNodeData = (node: any, nestingLevel: number) => ({
  data: {
    id: node.id.toString(), // mandatory
    isLeaf: node.children.length === 0,
    isOpenByDefault: nestingLevel === 0, // mandatory
    name: node.name,
    nestingLevel,
  },
  nestingLevel,
  node,
});

function PcBomItem(p: any) {
  const {
    style,
    data: { id, name, nestingLevel, isLeaf },
    isOpen,
    setOpen,
  } = p;
  const [sid, setSid] = useContext(CurrentBomSelectContext);
  return (
    <div
      style={{
        ...style,
        width: "max-content",
        marginLeft: `${nestingLevel * 2.25 + (isLeaf ? 2.25 : 0)}rem`,
        background: sid === id ? "rgba(34, 122, 48, 0.1)" : "none",
      }}
      className="flex items-center px-5 py-3 rounded-lg"
    >
      {!isLeaf && (
        <button onClick={() => setOpen(!isOpen)} className="text-2xl mr-3">
          {isOpen ? <BsDashCircle /> : <BsPlusCircle />}
        </button>
      )}
      <span
        className={classNames("whitespace-nowrap cursor-pointer", { "font-bold": nestingLevel === 0 })}
        onClick={() => setSid(id)}
      >
        {name}
      </span>
    </div>
  );
}

function PartInfo(p: { label: string; text: string }) {
  return (
    <div className="text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-[1.375rem]">
      <span className="text-black font-bold">{p.label}:</span> {p.text}
    </div>
  );
}

export function PcBom(p: { data: any }) {
  const { data } = p;
  const [sid, setSid] = useState(data.children[0].id);
  const treeworker = useCallback(
    function* () {
      yield getNodeData(data, 0);

      while (true) {
        // Step [2]: Get the parent component back. It will be the object
        // the `getNodeData` function constructed, so you can read any data from it.
        const parent: any = yield;

        for (let i = 0; i < parent.node.children.length; i++) {
          // Step [3]: Yielding all the children of the provided component. Then we
          // will return for the step [2] with the first children.
          yield getNodeData(parent.node.children[i], parent.nestingLevel + 1);
        }
      }
    },
    [data]
  );

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
    <div className="w-full flex">
      <div className="p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black">
        <CurrentBomSelectContext.Provider value={[sid, setSid]}>
          <AutoSizer disableWidth>
            {({ height }: any) => (
              <MTree width={"100%"} height={height} itemSize={50} treeWalker={treeworker as any}>
                {PcBomItem}
              </MTree>
            )}
          </AutoSizer>
        </CurrentBomSelectContext.Provider>
      </div>
      <div className="px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between">
        <div className="flex-1 w-0">
          <PartInfo label="Part Name" text="Climate System" />
          <PartInfo label="Part Type" text="Sub-system" />
          <PartInfo label="BOM Genealogy Level" text="1" />
          <PartInfo label="Parent" text="Ford Mach-E RWD 2022" />
          <PartInfo label="Children" text="No child" />
          <PartInfo label="From Supplier" text="AB Auto Thermo Inc,AB Auto Thermo Inc." />
          <PartInfo label="Last Update" text="2023-01-04 18:43" />
        </div>
        <div className="w-[3.5rem]" />
        <div className="w-0 flex-1 flex flex-col">
          <div className="text-lg font-bold mb-5">Attributable to Carbon Activities:</div>
          <div className="flex-1 w-full overflow-y-auto">
            {currentAttrs.map((attr, i) => (
              <Attrs key={`attrs_${i}`} {...attr} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
