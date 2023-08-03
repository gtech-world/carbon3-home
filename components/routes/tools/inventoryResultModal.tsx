import { Modal } from "@components/common/modal";
import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import InventoryAddRealDataModal from "./inventoryAddRealDataModal";
import { getProductSystemAllList, uploadResult } from "@lib/http";

const InventoryResultModal: FC<InventoryController.InventoryResultModalProps> = ({ openResultModal, getList }) => {
  const [openAddInfoModal, setOpenAddInfoModal] = useState<boolean>(false);
  const [productList, setProduceList] = useState<InventoryController.InventoryProductSystemList[]>([]);
  const [realData, setRealData] = useState<InventoryController.uploadResult>({});

  const [formData, setFormData] = useState({
    loadName: "",
    productId: 0,
  });

  console.log("realData", realData);

  const getProductSystemList = () => {
    getProductSystemAllList()
      .then((res) => {
        (res || []).unshift({ name: "", id: "" });
        setProduceList(res || []);
      })
      .catch((e) => {})
      .finally();
  };

  const onCalculate = () => {
    const { loadName, productId } = formData;
    uploadResult({ ...realData, loadName, productId })
      .then((res) => {
        typeof openResultModal === "function" && openResultModal();
        typeof getList === "function" && getList();
      })
      .catch((e) => {})
      .finally(() => {});
  };

  console.log("productList", productList);

  useEffect(() => {
    getProductSystemList();
  }, []);

  const onAddInfo = () => {
    if (!formData.productId) {
      return;
    }
    setOpenAddInfoModal(true);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <Modal
        className="rounded-lg"
        containerClassName={"mx-5 max-w-[640px]"}
        titleClassName={"text-[20px] leading-5 font-bold"}
        title={"新建碳足迹结果"}
        onClose={openResultModal}>
        <div className="mx-5 max-w-[640px] ">
          <span className="font-normal leading-6 ">碳足迹批次：</span>
          <input
            value={formData.loadName}
            onChange={handleChange}
            id="loadName"
            name="loadName"
            className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"
          />
          <span className="font-normal leading-6 ">产品系统：</span>
          <select
            id="productId"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg">
            {productList.map((e, i) => (
              <option key={`list_${i}`} selected={!!e.id} hidden={!e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          <span className="font-normal leading-6 ">实景数据填报：</span>
          <div
            onClick={() => onAddInfo()}
            className=" cursor-pointer rounded-[4px] mt-[10px] bg-[#F1F1F1] max-w-[84px] max-h-[24px]  text-center">
            前往填写
          </div>
          <div className="flex flex-row justify-between gap-5 mt-5">
            <div
              onClick={openResultModal}
              className=" cursor-pointer bg-[#29953A1A] w-[310px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center">
              取消
            </div>
            <button
              onClick={() => onCalculate()}
              className="  cursor-pointer bg-[#29953A] w-[310px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center">
              计算碳结果
            </button>
          </div>
        </div>
      </Modal>
      {openAddInfoModal && (
        <InventoryAddRealDataModal
          productId={Number(formData.productId)}
          realData={setRealData}
          onOpenModal={() => setOpenAddInfoModal(false)}
        />
      )}
    </Fragment>
  );
};

export default InventoryResultModal;
