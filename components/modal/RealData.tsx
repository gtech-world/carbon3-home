import { Modal, ModalProps } from "@components/common/modal";
import { Table } from "@components/common/table";
import { useState } from "react";

const columns = [
  {
    title: "实景输入项",
    dataIndex: "context",
    width: "20%",
  },
  {
    title: "过程名称",
    dataIndex: "parameter",
    width: "30%",
  },
  {
    title: "参考值",
    dataIndex: "amount",
    width: "20%",
  },
  {
    title: "不确定性",
    dataIndex: "uncertainty",
    emptyText: "-",
    width: "30%",
  },
];

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
      <Table
        columns={columns}
        data={tableData}
        loading={false}
        className="w-full min-w-[40rem] max-h-[80vh]"
        headerStyle={{ background: "#dddddd" }}
      />
    </Modal>
  );
}
