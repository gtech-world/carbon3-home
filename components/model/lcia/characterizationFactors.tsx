import { ImpactCategory, ModelType } from "@lib/@types/lca";
import { Table } from "../common/table";
import { ModelIconName } from "../common/modelIconName";
import { uncertaintyName } from "@lib/lca";

export function CharacterizationFactors(p: { data: ImpactCategory }) {
  const { data } = p;
  return (
    <>
      <Table
        title="Characterization factors"
        head={["Flow", "Category", "Factor", "Unit", "Uncertainty", "Location"]}
        infos={(data.impactFactors || []).map((item) => [
          <ModelIconName key={1} name={item.flow?.name} type={item.flow?.flowType || ModelType.FLOW} />,
          item.flow?.category?.name || "",
          item.formula || item.value || "",
          item.unit ? `${data.referenceUnit || "1"}/${item.unit.name}` : "",
          uncertaintyName(item.uncertainty),
          item.flow?.location?.name || "",
        ])}
      />
    </>
  );
}