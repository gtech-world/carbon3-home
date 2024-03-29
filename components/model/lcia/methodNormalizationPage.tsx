import { ImpactMethod, ModelType } from "@lib/@types/lca";
import { useMemo } from "react";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";
import { ModelIconName } from "../common/modelIconName";
import { Table } from "../common/table";
import { categoryFull } from "@lib/lca";

export function MethodNormalizationPage(p: { data: ImpactMethod }) {
  const { data } = p;
  useMemo(() => {}, [data]);
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
              type={`folder-${ModelType.IMPACT_METHOD}`}
              name={categoryFull(data.category)}
              def="none"
            />,
          ],
          ["Description", data.description || ""],
          ["Tags", data.tags || ""],
          ["Source", <ModelIconName key={1} type={ModelType.SOURCE} name={data.source?.name} def="none" />],
          ["Code", data.code || ""],
        ]}
      />
      <Line />
      <Table
        title="Impact categories"
        head={["Name", "Description", "Reference unit"]}
        infos={(data.impactCategories || []).map((item) => [
          <ModelIconName key={1} type={ModelType.IMPACT_CATEGORY} name={item.name} />,
          item.description || "",
          item.referenceUnit,
        ])}
      />
    </>
  );
}
