import { Modal, ModalProps } from "@components/common/modal";
import STable from "@components/common/simpleTable";
import { tryParse } from "@lib/utils";
import _ from "lodash";
import { useMemo } from "react";

export function RealData(p: ModalProps & { data: any; inputData?: InventoryController.LcaParamList[] | string }) {
  const { data, inputData, ...props } = p;
  const tableData = useMemo(() => {
    if (!data) return [];
    const inputMap = inputData
      ? _.mapKeys(
          typeof inputData === "string" ? tryParse<InventoryController.LcaParamList[]>(inputData) || [] : inputData,
          (item) => item.paramName,
        )
      : ({} as _.Dictionary<InventoryController.LcaParamList>);
    const params = tryParse<any[]>(data) || [];
    const bases = (params[0]?.parameters || []) as any[];
    return bases.map((item) => [item.name, item.context.name, item.value, inputMap[item.name]?.paramValue || ""]);
  }, [data, inputData]);

  return (
    <Modal title="实景数据" {...props}>
      <STable className="w-[40rem]" data={tableData} header={["参数名", "过程名称", "参考值", "输入值"]} />
    </Modal>
  );
}
