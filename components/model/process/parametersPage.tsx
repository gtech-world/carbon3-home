import { Process } from "@lib/@types/lca";
import { uncertaintyName } from "@lib/lca";
import _ from "lodash";
import { useMemo } from "react";
import { Line } from "../common/line";
import { Table } from "../common/table";

export function ParametersPage(p: { data: Process }) {
  const { data } = p;
  const [inputs, depends] = useMemo(() => {
    const group = _.chain(data.parameters || [])
      .sortBy("name")
      .groupBy((item) => (item.isInputParameter ? "input" : "depend"))
      .value();
    const _inputs = (group["input"] || []).map((item) => [
      item.name || "",
      item.value || "",
      uncertaintyName(item.uncertainty),
      item.description || "",
    ]);
    const _depends = (group["depend"] || []).map((item) => [
      item.name || "",
      item.formula || "",
      item.value || "",
      item.description || "",
    ]);

    return [_inputs, _depends];
  }, [data]);
  return (
    <>
      <Table title="Input parameters" head={["Name", "Value", "Uncertainty", "Description"]} infos={inputs} />
      <Line />
      <Table title="Dependent parameters" head={["Name", "Formula", "Value", "Description"]} infos={depends} />
    </>
  );
}
