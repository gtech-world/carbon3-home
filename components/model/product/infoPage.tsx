import { ModelType, ProductSystem } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";
import { ReactNode, useMemo } from "react";
import { ModelIconName } from "../common/modelIconName";

export function InfoPage(p: { data: ProductSystem }) {
  const { data } = p;
  const reference = useMemo<[string, ReactNode][]>(() => {
    const list: [string, ReactNode][] = [];
    if (data.referenceProcess) list.push(["Process", data.referenceProcess.name]);
    if (data.referenceExchange?.flow) {
      const flow = data.referenceExchange?.flow;
      if (flow.flowType === "PRODUCT_FLOW") list.push(["Product", flow.name]);
      else list.push(["Flow", flow.name]);
      if (flow.referenceFlowProperty) list.push(["Flow property", flow.referenceFlowProperty.name]);
      if (flow.referenceUnit) list.push(["Unit", flow.referenceUnit.name]);
    }
    if (data.targetAmount) list.push(["Targetamount", data.targetAmount]);
    return list;
  }, [data]);
  return (
    <>
      <Infomation
        title="General information"
        infos={[
          ["Name", data.name],
          [
            "Category",
            <ModelIconName
              key={`info_2`}
              type={`folder-${ModelType.PRODUCT_SYSTEM}`}
              name={data.category?.name}
              def="none"
            />,
          ],
          ["Description", data.description],
          ["Tags", "none"],
        ]}
      />
      <Line />
      <Infomation title="Reference" infos={reference} />
    </>
  );
}
