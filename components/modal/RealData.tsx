import { Modal, ModalProps } from "@components/common/modal";
import STable from "@components/common/simpleTable";
import { useMemo } from "react";

export function RealData(p: ModalProps & { data: any }) {
  const { data, ...props } = p;
  const tableData = useMemo(() => {
    if (!data) return [];
    const params = JSON.parse(data) as any[];
    const bases = (params[0]?.parameters as any[]) || [];
    return bases.map((item) => [item.name, item.context.name, item.value, ""]);
  }, [data]);

  return (
    <Modal title="实景参数列表" {...props}>
      <STable className="w-[57.5rem]" data={tableData} header={["参数名", "过程名称", "参考值", "输入值"]} />
    </Modal>
  );
}
