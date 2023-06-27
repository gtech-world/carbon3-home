import { Process } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";
import { InputsOutputs } from "./inputsOutputsPage";
import { AdminInfoPage } from "./adminInfoPage";
import { ModelValidPage } from "./modelValidPage";
import { ParametersPage } from "./parametersPage";
import { AllocationPage } from "./allocationPage";

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
