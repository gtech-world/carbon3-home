import { Flow, ModelType } from "@lib/@types/lca";
import { Table } from "../common/table";
import { ReactNode, useMemo } from "react";
import { ModelIconName } from "../common/modelIconName";

export function PropertiesPage(p: { data: Flow }) {
  const { data } = p;

  const infos: ReactNode[][] = useMemo(() => {
    const getFormula = (factory: any) => {
      const refFactory = data.referenceFactor;
      const refUnit = refFactory?.flowProperty?.unitGroup?.referenceUnit;
      const unit = factory?.flowProperty?.unitGroup?.referenceUnit;
      if (!refUnit || !unit) return "";
      return `1.0 ${refUnit.name} = ${factory.conversionFactor} ${unit.name}`;
    };
    return data.flowPropertyFactors.map((item) => [
      <ModelIconName key={1} type={ModelType.FLOW_PROPERTY} name={item.flowProperty?.name || ""} />,
      item.conversionFactor + "",
      <ModelIconName
        key={2}
        type={ModelType.UNIT_GROUP}
        name={item.flowProperty?.unitGroup?.referenceUnit?.name || ""}
      />,
      getFormula(item),
      data.referenceFactor === item ? "true" : "false",
    ]);
  }, [data]);
  return (
    <>
      <Table
        key={1}
        title="Flow properties"
        head={["Name", "Conversion factor", "Reference unit", "Formula", "Is reference"]}
        infos={infos}
      />
    </>
  );
}
