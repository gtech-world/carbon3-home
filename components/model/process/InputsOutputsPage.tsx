import { ModelType, Process } from "@lib/@types/lca";
import { Table } from "../common/table";
import { Line } from "../common/line";
import { useMemo, ReactNode, useContext } from "react";
import { NavigationTreeContext } from "../context";
import { ModelIcon } from "../common/modelIcon";
import _ from "lodash";
import { ModelIconName } from "../common/modelIconName";

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
        <ModelIconName key={`exchanges_${i}_1`} type={ModelType.FLOW} name={item.flow.name} />,
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
