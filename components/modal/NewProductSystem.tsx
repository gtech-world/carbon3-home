import { Modal, ModalProps } from "@components/common/modal";
import { useState } from "react";
import { EditorText, LcaActionInfo, PairInfo, PsStatus } from "./EditorProductSystem";
import { Btn } from "@components/common/button";
import { useOn } from "@lib/hooks/useOn";

export function NewProductSystem(p: ModalProps) {
  const { ...props } = p;
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const onOk = useOn(() => {

  });
  return (
    <Modal title={"新建产品系统"} {...props}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]">
        <form className="flex flex-col gap-5 w-full flex-1 h-max overflow-y-auto">
          <PairInfo tit="UID" value="PS-1" />
          <PairInfo tit="产品系统名称" value={<EditorText value={name} onChange={(e) => setName(e.target.value)} />} />
          <PairInfo tit="描述" value={<EditorText value={desc} onChange={(e) => setDesc(e.target.value)} />} />
          <PairInfo tit="状态" value={<PsStatus status={0} />} />
          <PairInfo tit="产品系统LCA文件" value={<LcaActionInfo name="" isNew={true}/>} />
          <PairInfo tit="组织名称" value="蔚来江淮" />
          <PairInfo tit="组织编号" value="00007" />
        </form>
        <div className="flex gap-5 w-full">
          <Btn defStyle="btn-primary-1" className="flex-1" onClick={props.onClose as any}>
            取消
          </Btn>
          <Btn className="flex-1" onClick={onOk}>
            确定
          </Btn>
        </div>
      </div>
    </Modal>
  );
}
