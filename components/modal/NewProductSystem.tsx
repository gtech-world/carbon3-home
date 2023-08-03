import { Modal, ModalProps } from "@components/common/modal";
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { EditorText, LcaActionInfo, OrganizationInfo, PairInfo, PsStatus } from "./EditorProductSystem";
import { Btn } from "@components/common/button";
import { useOn } from "@lib/hooks/useOn";
import { upsertLcaProduct, uploadLcaModel } from "@lib/http";
import { Progress } from "@components/common/progress";

export function NewProductSystem(p: ModalProps & { onSuccess?: () => void }) {
  const { onSuccess, onClose: _onClose, ...props } = p;
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | undefined | null>(null);
  const disabledOk = !file || !name || !desc;
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);
  const acRef = useRef<AbortController>();
  const onClose = useCallback(() => {
    acRef.current?.abort();
    _onClose && _onClose();
  }, [_onClose]);
  const onOk = useOn(() => {
    if (disabledOk) return;
    setIsProgress(true);
    const form = new FormData();
    form.append("name", file.name);
    form.append("file", file);
    acRef.current = new AbortController();
    uploadLcaModel(form, {
      signal: acRef.current.signal,
      onUploadProgress: (e) => {
        setProgress(Math.min(Math.round((e.rate || 0) * 100), 100));
      },
    })
      .then((modelId) => upsertLcaProduct({ name, description: desc, modelId }))
      .then(() => {
        onSuccess && onSuccess();
        onClose();
      })
      .catch(() => {})
      .finally(() => {
        setIsProgress(false);
        setProgress(0);
      });
  });
  return (
    <Modal {...props} title={"新建产品系统"} outClose={false} onClose={onClose}>
      <div className="flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]">
        <div className="flex flex-col gap-5 w-full flex-1 h-max overflow-y-auto">
          <PairInfo tit="产品系统名称" value={<EditorText value={name} onChange={(e) => setName(e.target.value)} />} />
          <PairInfo tit="描述" value={<EditorText value={desc} onChange={(e) => setDesc(e.target.value)} />} />
          <PairInfo tit="状态" value={<PsStatus />} />
          <PairInfo
            tit="产品系统LCA文件"
            value={<LcaActionInfo isNew={true} file={file as any} onFileChange={onFileChange} />}
          />
          <OrganizationInfo />
        </div>
        <div className="flex gap-5 w-full">
          {isProgress ? (
            <Progress value={progress} className="rounded-lg my-3 overflow-hidden" />
          ) : (
            <>
              <Btn defStyle="btn-primary-1" className="flex-1" onClick={onClose as any}>
                取消
              </Btn>
              <Btn className="flex-1" onClick={onOk} disabled={disabledOk}>
                确定
              </Btn>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
