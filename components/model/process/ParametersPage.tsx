import { Process } from "@lib/@types/lca";
import { Line } from "../common/line";
import { Table } from "../common/table";

export function ParametersPage(p: { data: Process }) {
  const { data } = p;
  return (
    <>
      <Table title="Input parameters" head={["Name", "Value", "Uncertainty", "Description"]} infos={[]} />
      <Line/>
      <Table title="Dependent parameters" head={["Name", "Formula", "Value", "Description"]} infos={[]} />
    </>
  );
}
