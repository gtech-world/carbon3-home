import { Descriptor, ModelType, NavNode } from "@lib/@types/lca";
import classNames from "classnames";
import { useCallback } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
//@ts-ignore
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeTree as MTree } from "react-vtree";
import { useSelectNavs } from "./context";
import { ModelIcon } from "./common/modelIcon";
import { TypeContentMap } from "./typeContent";

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
  const { active, add } = useSelectNavs();
  return (
    <div
      style={{
        ...style,
        marginLeft: `${nestingLevel * 20}px`,
        width: "max-content",
        paddingRight: 20,
        background: node === active ? "rgba(34, 122, 48, 0.1)" : "none",
      }}
      className={classNames("flex items-center py-[2px]", {
        "": node === active,
      })}>
      <button onClick={() => setOpen(!isOpen)} className={classNames("text-sm mr-[6px]", { invisible: isLeaf })}>
        {isOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
      </button>
      <div
        onClick={() => {
          if (mNode.type == "content" && Object.keys(TypeContentMap).includes(mNode.modelType)) {
            add(node);
          }
          if (mNode.type == "folder") {
            setOpen(!isOpen);
          }
        }}
        className={classNames("flex text-sm gap-1 items-center cursor-pointer")}>
        <ModelIcon
          type={
            mNode.type == "folder"
              ? `folder-${mNode.modelType}`
              : mNode.modelType === ModelType.FLOW.valueOf()
              ? (mNode.data as Descriptor).flowType || "FLOW"
              : mNode.modelType
          }
        />
        <span className={classNames("text-black whitespace-nowrap")}>{name}</span>
      </div>
    </div>
  );
}

export function Nav(p: { node: NavNode }) {
  const { node } = p;
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
    [node],
  );
  return (
    <AutoSizer>
      {({ height, width }: any) => (
        <MTree
          style={{ padding: 10 }}
          useIsScrolling={false}
          innerRef={(inner) => {
            if (inner) {
              (inner as HTMLDivElement).style.position = "relative";
            }
          }}
          width={width}
          height={height}
          itemSize={18}
          treeWalker={treeworker as any}>
          {NavItem}
        </MTree>
      )}
    </AutoSizer>
  );
}
