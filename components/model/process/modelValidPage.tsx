import { ModelType, Process } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";
import { ModelIconName } from "../common/modelIconName";

export function ModelValidPage(p: { data: Process }) {
  const { data } = p;
  return (
    <>
      <Infomation
        title="Modeling and validation"
        infos={[
          ["Process type", <ModelIconName key={1} type={ModelType.PROCESS} name={data.processType} />],
          ["LCI method", data.documentation?.inventoryMethod || ""],
          ["Modeling constants", data.documentation?.modelingConstants || ""],
          ["Data completeness", data.documentation?.completeness || ""],
          ["Data selection", data.documentation?.dataSelection || ""],
          ["Data treatment", data.documentation?.dataTreatment || ""],
        ]}
      />
      <Line />
      <Infomation
        title="Data source infomation"
        infos={[
          ["Simpling procedure", data.documentation?.sampling || ""],
          ["Data collection period", data.documentation?.dataCollectionPeriod || ""],
        ]}
      />
      <Line />
      <Infomation
        title="Process evaluation and validation"
        infos={[
          ["Reviewer", data.documentation?.reviewer?.name || ""],
          ["Data set other evaluation", data.documentation?.reviewDetails || ""],
        ]}
      />
      <Line />
      <Infomation
        title="Sources"
        infos={[
          <div className="flex flex-col px-3" key={1}>
            {((data.documentation?.sources as any[]) || []).map((item, i) => (
              <ModelIconName key={`source_${i}`} type={ModelType.SOURCE} name={item.name} />
            ))}
          </div>,
        ]}
      />
    </>
  );
}
