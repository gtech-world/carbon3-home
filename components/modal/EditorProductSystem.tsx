import { Btn } from "@components/common/button";
import { useStore } from "@components/common/context";
import { Dropdown } from "@components/common/dropdown";
import { Loading } from "@components/common/loading";
import { Modal, ModalProps } from "@components/common/modal";
import { ProduceSystemController } from "@lib/@types/produceSystem";
import { Organization } from "@lib/@types/type";
import { useProductSystem } from "@lib/hooks/useDatas";
import { useOn } from "@lib/hooks/useOn";
import { useIsVerifier } from "@lib/hooks/useUser";
import { uploadLcaModel, upsertLcaProduct } from "@lib/http";
import { shortStr } from "@lib/utils";
import classNames from "classnames";
import _ from "lodash";
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEvent,
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
  disableSelectFile?: boolean;
  hiddenUpdate?: boolean;
  file?: File;
  onFileChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const { psId, disableSelectFile = false, hiddenUpdate, modelId, isNew, isRead, modelStatus, file, onFileChange } = p;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const renderLook = () => {
    if (modelStatus !== 1) return <div className="text-base font-normal leading-none text-amber-500">等待解析</div>;
    return <ActionBtn to={`/model?id=${modelId}`} action="在线查看" />;
  };
  const onClickUp = (e: MouseEvent<HTMLDivElement>) => {
    !disableSelectFile && inputFileRef.current?.click();
  };
  return (
    <div className="text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5">
      <input ref={inputFileRef} type="file" hidden accept=".zip" onChange={onFileChange} />
      {!isRead && shortStr(file?.name, 10, 10)}
      {isRead ? (
        renderLook()
      ) : isNew ? (
        <>
          <ActionBtn action="上传模型" onClick={onClickUp} />
        </>
      ) : (
        <>
          {!file && renderLook()}
          {modelStatus === 1 && !hiddenUpdate && <ActionBtn action="更新模型" onClick={onClickUp} />}
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
      className="w-full px-5 py-[15px] bg-gray-28 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none"
      {...props}
    />
  );
}

export function OrganizationInfo(p: { organization?: Organization }) {
  const { userData } = useStore();
  const org = p.organization || userData?.organization;
  return (
    <>
      <PairInfo tit="组织名称" value={org?.name || "-"} />
      <PairInfo tit="组织编号" value={org?.serialNumber || "-"} />
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
  const [bomData, setBomData] = useState("");
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);

  const [realModal, toggleRealModal] = useToggle(false);
  const [oldPs, setOldPs] = useState<ProduceSystemController.ListRecords>();
  const versions = useMemo(() => {
    return _.orderBy(
      (ps?.historyList || []).map((item) => ({ ...item, text: `版本${item.version}` })),
      (item) => _.toNumber(item.version),
      "desc",
    );
  }, [ps]);
  const isVerifier = useIsVerifier();
  return (
    <Modal {...props}>
      {isLoading && !ps && <Loading className="min-h-[100px]" />}
      {ps && (
        <>
          <div className="flex flex-col gap-5  w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto">
            <PairInfo tit="产品系统ID" value={ps.uuid || "-"} />
            <PairInfo tit="描述" value={inputDesc} />
            <PairInfo tit="操作人" value={inputDesc} />
            <PairInfo tit="BOM信息" value={<ActionBtn action="查看" onClick={() => setBomData("1")} />} />
            <PairInfo tit="实景参数列表" value={<ActionBtn action="查看" onClick={() => toggleRealModal(true)} />} />

            <PairInfo
              tit="产品系统LCA文件"
              value={
                <LcaActionInfo
                  modelId={ps.model?.id}
                  disableSelectFile={busy}
                  modelStatus={ps.model?.state}
                  hiddenUpdate={isVerifier}
                  file={file as any}
                  onFileChange={onFileChange}
                />
              }
            />
            <OrganizationInfo organization={ps?.org} />
          </div>
        </>
      )}
      {realModal && <RealData data={ps?.model?.paramDetail} onClose={() => toggleRealModal(false)} />}
      {oldPs && <ViewProductSystem onClose={() => setOldPs(undefined)} ps={oldPs} />}
    </Modal>
  );
}
