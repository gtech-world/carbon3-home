import { ProductSystem } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";

export function ProductSystemView(p: { data: ProductSystem; json: any }) {
  const { data, json } = p;
  return (
    <TypeLayout
      map={{
        "General information": InfoPage,
        Parameters: { json: data.parameterSets },
        "Model graph": { json },
        Statistics: { json },
      }}
      data={data}
    />
  );
}
