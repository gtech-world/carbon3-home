import { Flow, ModelType } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";
import { ModelIconName } from "../common/modelIconName";
import { categoryFull, flowTypeName } from "@lib/lca";

export function InfoPage(p: { data: Flow }) {
  const { data } = p;
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
              type={`folder-${ModelType.FLOW}`}
              name={categoryFull(data.category)}
              def="none"
            />,
          ],
          ["Description", data.description || ""],
          ["Tags", data.tags || ""],
          ["Flow type", <ModelIconName key={1} type={data.flowType} name={flowTypeName(data.flowType)} />],
          ["Infrastructure flow", data.infrastructureFlow ? "true" : "false"],
        ]}
      />
      <Line />
      <Infomation
        title="Additional information"
        infos={[
          ["CAS Number", data.casNumber || "none"],
          ["Formula", data.formula || "none"],
          ["Synonyms", data.synonyms || "none"],
          ["Location", data.location?.name || "none"],
        ]}
      />
    </>
  );
}
