import { ProductSystem } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./InfoPage";
import { ParametersPage } from "./ParametersPage";

export function ProductSystemView(p: { data: ProductSystem; json: any }) {
  const { data } = p;
  return (
    <TypeLayout
      map={{
        "General information": InfoPage,
        Parameters: ParametersPage,
      }}
      data={data}
    />
  );
}
