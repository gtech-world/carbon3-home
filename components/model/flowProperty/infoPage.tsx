import { FlowProperty, ModelType } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { ModelIconName } from "../common/modelIconName";
import { categoryFull } from "@lib/lca";

export function InfoPage(p: { data: FlowProperty }) {
  const { data } = p;
  return (
    <>
      <Infomation
        title="General information"
        infos={[
          ["Name", data.name],
          [
            "Category",
            <ModelIconName key={`info_2`} type={`folder-${ModelType.FLOW_PROPERTY}`} name={categoryFull(data.category)} def="none" />,
          ],
          ["Description", data.description || ""],
          ["Tags", data.tags || ""],
          ["Unit group", <ModelIconName key={1} type={ModelType.UNIT_GROUP} name={data.unitGroup?.name} />],
          ["Flow property type", data.flowPropertyType],
        ]}
      />
    </>
  );
}
