import { Modal, ModalProps } from "@components/common/modal";
import { useToggle } from "react-use";
import { ActionBtn, LcaActionInfo, OrganizationInfo, PairInfo, PsStatus } from "./EditorProductSystem";
import { RealData } from "./RealData";

export function ViewProductSystem(p: ModalProps & { ps: any }) {
  const { ps, ...props } = p;
  const [realModal, toggleRealModal] = useToggle(false);
  return (
    <Modal title={ps.modelName} {...props}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]">
        <PairInfo tit="UID" value={ps.uuid || "-"} />
        <PairInfo tit="版本" value={ps.version || "-"} />
        <PairInfo tit="描述" value={ps.description || "-"} />
        <PairInfo tit="状态" value={<PsStatus status={ps.state} />} />
        <PairInfo tit="变更人" value={ps.updateUser?.name || "-"} />
        <PairInfo tit="产品系统LCA文件" value={<LcaActionInfo psId={ps.id} isRead={true} />} />
        <PairInfo tit="实景数据" value={<ActionBtn action="查看" />} />
        <OrganizationInfo />
      </div>
      {realModal && <RealData onClose={() => toggleRealModal(false)} />}
    </Modal>
  );
}
