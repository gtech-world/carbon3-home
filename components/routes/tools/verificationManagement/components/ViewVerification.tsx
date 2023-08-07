import { Modal } from "@components/common/modal";
import { FC, Fragment } from "react";

interface ViewVerificationProps {}

const data = [
  { file: "", name: "ES6 2023 100kWh 运动版200-300" },
  { file: "", name: "ES6 2023 100kWh 运动版200-300" },
  { file: "", name: "ES6 2023 100kWh 运动版200-300" },
  { file: "", name: "ES6 2023 100kWh 运动版200-300" },
  { file: "", name: "ES6 2023 100kWh 运动版200-300" },
];

const ViewVerification: FC<VerificationManagementController.ViewVerificationManagementModal> = ({ closeModal }) => {
  return (
    <Fragment>
      <Modal onClose={closeModal} title="查看文件夹">
        {data.map((e, i) => {
          return (
            <div id="view" className="w-[640px] h-[34px] flex items-center ">
              <span className="ml-[10px] leading-5 text-[16px] font-normal">{e.name}</span>
            </div>
          );
        })}
        <button className="bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5">下载</button>
      </Modal>
    </Fragment>
  );
};

export default ViewVerification;
