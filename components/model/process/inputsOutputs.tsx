import { ModelType, Process } from "@lib/@types/lca";
import { Table } from "../common/table";
import { Line } from "../common/line";
import { useMemo, ReactNode, useContext } from "react";
import { NavigationTreeContext } from "../context";
import { ModelIcon } from "../modelIcon";
import _ from "lodash";

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
    data.exchanges.forEach((item) => {
      const provier = proviers[item.defaultProviderId];
      (item.isInput ? _inputs : _outputs).push([
        <div className="flex items-center">
          <ModelIcon type={ModelType.FLOW} className="mr-1" />
          {item.flow.name}
        </div>,
        item.flow.category.name,
        item.amount,
        <div className="flex items-center">
          <ModelIcon type={ModelType.UNIT_GROUP} className="mr-1" />
          {item.unit.name}
        </div>,
        "",
        "none",
        "",
        <div className="flex items-center">
          {!!provier && <ModelIcon type={ModelType.PROCESS} className="mr-1" />}
          {provier?.name}
        </div>,
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
