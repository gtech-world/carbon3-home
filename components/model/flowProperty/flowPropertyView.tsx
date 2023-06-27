import { TypeLayout } from "../common/typeLayout";
import { InfoPage } from "./infoPage";

export function FlowPropertyView(p: { data: any; json: any }) {
  const { data } = p;
  return (
    <TypeLayout
      map={{
        "General infomation": InfoPage,
      }}
      data={data}
    />
  );
}
