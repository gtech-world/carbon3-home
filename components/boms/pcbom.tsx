import { Attrs } from "@components/items/attrs";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getProductBomActivityTypes } from "@lib/http";
import { ProductBom } from "@lib/@types/type";
import classNames from "classnames";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
//@ts-ignore
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeTree as MTree } from "react-vtree";
import { BomUIProps } from "./types";

type SelectState = [ProductBom, (v: ProductBom) => void];
const CurrentBomSelectContext = createContext<SelectState|undefined>(undefined);

const getNodeData = (node: ProductBom, nestingLevel: number) => ({
  data: {
    id: node.id.toString(), // mandatory
    isLeaf: node.children.length === 0,
    isOpenByDefault: nestingLevel === 0, // mandatory
    name: node.partDisplayName,
    nestingLevel,
    node
  },
  nestingLevel,
  node,
});

function PcBomItem(p: any) {
  const {
    style,
    data: { name, nestingLevel, isLeaf, node },
    isOpen,
    setOpen,
  } = p;
  const [selectNode, setSelectNode] = useContext(CurrentBomSelectContext) as SelectState;
  return (
    <div
      style={{
        ...style,
        width: "max-content",
        marginLeft: `${nestingLevel * 2.25 + (isLeaf ? 2.25 : 0)}rem`,
        background: node === selectNode ? "rgba(34, 122, 48, 0.1)" : "none",
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
        onClick={() => nestingLevel !== 0 && setSelectNode(node)}
      >
        {name}
      </span>
    </div>
  );
}

export function PartInfo(p: { label: string; text: string }) {
  return (
    <div className="text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0">
      <span className="text-black font-bold">{p.label}:</span> {p.text}
    </div>
  );
}

export function PartInfos(p: BomUIProps) {
  const { node } = p;
  return (
    <>
      <PartInfo label="Part Name" text={node.partDisplayName} />
      <PartInfo label="Part Type" text={node.children.length > 0 ? "Sub-system" : "Bom"} />
      <PartInfo label="BOM Genealogy Level" text={`${node.deep + 1}`} />
      <PartInfo label="Parent" text={node.parent?.partDisplayName || "-"} />
      <PartInfo label="Children" text={`${node.children.length || 'No'} Child`} />
      <PartInfo label="From Supplier" text={node.supplierName || "-" } />
      <PartInfo label="Last Update" text={node.updateTime} />
    </>
  );
}

export function PcBom(p: BomUIProps) {
  const { node } = p;
  const [selectNode, setSelectNode] = useState(node.children[0]);
  const treeworker = useCallback(
    function* () {
      yield getNodeData(node, 0);

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
    [node]
  );
  const { value:actTypes } = useAsyncM(() => getProductBomActivityTypes(selectNode.id),[selectNode])
  const currentAttrs = useMemo(() => {
    if(!actTypes) return []
    return actTypes.map(item => ({
        title: item.displayName,
        sub: item.name,
    }))
  },[actTypes])

  return (
    <div className="w-full flex">
      <div className="p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black">
        <CurrentBomSelectContext.Provider value={[selectNode, setSelectNode]}>
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
          <PartInfos node={selectNode} />
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
