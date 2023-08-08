import { Modal } from "@components/common/modal";
import { FC, Fragment, useEffect, useState } from "react";
import InventoryAddRealDataModal from "./inventoryAddRealDataModal";
import { getAddRealDataList, getProductSystemAllList, uploadResult } from "@lib/http";
import { getCurrentDate } from "utils";
import classNames from "classnames";
import { Btn } from "@components/common/button";

type formDataType = { [key: string]: string };
type realDataType = Pick<InventoryController.uploadResult, "lcaParamList">;
const filed: formDataType = {
  loadName: "碳足迹批次",
  productId: "产品系统",
};
const init = {
  loadName: "",
  productId: "",
};
const InventoryResultModal: FC<InventoryController.InventoryResultModalProps> = ({ openResultModal, getList }) => {
  const [openAddInfoModal, setOpenAddInfoModal] = useState<boolean>(false);
  const [productList, setProduceList] = useState<InventoryController.InventoryProductSystemList[]>([]);
  const [realData, setRealData] = useState<Partial<realDataType>>({ lcaParamList: [] });
  const [tableData, setTableData] = useState<InventoryController.InventoryRealDataList[]>([]);
  const [formErrors, setFormErrors] = useState<formDataType>(init);
  const [formData, setFormData] = useState<formDataType>(init);
  const [isClickSubmit, setIsClickSubmit] = useState<boolean>(false);

  const getProductSystemList = () => {
    getProductSystemAllList()
      .then((res) => {
        (res || []).unshift({ name: "", id: "" });
        setProduceList(res || []);
      })
      .catch((e) => {})
      .finally();
  };

  useEffect(() => {
    if (isClickSubmit) {
      const errors: any = {};
      for (const key in formData) {
        if (!formData[key].trim()) {
          errors[key] = `${filed[key]}不能为空`;
        }
      }
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});
    }
  }, [isClickSubmit, formData]);

  const onCalculate = () => {
    setIsClickSubmit(true);
    const { loadName, productId } = formData;
    if (!loadName || !productId) return;

    const lcaParamList = tableData.map((e) => {
      return {
        processId: e.context["@id"],
        paramValue: e.value.toString(),
        paramName: e.name,
        dateTime: getCurrentDate(),
      };
    });
    let data = realData.lcaParamList?.length ? realData : { lcaParamList: lcaParamList };
    const result = { ...data, loadName, productId };
    uploadResult(result)
      .then((res) => {
        typeof openResultModal === "function" && openResultModal();
        typeof getList === "function" && getList();
      })
      .catch((e) => {})
      .finally(() => {});
  };

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

  const getRealDataList = async () => {
    getAddRealDataList(formData.productId)
      .then((res) => {
        const newData = JSON.parse(res.paramDetail);
        setTableData(JSON.stringify(newData) === "{}" ? [] : newData[0]?.parameters);
      })
      .catch((e) => {})
      .finally();
  };

  useEffect(() => {
    if (formData.productId) {
      getRealDataList();
    }
  }, [formData.productId]);

  return (
    <Fragment>
      <Modal
        className="rounded-lg"
        containerClassName={"mx-5 max-w-[640px]"}
        titleClassName={"text-[20px] leading-5 font-bold"}
        title={"新建碳足迹结果"}
        onClose={openResultModal}>
        <div className="mx-5 w-[640px] ">
          <span className="font-normal leading-6 ">碳足迹批次：</span>
          <input
            value={formData.loadName}
            onChange={handleChange}
            id="loadName"
            name="loadName"
            maxLength={30}
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
            className=" flex cursor-pointer rounded-[4px] leading-4 text-[16px] mt-[10px] bg-[#F1F1F1] max-w-[84px] h-[24px]  text-center items-center justify-center ">
            前往填写
          </div>

          <div className="flex flex-row justify-between gap-5 mt-5">
            <Btn
              onClick={openResultModal}
              defStyle="btn-primary-1"
              className="flex-1  font-normal  h-[50px] border-2 text-[18px]">
              取消
            </Btn>
            <Btn
              className="flex-1 h-[50px]  font-normal  text-[18px]"
              onClick={onCalculate}
              disabled={!formData.productId || !formData.loadName}>
              计算碳结果
            </Btn>
          </div>
        </div>
      </Modal>
      {openAddInfoModal && (
        <InventoryAddRealDataModal
          realData={setRealData}
          tableData={tableData}
          realArr={realData.lcaParamList}
          onOpenModal={() => setOpenAddInfoModal(false)}
        />
      )}
    </Fragment>
  );
};

export default InventoryResultModal;
