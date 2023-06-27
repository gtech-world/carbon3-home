import { Process } from "@lib/@types/lca";
import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";
import { PropertiesPage } from "./propertiesPage";

export function FlowView(p: { data: Process; json: any }) {
  const { data, json } = p;
  return (
    <TypeLayout
      map={{
        "General information": InfoPage,
        "Flow properties": PropertiesPage,
      }}
      data={data}
    />
  );
}
