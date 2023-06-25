import { Process } from "@lib/@types/lca";
import { Table } from "../common/table";
import { Line } from "../common/line";
import { useMemo, ReactNode } from "react";

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
  const [inputs, outputs] = useMemo(() => {
    const _inputs: ReactNode[][] = [];
    const _outputs: ReactNode[][] = [];
    data.exchanges.forEach((item) => {
      (item.isInput ? _inputs : _outputs).push([
        item.flow.name,
        item.flow.category.name,
        item.amount,
        item.unit.name,
        "",
        "none",
        "",
        item.defaultProviderId || "",
        item.dqEntry || "",
        item.location?.name || "",
        item.description || "",
      ]);
    });
    return [_inputs, _outputs];
  }, [data]);

  return (
    <>
      <Table title="Inputs" head={head} infos={inputs} />
      <Line />
      <Table title="Outputs" head={head} infos={outputs} />
    </>
  );
}
