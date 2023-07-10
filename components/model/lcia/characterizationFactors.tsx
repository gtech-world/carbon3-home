import { ImpactCategory, ModelType } from "@lib/@types/lca";
import { Table } from "../common/table";
import { ModelIconName } from "../common/modelIconName";
import { categoryFull, uncertaintyName } from "@lib/lca";
import { useBigList } from "@lib/hooks/useBigList";

export function CharacterizationFactors(p: { data: ImpactCategory }) {
  const { data } = p;
  const list = useBigList(data.impactFactors || []);
  return (
    <>
      <Table
        title="Characterization factors"
        head={["Flow", "Category", "Factor", "Unit", "Uncertainty", "Location"]}
        infos={list.map((item) => [
          <ModelIconName key={1} name={item.flow?.name} type={item.flow?.flowType || ModelType.FLOW} />,
          categoryFull(item.flow?.category),
          item.formula || item.value || "",
          item.unit ? `${data.referenceUnit || "1"}/${item.unit.name}` : "",
          uncertaintyName(item.uncertainty),
          item.flow?.location?.name || "",
        ])}
      />
    </>
  );
}
