import { Modal, ModalProps } from "@components/common/modal";
import { ChangeEvent, Fragment, useCallback, useRef, useState } from "react";
import { ActionBtn, EditorText, LcaActionInfo, PairInfo } from "./EditorProductSystem";
import { Btn } from "@components/common/button";
import { useOn } from "@lib/hooks/useOn";
import { upsertLcaProduct, uploadLcaModel, getLcaProductDetailList } from "@lib/http";
import { Progress } from "@components/common/progress";
import ViewBomInfoModal from "./ViewBomInfoModal";
import { RealData } from "./RealData";
import { sleep } from "@lib/utils";
import { useSafe } from "@lib/hooks/useSafe";

export function NewProductSystem(p: ModalProps & { onSuccess?: () => void }) {
  const { onSuccess, onClose: _onClose, ...props } = p;
  const [desc, setDesc] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | undefined | null>(null);
  const [type, setType] = useState("upload");
  const disabledOk = !file;

  const [resultList, setResultList] = useState<{
    modelBomInfo: string;
    modelName: string;
    paramDetail: string;
    id: number;
  }>({ id: 0, modelBomInfo: "", paramDetail: "", modelName: "" });
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

  const resetState = () => {
    setIsProgress(false);
    setProgress(0);
  };

  const safe = useSafe();
  const loopGetDetail = async (modelId: number) => {
    while (true) {
      await sleep(5000);
      if (!safe.current) return;
      const res = await getLcaProductDetailList(modelId).catch(() => undefined);
      setProgress((p) => Math.min(p + 10, 100));
      if (res && res.state === 1 && res.modelBomInfo) {
        return res;
      }
    }
  };

  const upload = () => {
    const form = new FormData();
    form.append("file", file as any);
    acRef.current = new AbortController();
    uploadLcaModel(form, {
      signal: acRef.current.signal,
      onUploadProgress: (e) => {
        setProgress(Math.min(Math.round((e.progress || 0) * 100), 60));
      },
    })
      .then(loopGetDetail)
      .then((res) => {
        if (res) {
          setResultList(res);
          setType("add");
          resetState();
        }
      })
      .catch(() => {
        resetState();
      });
  };

  const onOk = useOn(() => {
    if (disabledOk) return;
    if (type === "upload") {
      if (isProgress) return;
      setIsProgress(true);
      upload();
    } else {
      upsertLcaProduct({ name: resultList.modelName, description: desc, modelId: resultList.id })
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
      <Modal
        {...props}
        title={"新建产品系统"}
        onClose={() => {
          onClose();
          resetState();
        }}>
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
                    btnText="选择模型"
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
                  value={
                    <LcaActionInfo
                      modelStatus={!isProgress ? 1 : 0}
                      modelId={resultList.id}
                      openNewTab={true}
                      onFileChange={onFileChange}
                    />
                  }
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
                <Btn
                  defStyle="btn-primary-1"
                  className="flex-1"
                  onClick={() => {
                    onClose();
                    resetState();
                  }}>
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
      {viewRealDataList && (
        <RealData
          header={["参数名", "过程名称", "参考值"]}
          data={resultList?.paramDetail}
          onClose={() => setViewRealDataList(false)}
        />
      )}
      {viewBomInfo && <ViewBomInfoModal {...resultList} onClose={() => setViewBomInfo(false)} />}
    </Fragment>
  );
}
