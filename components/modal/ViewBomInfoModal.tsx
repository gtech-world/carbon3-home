import { Modal } from "@components/common/modal";
import { FC } from "react";
import { PairInfo } from "./EditorProductSystem";
import { Mermaid } from "@components/common/mermaid";

interface ViewBomInfoModalProps {
  onClose: () => void;
  modelBomInfo?: string;
}

const ViewBomInfoModal: FC<ViewBomInfoModalProps> = ({ onClose, ...props }) => {
  const { modelBomInfo = "" } = props;
  const result = modelBomInfo && JSON.parse(modelBomInfo);

  let styles: any = [];
  let mermaidDiagram = "graph TD\n";
  (result || []).forEach((item: { flowName: string; childFlowIds: any }, index: number) => {
    const { flowName, childFlowIds } = item;
    mermaidDiagram += `${index + 1}["${flowName}"]\n`;

    if (childFlowIds.length > 0) {
      childFlowIds.forEach((childId: any) => {
        const childIndex = result.findIndex((x: { flowId: any }) => x.flowId === childId);
        if (childIndex !== -1) {
          mermaidDiagram += `${childIndex + 1} --> ${index + 1}\n`;
          styles.push(`style ${childIndex + 1} color:black,fill:#F1F1F1,stroke:black\n`);
          styles.push(`style ${index + 1} color:black,fill:#F1F1F1,stroke:black\n`);
        }
      });
    }
  });

  const data = [...new Set(styles || [])].toString().replace(/,style/g, " style");
  const src = `${mermaidDiagram}\n${data}`;

  return (
    <Modal {...props} title="查看BOM信息" onClose={onClose}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden">
        <div className="flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto">
          <PairInfo
            tit="BOM结构"
            value={<Mermaid data={src} className="flex justify-center  w-[800px] h-[200px] bg-[#F1F1F1]" />}
          />
          <PairInfo tit="Part Number信息" value={null} />
          {(result || []).map((e: any, i: number) => {
            return (
              <div key={`info_${i}`} className="flex flex-row gap-10">
                <div className="w-[200px] text-base text-[#666666] ">{e.flowName}</div>
                <div className="flex flex-row ">
                  {(e?.partNumbers || []).map((item: any, index: number) => {
                    return (
                      <div key={`value_${index}`} className="flex items-center w-20 ">
                        <div className="h-6 mx-[5px] font-normal  bg-[#F1F1F1] flex justify-center  rounded">
                          PN：{item}
                        </div>
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
