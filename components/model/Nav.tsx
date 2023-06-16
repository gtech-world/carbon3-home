import { ModelType, NavNode } from "@lib/@types/lca";
import classNames from "classnames";
import { createContext, useCallback, useContext, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
//@ts-ignore
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeTree as MTree } from "react-vtree";
import { GrDocumentConfig } from "react-icons/gr";
type SelectState = [NavNode|undefined, (v: NavNode) => void];
const CurrentBomSelectContext = createContext<SelectState | undefined>(undefined);

const getNodeData = (node: NavNode, nestingLevel: number) => ({
  data: {
    id: node.id.toString(), // mandatory
    isLeaf: node.children.length === 0,
    isOpenByDefault: node.modelType == ModelType.PRODUCT_SYSTEM || nestingLevel === 0, // mandatory
    name: node.name,
    nestingLevel,
    node,
  },
  nestingLevel,
  node,
});

function NavItem(p: any) {
  const {
    style,
    data: { name, nestingLevel, isLeaf, node },
    isOpen,
    setOpen,
  } = p;

  const mNode = node as NavNode;
  const [selectNode, setSelectNode] = useContext(CurrentBomSelectContext) as SelectState;
  return (
    <div
      style={{
        ...style,
        marginLeft: `${nestingLevel * 20}px`,
        width: "max-content",
        paddingRight: 20,
        background: node === selectNode ? "rgba(34, 122, 48, 0.1)" : "none",
      }}
      className={classNames("flex items-center py-[2px]", {
        "": node === selectNode,
      })}
    >
      <button onClick={() => setOpen(!isOpen)} className={classNames("text-sm mr-[6px]", { invisible: isLeaf })}>
        {isOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
      </button>
      <div
        onClick={() => {
          mNode.type == "content" && setSelectNode(node);
          mNode.type == "folder" && setOpen(!isOpen);
        }}
        className={classNames("flex text-sm gap-1 items-center cursor-pointer", {
          "text-[#1565C0]": mNode.modelType == ModelType.PRODUCT_SYSTEM,
          "text-[#9C27B0]": mNode.modelType == ModelType.PROCESS,
          "text-[#CE6D2F]": mNode.modelType == ModelType.FLOW || mNode.modelType == ModelType.FLOW_PROPERTY,
          "text-[#21C393]": mNode.modelType == ModelType.EPD,
          "text-[#556164]": mNode.modelType == "Indicators and parameters",
          "text-[#999999]": mNode.modelType == "Background data",
        })}
      >
        {mNode.type == "folder" && <FaFolder />}
        {mNode.type == "content" && <GrDocumentConfig className="fixGrColor" />}
        <span className={classNames("text-black whitespace-nowrap")}>{name}</span>
      </div>
    </div>
  );
}

export function Nav(p: { node: NavNode }) {
  const { node } = p;
  const [selectNode, setSelectNode] = useState<NavNode|undefined>();
  const treeworker = useCallback(
    function* () {
      for (let i = 0; i < node.children.length; i++) {
        yield getNodeData(node.children[i], 0);
      }

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
  return (
    <CurrentBomSelectContext.Provider value={[selectNode, setSelectNode]}>
      <AutoSizer>
        {({ height, width }: any) => (
          <MTree
            useIsScrolling={true}
            width={width}
            height={height}
            itemSize={18}
            treeWalker={treeworker as any}
          >
            {NavItem}
          </MTree>
        )}
      </AutoSizer>
    </CurrentBomSelectContext.Provider>
  );
}
