import { Modal, ModalProps } from "@components/common/modal";
import { ProduceSystemController } from "@lib/@types/produceSystem";
import { useToggle } from "react-use";
import { ActionBtn, LcaActionInfo, OrganizationInfo, PairInfo, PsStatus } from "./EditorProductSystem";
import { RealData } from "./RealData";

export function ViewProductSystem(p: ModalProps & { ps: ProduceSystemController.ListRecords }) {
  const { ps, ...props } = p;
  const [realModal, toggleRealModal] = useToggle(false);
  return (
    <Modal title={ps.name} {...props}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto">
        <PairInfo tit="UID" value={ps.uuid || "-"} />
        <PairInfo tit="版本" value={ps.version || "-"} />
        <PairInfo tit="描述" value={ps.description || "-"} />
        <PairInfo tit="状态" value={<PsStatus status={ps.state} />} />
        <PairInfo tit="变更人" value={ps.updateUser?.name || "-"} />
        <PairInfo
          tit="产品系统LCA文件"
          value={<LcaActionInfo modelId={ps.model?.id} modelStatus={ps.model?.state} isRead={true} />}
        />
        <PairInfo tit="实景参数列表" value={<ActionBtn action="查看" onClick={() => toggleRealModal(true)} />} />
        <OrganizationInfo organization={ps.org} />
      </div>
      {realModal && <RealData data={ps.model?.paramDetail} onClose={() => toggleRealModal(false)} />}
    </Modal>
  );
}
