import { Process } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";
import { InputsOutputs } from "./inputsOutputs";

export function ProcessView(p: { data: Process, json: any }) {
  const { data, json } = p;
  return (
    <TypeLayout
      map={{
        "General information": InfoPage,
        "Inputs/Outputs": InputsOutputs,
        "Administrative information": { json },
        "Modeling and validation": { json },
        "Parameters": { json },
        "Allocation": { json },
        "Social aspects": { json },
        "Impact analysis": { json },
      }}
      data={data}
    />
  );
}
