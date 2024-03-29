import { Modal } from "@components/common/modal";
import { FC, Fragment, useState } from "react";
import JSZip from "jszip";
import { useOnError } from "@components/common/context";
import { Btn } from "@components/common/button";

const ViewVerification: FC<VerificationManagementController.ViewVerificationManagementModal> = ({
  closeModal,
  fileList,
}) => {
  const [loading, setLoading] = useState(false);
  const onError = useOnError();

  const handleDownloadClick = async () => {
    setLoading(true);
    try {
      const zip = new JSZip();
      let folderName = "";

      const promises = fileList.map(async (files) => {
        folderName = files?.fileName?.split("/")[0];
        const blob = await (await fetch(files.downloadUrl)).blob();
        return { fileName: files.fileName, blob };
      });

      const results = await Promise.all(promises);

      results.forEach((result) => {
        zip.file(result.fileName, result.blob);
      });

      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `${folderName}.zip`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (e) {
      onError("文件下载出错！");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Modal onClose={closeModal} title="查看文件夹">
        <div className="px-5 overflow-y-auto  max-h-[260px]">
          {fileList.map((e, i) => {
            const parts = e.fileName.split("/");
            return (
              <div key={`file_${i}`} id="view" className="w-[640px] h-[34px] flex items-center ">
                <span className="ml-[10px] leading-5 text-[16px] font-normal">{parts[parts.length - 1]}</span>
              </div>
            );
          })}
        </div>
        <Btn
          busy={loading}
          disabled={loading}
          defStyle="btn-primary"
          className="bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5"
          onClick={handleDownloadClick}>
          下载
        </Btn>
      </Modal>
    </Fragment>
  );
};

export default ViewVerification;
