import { Process } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";
import { InputsOutputs } from "./InputsOutputsPage";
import { AdminInfoPage } from "./AdminInfoPage";
import { ModelValidPage } from "./ModelValidPage";
import { ParametersPage } from "./ParametersPage";
import { AllocationPage } from "./AllocationPage";

export function ProcessView(p: { data: Process, json: any }) {
  const { data, json } = p;
  return (
    <TypeLayout
      map={{
        "General information": InfoPage,
        "Inputs/Outputs": InputsOutputs,
        "Administrative information": AdminInfoPage,
        "Modeling and validation": ModelValidPage,
        "Parameters": ParametersPage,
        "Allocation": AllocationPage,
      }}
      data={data}
    />
  );
}
