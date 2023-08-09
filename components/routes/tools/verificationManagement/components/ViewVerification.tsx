import { Modal } from "@components/common/modal";
import { FC, Fragment, useState } from "react";
import JSZip from "jszip";
import { Loading } from "@components/common/loading";
import { useOnError } from "@components/common/context";

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

      fileList.forEach((file) => {
        folderName = file.fileName.split("/")[0];
        zip.file(file.fileName, file.downloadUrl);
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
        <div className="px-5">
          {fileList.map((e, i) => {
            const parts = e.fileName.split("/");
            return (
              <div key={`file_${i}`} id="view" className="w-[640px] h-[34px] flex items-center ">
                <span className="ml-[10px] leading-5 text-[16px] font-normal">{parts[parts.length - 1]}</span>
              </div>
            );
          })}
          <button
            disabled={loading}
            className="bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5"
            onClick={handleDownloadClick}>
            {loading ? <Loading /> : "下载"}
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ViewVerification;
