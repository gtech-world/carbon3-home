import { Modal } from "@components/common/modal";
import { FC } from "react";
import { PairInfo } from "./EditorProductSystem";
import { Mermaid } from "@components/common/mermaid";

interface ViewBomInfoModalProps {
  onClose: () => void;
}

const NumInfo: any = [
  { name: "目标产品", valueObj: ["PN:aaa", "PN:bbb", "PN:ccc", "PN:ddd"] },
  { name: "子系统1", valueObj: ["PN:eee", "PN:fff", "PN:ggg", "PN:hhh"] },
  { name: "子系统2", valueObj: ["PN:jjj", "PN:kkk", "PN:lll", "PN:mmm"] },
  { name: "子系统3", valueObj: ["PN:nnn", "PN:ooo", "PN:ppp", "PN:qqq"] },
  { name: "子系统4", valueObj: ["PN:rrr", "PN:sss", "PN:ttt", "PN:uuu"] },
  { name: "子系统5", valueObj: ["PN:vvv", "PN:www", "PN:xxx", "PN:yyy"] },
];

const src = () => {
  let obj = "graph TD\n";

  for (const e of NumInfo) {
    if (e.name && e.name !== NumInfo[0].name) {
      obj += `${e.name} --> ${NumInfo[0].name}\n`;
    }
    obj += `style ${e.name} color:black,fill:#F1F1F1,stroke:black\n`;
  }

  return obj;
};

const ViewBomInfoModal: FC<ViewBomInfoModalProps> = ({ onClose, ...props }) => {
  return (
    <Modal {...props} title="查看BOM信息" onClose={onClose}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden">
        <div className="flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto">
          <PairInfo tit="BOM结构" value={<Mermaid data={src()} className="flex justify-center  bg-[#F1F1F1]" />} />
          <PairInfo tit="Part Number信息" value={null} />
          {NumInfo.map((e: any, i: number) => {
            return (
              <div key={`info_${i}`} className="flex flex-row gap-10">
                <div className="w-20 ">{e.name}</div>
                <div className="flex flex-row ">
                  {e.valueObj.map((item: any, index: number) => {
                    return (
                      <div key={`value_${index}`} className="w-20 ">
                        <div className="h-6 mx-[5px] bg-[#F1F1F1] flex justify-center  rounded">{item}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ViewBomInfoModal;
