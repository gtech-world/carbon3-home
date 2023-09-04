import { Modal, ModalProps } from "@components/common/modal";
import { ChangeEvent, Fragment, useCallback, useMemo, useRef, useState } from "react";
import { ActionBtn, EditorText, LcaActionInfo, OrganizationInfo, PairInfo, PsStatus } from "./EditorProductSystem";
import { Btn } from "@components/common/button";
import { useOn } from "@lib/hooks/useOn";
import { upsertLcaProduct, uploadLcaModel, getLcaProductDetailList } from "@lib/http";
import { Progress } from "@components/common/progress";
import ViewBomInfoModal from "./ViewBomInfoModal";
import { RealData } from "./RealData";

export function NewProductSystem(p: ModalProps & { onSuccess?: () => void }) {
  const { onSuccess, onClose: _onClose, ...props } = p;
  const [desc, setDesc] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | undefined | null>(null);
  const [type, setType] = useState("upload");
  const disabledOk = !file;
  const modelIdRef = useRef<number>();
  const [resultList, setResultList] = useState<{ modelBomInfo: ""; modelName: ""; paramDetail: "" }>();
  const [viewBomInfo, setViewBomInfo] = useState(false);
  const [viewRealDataList, setViewRealDataList] = useState(false);

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);
  const acRef = useRef<AbortController>();
  const onClose = useCallback(() => {
    acRef.current?.abort();
    _onClose && _onClose();
  }, [_onClose]);

  const uploadResultDetail = (id: number) => {
    getLcaProductDetailList(id)
      .then((res) => {
        const { state, modelBomInfo } = res;
        if (state === 0 || !modelBomInfo) return;
        setResultList(res);
        setType("add");
      })
      .catch((e) => console.log(e))
      .finally();
  };

  const onOk = useOn(() => {
    if (disabledOk) return;
    const form = new FormData();
    form.append("file", file);
    acRef.current = new AbortController();
    if (type === "upload") {
      setIsProgress(true);
      uploadLcaModel(form, {
        signal: acRef.current.signal,
        onUploadProgress: (e) => {
          setProgress(Math.min(Math.round((e.rate || 0) * 100), 100));
        },
      })
        .then((modelId) => {
          modelIdRef.current = modelId;
          uploadResultDetail(modelId);
        })
        .catch(() => {})
        .finally(() => {
          setIsProgress(false);
          setProgress(0);
        });
    } else {
      upsertLcaProduct({ name: resultList?.modelName, description: desc, modelId: modelIdRef.current })
        .then(() => {
          onSuccess && onSuccess();
          onClose();
        })
        .catch((e) => {
          console.log("err", e);
        });
    }
  });

  return (
    <Fragment>
      <Modal {...props} title={"新建产品系统"} onClose={onClose}>
        <div className="flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden">
          <div className="flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto">
            {isProgress ? (
              <Progress value={progress} className="my-5 overflow-hidden rounded-lg" />
            ) : type === "upload" ? (
              <PairInfo
                tit="产品系统LCA文件"
                value={
                  <LcaActionInfo
                    isNew={true}
                    disableSelectFile={isProgress}
                    file={file as any}
                    onFileChange={onFileChange}
                  />
                }
              />
            ) : (
              <Fragment>
                <PairInfo tit="产品系统名称" value={resultList?.modelName} />
                <PairInfo tit="BOM信息" value={<ActionBtn action="查看" onClick={() => setViewBomInfo(true)} />} />
                <PairInfo
                  tit="实景参数列表"
                  value={<ActionBtn action="查看" onClick={() => setViewRealDataList(true)} />}
                />
                <PairInfo
                  tit="产品系统LCA文件"
                  value={<LcaActionInfo file={file as any} onFileChange={onFileChange} />}
                />
                <PairInfo
                  tit="描述"
                  value={<EditorText maxLength={100} value={desc} onChange={(e) => setDesc(e.target.value)} />}
                />
              </Fragment>
            )}
          </div>
          <div className="flex flex-shrink-0 w-full gap-5 px-5">
            {!isProgress && (
              <Fragment>
                <Btn defStyle="btn-primary-1" className="flex-1" onClick={onClose as any}>
                  取消
                </Btn>
                <Btn className="flex-1" onClick={onOk} disabled={disabledOk}>
                  {type === "upload" ? "上传" : "确定"}
                </Btn>
              </Fragment>
            )}
          </div>
        </div>
      </Modal>
      {viewRealDataList && <RealData data={resultList?.paramDetail} onClose={() => setViewRealDataList(false)} />}
      {viewBomInfo && <ViewBomInfoModal {...resultList} onClose={() => setViewBomInfo(false)} />}
    </Fragment>
  );
}
