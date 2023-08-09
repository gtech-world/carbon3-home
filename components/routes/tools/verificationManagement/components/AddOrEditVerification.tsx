import { Modal } from "@components/common/modal";
import classNames from "classnames";
import { FC, Fragment, useRef } from "react";

const AddOrEditVerification: FC<VerificationManagementController.VerificationManagementModal> = ({
  closeModal,
  title,
  isSingle = false,
}) => {
  const FileRef = useRef<HTMLInputElement>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    console.log("FileRefFileRef", FileRef.current?.files, event.target.files?.item(0));
  };

  const otherAtt = { directory: "", webkitdirectory: "" };
  return (
    <Fragment>
      <Modal
        className="rounded-lg"
        containerClassName={"mx-5 max-w-[640px]"}
        titleClassName={"text-[20px] leading-5 font-bold"}
        title={title}
        onClose={closeModal}>
        <div className="mx-5 max-w-[640px] ">
          <span className="font-normal leading-6 text-[16px]">验证记录：</span>
          <input
            // value={formData.loadName}
            // onChange={handleChange}
            id="loadName"
            name="loadName"
            maxLength={30}
            className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"
          />
          <span className="font-normal leading-6 text-[16px]">产品系统：</span>
          <select
            id="productId"
            name="productId"
            // value={formData.productId}
            // onChange={handleChange}
            className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"></select>
          <span className="font-normal leading-6 text-[16px]">描述：</span>
          <input
            // value={formData.loadName}
            // onChange={handleChange}
            id="loadName"
            name="loadName"
            maxLength={30}
            className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"
          />
          <div className="font-normal leading-6 text-[16px] mb-[10px]">发起人：</div>
          <div className="font-normal leading-[21.79px] text-[16px] text-[#666666] mb-[20px]">Cherry</div>
          <div className="font-normal leading-6 text-[16px] mb-[10px]">组织机构：</div>
          <div className="font-normal leading-[21.79px] text-[16px] text-[#666666] mb-[20px]">蔚来江淮</div>
          <div className="font-normal leading-6 text-[16px] mb-[10px]">附件：</div>
          <div className="flex flex-row mb-[20px]">
            <img src="/vector_icon.svg" />
            <div className=" ml-2 mr-[10px] font-normal  leading-6 text-[16px] text-[#666666]">验证文件</div>
            <input {...otherAtt} ref={FileRef} type="file" hidden onChange={onFileChange} />
            <div
              onClick={(e) => FileRef.current?.click()}
              className=" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ">
              选择文件夹
            </div>
          </div>
          <div className="font-normal leading-6 text-[16px] mb-[10px]">选择验证人：</div>
          <select
            id="productId"
            name="productId"
            // value={formData.productId}
            // onChange={handleChange}
            className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg">
            {/* {productList.map((e, i) => (
              <option key={`list_${i}`} selected={!!e.id} hidden={!e.id} value={e.id}>
                {e.name}
              </option>
            ))} */}
          </select>

          <div className={`flex flex-row justify-between gap-5 mt-5`}>
            {!isSingle && (
              <div
                onClick={closeModal}
                className=" cursor-pointer bg-[#29953A1A] w-[310px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center">
                取消
              </div>
            )}
            <button
              id="myButton"
              // onClick={() => onCalculate()}
              // disabled={!formData.productId || !formData.loadName}
              className={classNames(
                "cursor-pointer bg-[#29953A] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center",
                {
                  "w-[310px] ": !isSingle,
                  "w-full ": isSingle,
                },
              )}>
              {!isSingle ? "确定" : "提交更新"}
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default AddOrEditVerification;
