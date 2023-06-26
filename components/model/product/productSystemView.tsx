import { ProductSystem } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";
import { ParametersPage } from "./parametersPage";

export function ProductSystemView(p: { data: ProductSystem; json: any }) {
  const { data } = p;
  return (
    <TypeLayout
      map={{
        "General information": InfoPage,
        Parameters: ParametersPage,
        // "Model graph": { json },
        // Statistics: { json },
      }}
      data={data}
    />
  );
}
