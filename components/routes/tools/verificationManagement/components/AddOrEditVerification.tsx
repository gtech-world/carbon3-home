import { Btn } from "@components/common/button";
import { useStore } from "@components/common/context";
import { Loading } from "@components/common/loading";
import { Modal } from "@components/common/modal";
import { Select2, useSelectState } from "@components/common/select";
import { useInventoryLiteAll, useVerifiers, useVerifyRecord } from "@lib/hooks/useDatas";
import { useUpFiles } from "@lib/hooks/useUpFiles";
import { createVerifyRecord, updateVerifyRecord, verifyVerifyRecord } from "@lib/http";
import { shortStr } from "@lib/utils";
import classNames from "classnames";
import _ from "lodash";
import { FC, Fragment, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useSetState } from "react-use";

const ItemDiv = (p: { children: ReactNode; title: string }) => {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <span className="font-normal leading-6 text-[16px]">{p.title}：</span>
      {p.children}
    </div>
  );
};

const TextDiv = (p: { value?: string }) => {
  return <div className="font-normal leading-[21.79px] text-[16px] text-gray-9">{p.value}</div>;
};

const AddOrEditVerification: FC<VerificationManagementController.VerificationManagementModal> = ({
  closeModal,
  recordId,
  type = "new",
}) => {
  const FileRef = useRef<HTMLInputElement>(null);
  const { userData } = useStore();
  const { isLoading: loadingVerifyRecode, data: verifyRecord } = useVerifyRecord(recordId);
  const { isLoading: loadingInvetoryLiteAll, data: inventoryLiteAll } = useInventoryLiteAll(
    type === "new" || type === "editor",
  );
  const { isLoading: loadingVerifiers, data: verifiers } = useVerifiers(type === "new" || type === "editor");
  const isLoading = loadingVerifyRecode || loadingInvetoryLiteAll || loadingVerifiers;
  const invertoryArgs = useMemo<[any[], number]>(
    () => [
      (inventoryLiteAll || []).map((item) => ({ ...item, text: item.loadName })),
      _.findIndex(inventoryLiteAll, (item) => item.loadNumber === verifyRecord?.loadNumber),
    ],
    [inventoryLiteAll, verifyRecord],
  );
  const invertorySS = useSelectState(...invertoryArgs);
  const verifiersArgs = useMemo<[any[], number]>(
    () => [
      (verifiers || []).map((item) => ({ ...item, text: item.name })),
      _.findIndex(verifiers, (item) => item.id === verifyRecord?.verifyUser?.id),
    ],
    [verifiers, verifyRecord],
  );
  const verifiersSS = useSelectState(...verifiersArgs);
  const [state, setState] = useSetState<{
    name?: string;
    desc?: string;
    loadNumber?: string;
    verifierId?: number;
    files?: FileList;
    verifyState: boolean;
  }>({ verifyState: true });
  const [upFiles, upAbort] = useUpFiles();
  useEffect(() => upAbort, []);
  const disableFiles =
    !state.files ||
    state.files.length === 0 ||
    state.files.length > 20 ||
    _.findIndex(
      state.files as unknown as File[],
      (item) => item.size >= 1024 * 1024 * 1024 * 2 || item.name.length >= 128,
    ) >= 0;
  const disableCreate =
    !inventoryLiteAll ||
    !verifiers ||
    !state.name ||
    invertorySS.current < 0 ||
    verifiersSS.current < 0 ||
    disableFiles;
  const [busy, setBusy] = useState(false);
  const onCreate = () => {
    if (disableCreate || busy) return;
    setBusy(true);
    upFiles(state.files as any).then((ids) =>
      createVerifyRecord({
        name: state.name as string,
        loadNumber: inventoryLiteAll[invertorySS.current].loadNumber,
        description: state.desc || "",
        fileList: ids,
        verifyUserId: verifiers[verifiersSS.current].id,
      })
        .then(() => closeModal(true))
        .catch(console.error)
        .finally(() => {
          setBusy(false);
        }),
    );
  };
  const disableUpdate =
    !verifyRecord ||
    !inventoryLiteAll ||
    !verifiers ||
    ((state.name || verifyRecord.name) === verifyRecord.name &&
      (state.desc || verifyRecord.description) === verifyRecord.description &&
      inventoryLiteAll[invertorySS.current]?.loadNumber === verifyRecord.loadNumber &&
      verifiers[verifiersSS.current]?.id === verifyRecord.verifyUserId &&
      disableFiles);
  const doUpdate = () => {
    if (disableUpdate || busy) return;
    let task: Promise<any>;
    setBusy(true);
    if (state.files) {
      task = upFiles(state.files).then((ids) =>
        updateVerifyRecord(verifyRecord.id, {
          name: state.name || verifyRecord.name,
          loadNumber: inventoryLiteAll[invertorySS.current].loadNumber,
          description: state.desc || verifyRecord.description,
          fileList: ids,
          verifyUserId: verifiers[verifiersSS.current].id,
        }),
      );
    } else {
      task = updateVerifyRecord(verifyRecord.id, {
        name: state.name,
        loadNumber: inventoryLiteAll[invertorySS.current].loadNumber,
        description: state.desc,
        verifyUserId: verifiers[verifiersSS.current].id,
      });
    }
    task
      .then(() => closeModal(true))
      .catch(console.error)
      .finally(() => {
        setBusy(false);
      });
  };
  const disableVerify = !verifyRecord || disableFiles;
  const doVerify = () => {
    if (disableVerify || !state.files || busy) return;
    setBusy(true);
    upFiles(state.files)
      .then((ids) => verifyVerifyRecord(verifyRecord.id, ids, true))
      .then(() => closeModal(true))
      .catch(console.error)
      .finally(() => {
        setBusy(false);
      });
  };
  const otherAtt = { directory: "", webkitdirectory: "" };
  const inputClassName = "w-full shrink-0 px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg";
  const isVerify = type === "verify";
  const folderName = useMemo(() => {
    if (disableFiles || !state.files) return "验证文件";
    const name = state.files.item(0)?.webkitRelativePath.split("/")[0] || "验证文件";
    return shortStr(name, 10, 10);
  }, [state.files, disableFiles]);

  const renderInputVerifyFiles = () => {
    return (
      <ItemDiv title={isVerify ? "验证文档" : "附件"}>
        <div className="flex flex-row items-center gap-2">
          <input
            {...otherAtt}
            ref={FileRef}
            type="file"
            hidden
            onChange={(e) => setState({ files: e.target.files as any })}
          />
          <img src="/vector_icon.svg" />
          <TextDiv value={folderName} />
          <div
            onClick={(e) => !busy && FileRef.current?.click()}
            className={classNames(
              "flex  rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",
              busy ? "cursor-not-allowed" : "cursor-pointer",
            )}>
            选择文件夹
          </div>
        </div>
      </ItemDiv>
    );
  };
  return (
    <Fragment>
      <Modal
        className="rounded-lg"
        containerClassName={"mx-5 max-w-[640px]"}
        titleClassName={"text-[20px] leading-5 font-bold"}
        title={type === "new" ? "新建验证记录" : "编辑验证记录"}
        onClose={closeModal}>
        <div className="flex flex-col py-[1px] gap-5 px-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto">
          {isLoading && <Loading />}
          {!isLoading && (
            <>
              {isVerify ? (
                <>
                  <ItemDiv title="验证记录">
                    <TextDiv value={verifyRecord?.name} />
                  </ItemDiv>
                  <ItemDiv title="验证记录ID">
                    <TextDiv value={verifyRecord?.id} />
                  </ItemDiv>
                  <ItemDiv title="发起人">
                    <TextDiv value={verifyRecord?.createUser?.name} />
                  </ItemDiv>
                  <ItemDiv title="组织机构">
                    <TextDiv value={verifyRecord?.organization?.name} />
                  </ItemDiv>
                  <ItemDiv title="描述">
                    <TextDiv value={verifyRecord?.description} />
                  </ItemDiv>
                  <ItemDiv title="碳足迹批次">
                    <TextDiv value={verifyRecord?.inventory?.loadName} />
                  </ItemDiv>
                  <ItemDiv title="碳足迹批次ID">
                    <TextDiv value={verifyRecord?.loadNumber} />
                  </ItemDiv>
                  <ItemDiv title="验证人">
                    <TextDiv value={verifyRecord?.verifyUser?.name} />
                  </ItemDiv>
                  {renderInputVerifyFiles()}
                  {/* <ItemDiv title="验证状态">
                    <Select2
                      current={state.verifyState ? 0 : 1}
                      items={[{ text: "已验证" }, { text: "未验证" }]}
                      onChange={(i) => setState({ verifyState: i === 0 })}
                    />
                  </ItemDiv> */}
                </>
              ) : (
                <>
                  <ItemDiv title="验证记录">
                    <input
                      value={state.name || verifyRecord?.name}
                      onChange={(e) => setState({ name: e.target.value })}
                      maxLength={30}
                      className={inputClassName}
                    />
                  </ItemDiv>
                  <ItemDiv title="碳足迹批次">
                    <Select2 {...invertorySS} />
                  </ItemDiv>
                  <ItemDiv title="描述">
                    <input
                      value={state.desc || verifyRecord?.description}
                      onChange={(e) => setState({ desc: e.target.value })}
                      maxLength={100}
                      className={inputClassName}
                    />
                  </ItemDiv>
                  <ItemDiv title="选择验证人">
                    <Select2 {...verifiersSS} />
                  </ItemDiv>
                  <ItemDiv title="发起人">
                    <TextDiv value={userData?.name} />
                  </ItemDiv>
                  <ItemDiv title="组织机构">
                    <TextDiv value={userData?.organization?.name} />
                  </ItemDiv>
                  {renderInputVerifyFiles()}
                </>
              )}
            </>
          )}
        </div>
        {!isLoading && (
          <div className={`flex flex-row justify-between gap-5 mt-5 w-full px-5`}>
            {type === "new" && (
              <>
                <Btn defStyle="btn-primary-1" className="flex-1" onClick={() => closeModal(false)}>
                  取消
                </Btn>
                <Btn busy={busy} disabled={disableCreate} defStyle="btn-primary" className="flex-1" onClick={onCreate}>
                  确定
                </Btn>
              </>
            )}
            {type === "editor" && (
              <Btn busy={busy} disabled={disableUpdate} className="flex-1" onClick={doUpdate}>
                提交更新
              </Btn>
            )}
            {type === "verify" && (
              <Btn busy={busy} disabled={disableVerify} className="flex-1" onClick={doVerify}>
                提交验证
              </Btn>
            )}
          </div>
        )}
      </Modal>
    </Fragment>
  );
};

export default AddOrEditVerification;
