import { ModelType, ProductSystem } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";
import { ModelIconName } from "../common/modelIconName";
import { categoryFull } from "@lib/lca";

export function InfoPage(p: { data: ProductSystem }) {
  const { data } = p;
  const flow = data.referenceExchange?.flow;
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
              name={categoryFull(data.category)}
              def="none"
            />,
          ],
          ["Description", data.description],
          ["Tags", data.tags || ""],
        ]}
      />
      <Line />
      <Infomation
        title="Reference"
        infos={[
          [
            "Process",
            <ModelIconName
              key={`ref_process`}
              type={ModelType.PROCESS}
              name={data.referenceProcess?.name}
              def="none"
            />,
          ],
          [
            "Product",
            <ModelIconName
              key={`ref_product`}
              type={flow?.flowType === "PRODUCT_FLOW" ? ModelType.PRODUCT_SYSTEM : ""}
              name={flow?.name}
              def="none"
            />,
          ],
          [
            "Flow property",
            <ModelIconName
              key={`ref_flow_pro`}
              type={ModelType.FLOW_PROPERTY}
              name={flow?.referenceFlowProperty?.name}
              def="none"
            />,
          ],
          [
            "Unit",
            <ModelIconName key={`ref_unit`} type={ModelType.UNIT_GROUP} name={flow?.referenceUnit?.name} def="none" />,
          ],
          ["Target amount", data.targetAmount + ""],
        ]}
      />
    </>
  );
}
