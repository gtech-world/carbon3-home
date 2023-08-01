import { Modal, ModalProps } from "@components/common/modal";
import STable from "@components/common/simpleTable";
import { useState } from "react";

export function RealData(p: ModalProps) {
  const { ...props } = p;
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState([]);
  //   const { value, loading } = useAsyncM(
  //     noArgs(() => getLcaResultList({ pgNum }), [pgNum]),
  //     [pgNum]
  //   );

  return (
    <Modal title="实景数据" {...props}>
      <STable data={tableData} header={["参数名", "描述", "过程名称", "类型", "参考值", "输入值"]} />
    </Modal>
  );
}
