import { Modal, ModalProps } from "@components/common/modal";
import { ActionBtn, LcaActionInfo, PairInfo, PsStatus } from "./EditorProductSystem";
import { useToggle } from "react-use";
import { RealData } from "./RealData";

export function ViewProductSystem(p: ModalProps & { ps: any }) {
  const { ps, ...props } = p;
  const [realModal, toggleRealModal] = useToggle(false);
  return (
    <Modal title={ps.modelName} {...props}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]">
        <PairInfo tit="UID" value="PS-1" />
        <PairInfo tit="版本" value="1" />
        <PairInfo tit="描述" value="ES6 2023 120kWh Sports" />
        <PairInfo tit="状态" value={<PsStatus status={2} />} />
        <PairInfo tit="变更人" value="Cherry" />
        <PairInfo tit="产品系统LCA文件" value={<LcaActionInfo name="" isRead={true} />} />
        <PairInfo tit="实景数据" value={<ActionBtn action="查看" />} />
        <PairInfo tit="组织名称" value="蔚来江淮" />
        <PairInfo tit="组织编号" value="00007" />
      </div>
      {realModal && <RealData onClose={() => toggleRealModal(false)} />}
    </Modal>
  );
}
