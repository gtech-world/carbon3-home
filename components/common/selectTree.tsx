import { ModelType, NavNode } from "@lib/@types/lca";
import classNames from "classnames";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { useClickAway, useToggle } from "react-use";
//@ts-ignore
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeTree as MTree } from "react-vtree";


const getNodeData = (node:any, nestingLevel:any,onSelect:Function,onSwitch:Function) => ({
  data: {
    id: node.id.toString(), // mandatory
    isLeaf: !node?.children || node?.children?.length === 0,
    isOpenByDefault: true, // mandatory
    name: node.name,
    nestingLevel,
    node,
    onSelect: (node:any)=>{onSelect && onSelect(node)},
    onSwitch: ()=>{onSwitch && onSwitch(node)}
  },
  nestingLevel,
  node,
});

function NavItem(p: any) {
  const {
    style,
    data: { name, nestingLevel, isLeaf, node,onSelect,onSwitch },
    isOpen,
    setOpen,
  } = p;
  return (
    <div
      style={{
        ...style,
        paddingLeft: `${nestingLevel * 20}px`,
        width: "max-content",
        paddingRight: 20,
        // background: node === active ? "rgba(34, 122, 48, 0.1)" : "none",
      }}
      className={classNames("flex items-center py-[2px]", {
        // "": node === active,
      })}
    >
      <button onClick={() => setOpen(!isOpen)} className={classNames("text-xl text-gray-9 mr-[4px]", { invisible: isLeaf })}>
        {isOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
      </button>

      <div
        onClick={() => {
          if(isLeaf){
            onSelect(node)
          }else {
            onSwitch()
            setOpen(!isOpen);
          }
        }}
        className={classNames("flex text-sm gap-1 items-center cursor-pointer")}
      >
        {/*<ModelIcon type={mNode.type == "folder" ? `folder-${mNode.modelType}` : mNode.modelType} />*/}
        <span className={classNames("text-black whitespace-nowrap")}>{name}</span>
      </div>
    </div>
  );
}

export function SelectTree(p: { node: any,onChange:Function,classname?:string }) {
  const { node=[],onChange,classname } = p;
  // const [open,setOpen] = useState(false)
  const [selected,setSelected] = useState<any>()
  const mtreeRef = useRef(null)
  const ref = useRef(null)
  const [open, onToggle] = useToggle(false);
  const [height,setHeight] = useState(20)
  useClickAway(ref, () => open && onToggle(false));
  useEffect(()=>{
    onChange && onChange(selected)
  },[selected])
  const handleHeight = ()=>{
    setTimeout(()=>{
      // @ts-ignore
      const dom = mtreeRef.current?.firstElementChild.firstElementChild
      if(dom){
        setHeight(parseInt(dom.style.height))
      }
    },0)

  }
  useEffect(()=>{
    open && handleHeight()
  },[open])
  const treeworker = useCallback<any>(
    function* () {
      for (let i = 0; i < node.length; i++) {
        yield getNodeData(node[i], 0,(data:any)=>{
          setSelected(data)
          onToggle(false)
        },()=>{
          handleHeight()
        });
      }

      while (true) {
        // @ts-ignore
        const parent = yield;
        for (let i = 0; i < parent.node?.children?.length; i++) {
          yield getNodeData(parent.node.children[i], parent.nestingLevel + 1,(data:any)=>{
            setSelected(data)
            onToggle(false)
          },()=>{
            handleHeight()
          });
        }
      }
    },
    [node]
  );
  return (
    <div className="" ref={ref}>
      <div className={classNames("w-full justify-between h-10 cursor-pointer rounded-lg flex items-center px-3",classname)} onClick={()=>onToggle(!open)}>
        <span>{selected?selected.name:''}</span>
        <button onClick={() => onToggle(!open)} className={classNames("text-xl mr-[4px]")}>
          {open ? <RiArrowRightSLine className="rotate-[-90deg]" />:<RiArrowDownSLine />}
        </button>
      </div>
      {
        open &&
        <AutoSizer>
          {({ width }: any) => (
            <div className="bg-white rounded-lg mt-2.5 p-5 absolute" ref={mtreeRef} style={{boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)"}}>
              <MTree className="" ref={mtreeRef} useIsScrolling={true} width={width-42} height={height} itemSize={22} treeWalker={treeworker as any}>
                {NavItem}
              </MTree>
            </div>
          )}
        </AutoSizer>

      }
    </div>
  );
}
