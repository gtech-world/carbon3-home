import { ImpactCategory, ModelType } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { ModelIconName } from "../common/modelIconName";
import { categoryFull } from "@lib/lca";

export function CategoryInfoPage(p: { data: ImpactCategory }) {
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
              type={`folder-${ModelType.IMPACT_CATEGORY}`}
              name={categoryFull(data.category)}
              def="none"
            />,
          ],
          ["Description", data.description || ""],
          ["Tags", data.tags || ""],
          ["Source", <ModelIconName key={1} type={ModelType.SOURCE} name={data.source?.name} def="none" />],
          ["Code", data.code || ""],
          ["Reference unit", data.referenceUnit || ""],
          ["Impact direction", data.direction || "Unspecified"],
        ]}
      />
    </>
  );
}
