import { Btn } from "@components/common/button";
import { useStore } from "@components/common/context";
import { Dropdown } from "@components/common/dropdown";
import { Loading } from "@components/common/loading";
import { Modal, ModalProps } from "@components/common/modal";
import { useProductSystem } from "@lib/hooks/useDatas";
import { useOn } from "@lib/hooks/useOn";
import { uploadLcaModel, upsertLcaProduct } from "@lib/http";
import classNames from "classnames";
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useToggle } from "react-use";
import { RealData } from "./RealData";
import { ViewProductSystem } from "./ViewProductSystem";
import _ from "lodash";
import { shortStr } from "@lib/utils";

export function PsStatus(p: { status?: number }) {
  const { status } = p;
  if (_.isNil(status)) return <div className="text-base font-normal leading-none text-neutral-400">草稿</div>;
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
      <div className="text-base font-normal leading-none text-black">{action}</div>
    </div>
  );
}

export function LcaActionInfo(p: {
  psId?: string;
  modelId?: number;
  isNew?: boolean;
  isRead?: boolean;
  modelStatus?: number;
  file?: File;
  onFileChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const { psId, modelId, isNew, isRead, modelStatus, file, onFileChange } = p;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const renderLook = () => {
    if (modelStatus !== 1) return <div className="text-base font-normal leading-none text-amber-500">等待解析</div>;
    return <ActionBtn to={`/model?id=${modelId}`} action="在线查看" />;
  };
  return (
    <div className="text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5">
      <input ref={inputFileRef} type="file" hidden accept=".zip" onChange={onFileChange} />
      {!isRead && shortStr(file?.name)}
      {isRead ? (
        renderLook()
      ) : isNew ? (
        <>
          <ActionBtn action="上传模型" onClick={(e) => inputFileRef.current?.click()} />
        </>
      ) : (
        <>
          {!file && renderLook()}
          {modelStatus === 1 && <ActionBtn action="更新模型" onClick={(e) => inputFileRef.current?.click()} />}
        </>
      )}
    </div>
  );
}

export function PairInfo(p: { tit: string; value: ReactNode }) {
  const isStr = typeof p.value === "string" || typeof p.value === "number";
  return (
    <div className="flex flex-col gap-2.5">
      <div className="text-base font-normal leading-normal text-black">{p.tit}: </div>
      {isStr ? <div className="text-base font-normal leading-none text-neutral-400">{p.value}</div> : p.value}
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
      <PairInfo tit="组织编号" value={userData?.organization?.serialNumber || "-"} />
    </>
  );
}

export function EditorProductSystem(p: ModalProps & { psId: number; onSuccess?: () => void }) {
  const { psId, onSuccess, ...props } = p;
  const { data: ps, isLoading, error } = useProductSystem(psId, 60000);
  const [inputDesc, setInputDesc] = useState("");
  const firstRef = useRef(true);
  useEffect(() => {
    if (ps && firstRef.current) {
      setInputDesc(ps.description || "");
      firstRef.current = false;
    }
  }, [ps]);
  useEffect(() => {
    error && props.onClose && props.onClose();
  }, [error]);
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState<File | undefined | null>(null);
  const [progress, setProgress] = useState(0);
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);
  const disableSubmit = !ps || (!file && inputDesc === ps?.description);
  const onSubmit = useOn(() => {
    if (!ps) return;
    if (disableSubmit) return;
    setBusy(true);
    let task: Promise<any>;
    if (file) {
      const form = new FormData();
      form.append("file", file);
      form.append("name", file.name);
      task = uploadLcaModel(form, {
        onUploadProgress: (e) => setProgress(Math.min(100, Math.round((e.rate || 0) * 100))),
      }).then((modelId) => upsertLcaProduct({ id: ps.id, name: ps.name, description: inputDesc, modelId }));
    } else {
      task = upsertLcaProduct({ id: ps.id, name: ps.name, description: inputDesc });
    }
    task
      .then(() => {
        onSuccess && onSuccess();
        props.onClose && props.onClose();
      })
      .catch(console.error)
      .finally(() => {
        setProgress(0);
        setBusy(false);
      });
  });

  const [realModal, toggleRealModal] = useToggle(false);
  const [oldPs, setOldPs] = useState<ProduceSystemController.ListRecords>();
  const versions = useMemo(() => {
    return _.orderBy(
      (ps?.historyList || []).map((item) => ({ ...item, text: `版本${item.version}` })),
      (item) => _.toNumber(item.version),
      "desc",
    );
  }, [ps]);
  return (
    <Modal title={ps?.name || ""} {...props}>
      {isLoading && !ps && <Loading className="min-h-[100px]" />}
      {ps && (
        <>
          <div className="flex flex-col gap-5  w-full min-w-[40rem] max-h-mc overflow-y-auto">
            <PairInfo tit="UID" value={ps.uuid || "-"} />
            <PairInfo
              tit="版本"
              value={
                <div className="flex justify-between items-center gap-2.5 px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200">
                  {ps.version || "-"}
                  <Dropdown
                    items={versions}
                    className="!px-2.5 !py-1 bg-white rounded border border-neutral-200 text-stone-500 text-base font-normal leading-none"
                    onClick={(i) => {
                      if (!versions) return;
                      const viewPs = versions[i];
                      setOldPs(viewPs);
                    }}>
                    查看历史版本
                  </Dropdown>
                </div>
              }
            />
            <PairInfo
              tit="描述"
              value={<EditorText maxLength={100} value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} />}
            />
            <PairInfo tit="状态" value={<PsStatus status={ps.state} />} />
            <PairInfo tit="变更人" value={ps.updateUser?.name || "-"} />
            <PairInfo
              tit="产品系统LCA文件"
              value={
                <LcaActionInfo
                  modelId={ps.model?.id}
                  modelStatus={ps.model?.state}
                  file={file as any}
                  onFileChange={onFileChange}
                />
              }
            />
            <PairInfo tit="实景参数列表" value={<ActionBtn action="查看" onClick={() => toggleRealModal(true)} />} />
            <OrganizationInfo />
          </div>
          <div className="flex flex-col gap-2.5 mt-5">
            <Btn busy={busy} disabled={disableSubmit} onClick={onSubmit}>
              提交更新
            </Btn>
            <div className="text-sm font-normal text-black">
              * 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。
            </div>
          </div>
        </>
      )}
      {realModal && <RealData data={ps?.model?.paramDetail} onClose={() => toggleRealModal(false)} />}
      {oldPs && <ViewProductSystem onClose={() => setOldPs(undefined)} ps={oldPs} />}
    </Modal>
  );
}
