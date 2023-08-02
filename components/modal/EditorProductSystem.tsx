import { Btn } from "@components/common/button";
import { useStore } from "@components/common/context";
import { Dropdown } from "@components/common/dropdown";
import { Modal, ModalProps } from "@components/common/modal";
import { useOn } from "@lib/hooks/useOn";
import classNames from "classnames";
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { useToggle } from "react-use";
import { RealData } from "./RealData";
import { ViewProductSystem } from "./ViewProductSystem";

export function PsStatus(p: { status: number }) {
  const { status } = p;
  if (status === 0) return <div className="text-neutral-400 text-base font-normal leading-none">草稿</div>;
  return (
    <div
      className={classNames(
        "w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",
        {
          "bg-rose-500": status !== 1,
          "bg-green-600": status === 1,
        },
      )}>
      <div
        className={classNames("text-green-600 text-base font-normal leading-none", {
          "text-rose-500": status !== 1,
          "text-green-600": status === 1,
        })}>
        {status === 1 ? "当前使用" : "过去版本"}
      </div>
    </div>
  );
}

export function ActionBtn(p: { action: string; onClick?: MouseEventHandler<HTMLDivElement>; to?: string }) {
  const { action, onClick, to } = p;
  if (to) {
    return (
      <a
        href={to}
        className="w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none">
        {action}
      </a>
    );
  }
  return (
    <div
      className="w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer"
      onClick={onClick}>
      <div className="text-black text-base font-normal leading-none">{action}</div>
    </div>
  );
}

export function LcaActionInfo(p: {
  psId?: string;
  modelId?: string;
  isNew?: boolean;
  isRead?: boolean;
  file?: File;
  onFileChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const { psId, modelId, isNew, isRead, file, onFileChange } = p;
  const inputFileRef = useRef<HTMLInputElement>(null);
  return (
    <div className="text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5">
      <input ref={inputFileRef} type="file" hidden accept=".zip" onChange={onFileChange} />
      {isNew && file?.name}
      {isRead ? (
        <ActionBtn to={`/model?id=${modelId}`} action="在线查看" />
      ) : isNew ? (
        <>
          <ActionBtn action="选择模型" onClick={(e) => inputFileRef.current?.click()} />
        </>
      ) : (
        <>
          <ActionBtn to={`/model?id=${modelId}`} action="在线查看" />
          <ActionBtn action="更新模型" onClick={(e) => inputFileRef.current?.click()} />
        </>
      )}
    </div>
  );
}

export function PairInfo(p: { tit: string; value: ReactNode }) {
  const isStr = typeof p.value === "string" || typeof p.value === "number";
  return (
    <div className="flex flex-col gap-2.5">
      <div className="text-black text-base font-normal leading-normal">{p.tit}: </div>
      {isStr ? <div className="text-neutral-400 text-base font-normal leading-none">{p.value}</div> : p.value}
    </div>
  );
}

export function EditorText(p: InputHTMLAttributes<HTMLInputElement>) {
  const { defaultValue, ...props } = p;
  return (
    <input
      type="text"
      className="w-full px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none"
      {...props}
    />
  );
}

export function OrganizationInfo() {
  const { userData } = useStore();
  return (
    <>
      <PairInfo tit="组织名称" value={userData?.organization?.name || "-"} />
      <PairInfo tit="组织编号" value={userData?.organization?.id || "-"} />
    </>
  );
}

export function EditorProductSystem(p: ModalProps & { ps: any; onSuccess?: () => void }) {
  const { ps, onSuccess, ...props } = p;
  const { userData } = useStore();
  const [inputDesc, setInputDesc] = useState("ES6 2023 120kWh Sports");
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState<File | undefined | null>(null);
  const disabledOk = !file;
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);
  const disableSubmit = false;
  const onSubmit = useOn(() => {});

  const [realModal, toggleRealModal] = useToggle(false);
  const [oldPs, toggleOldPs] = useToggle(false);

  return (
    <Modal title={ps.modelName} {...props}>
      <div className="flex flex-col gap-5  w-full min-w-[40rem] max-h-[70vh] overflow-y-auto">
        <PairInfo tit="UID" value="PS-1" />
        <PairInfo
          tit="版本"
          value={
            <div className="flex justify-between items-center gap-2.5 px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200">
              {"3"}
              <Dropdown
                items={[{ text: "版本3" }, { text: "版本2" }, { text: "版本1" }]}
                className="px-2.5 py-1 bg-white rounded border border-neutral-200 text-stone-500 text-base font-normal leading-none"
                onClick={() => {
                  toggleOldPs(true);
                }}>
                查看历史版本
              </Dropdown>
            </div>
          }
        />
        <PairInfo tit="描述" value={<EditorText value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} />} />
        <PairInfo tit="状态" value={<PsStatus status={1} />} />
        <PairInfo tit="变更人" value={userData?.name || "-"} />
        <PairInfo tit="产品系统LCA文件" value={<LcaActionInfo file={file as any} onFileChange={onFileChange} />} />
        <PairInfo tit="实景数据" value={<ActionBtn action="查看" onClick={() => toggleRealModal(true)} />} />
        <OrganizationInfo />
      </div>
      <div className="flex flex-col gap-2.5 mt-5">
        <Btn busy={busy} disabled={disableSubmit} onClick={onSubmit}>
          提交更新
        </Btn>
        <div className="text-black text-sm font-normal">
          * 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。
        </div>
      </div>
      {realModal && <RealData onClose={() => toggleRealModal(false)} />}
      {oldPs && <ViewProductSystem onClose={() => toggleOldPs(false)} ps={ps} />}
    </Modal>
  );
}
