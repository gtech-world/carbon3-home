import { ModelType, Process } from "@lib/@types/lca";
import _ from "lodash";
import { ReactNode, useContext, useMemo } from "react";
import { Line } from "../common/line";
import { ModelIconName } from "../common/modelIconName";
import { Table } from "../common/table";
import { NavigationTreeContext } from "../context";

const head = [
  "Flow",
  "Category",
  "Amount",
  "Unit",
  "Costs/Revenuse",
  "Uncertainty",
  "Avoided waste",
  "Provider",
  "Data quality entry",
  "Location",
  "Description",
];
export function InputsOutputs(p: { data: Process }) {
  const { data } = p;
  const { descriptores } = useContext(NavigationTreeContext);
  const [inputs, outputs] = useMemo(() => {
    const _inputs: ReactNode[][] = [];
    const _outputs: ReactNode[][] = [];
    const proviers = _.chain(descriptores[ModelType.PROCESS]).values().flatten().keyBy("id").value() || {};
    data.exchanges.forEach((item,i) => {
      const provier = proviers[item.defaultProviderId];
      (item.isInput ? _inputs : _outputs).push([
        <ModelIconName key={`exchanges_${i}_1`} type={item.flow?.flowType || ModelType.FLOW} name={item.flow.name} />,
        item.flow.category.name,
        item.amount,
        <ModelIconName key={`exchanges_${i}_2`} type={ModelType.UNIT_GROUP} name={item.unit.name} />,
        "",
        "none",
        "",
        <ModelIconName key={`exchanges_${i}_3`} type={ModelType.PROCESS} name={provier?.name} />,
        item.dqEntry || "",
        item.location?.name || "",
        item.description || "",
      ]);
    });
    return [_inputs, _outputs];
  }, [data, descriptores]);

  return (
    <>
      <Table title="Inputs" head={head} infos={inputs} />
      <Line />
      <Table title="Outputs" head={head} infos={outputs} />
    </>
  );
}
