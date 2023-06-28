import { ModelType, Process } from "@lib/@types/lca";
import { Line } from "../common/line";
import { Table } from "../common/table";
import { useMemo } from "react";
import _ from "lodash";
import { ModelIconName } from "../common/modelIconName";

function isProviderFlow(e: any) {
  if (!e || e.isAvoided || !e.flow) return false;
  const type = e.flow.flowType;
  if (!type || type === "ELEMENTARY_FLOW") return false;
  return (type == "PRODUCT_FLOW") != e.isInput;
}

export function AllocationPage(p: { data: Process }) {
  const { data } = p;
  const [pyhsicalInfos, causalInfos] = useMemo(() => {
    const group = _.groupBy(data.exchanges || [], (e) => (isProviderFlow(e) ? "true" : "false"));
    const isEmpty = group["true"].length < 2;
    if (isEmpty) return [[], []];
    const infos1 = group["true"].map((item) => [
      <ModelIconName key={1} type={ModelType.FLOW} name={item.flow?.name} />,
      "",
      "",
    ]);
    const infos2 = group["false"].map((item) => [
      <ModelIconName key={1} type={ModelType.FLOW} name={item.flow?.name} />,
      item.isInput ? "Input" : "Output",
      item.flow?.category?.name || "",
      item.amount + "" + item.unit?.name,
      "",
      "",
    ]);
    return [infos1, infos2];
  }, [data]);
  return (
    <>
      <Table title="Pyhsical & economic allocation" head={["Product", "Physical", "Economic"]} infos={pyhsicalInfos} />
      <Line />
      <Table
        title="Causal allocation"
        head={["Flow", "Direction", "Category", "Amount", "Overburden(deposited)", "transport in t*km"]}
        infos={causalInfos}
      />
    </>
  );
}
