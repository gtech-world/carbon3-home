import { TypeLayout } from "../common/typeLayout";
import { MethodInfoPage } from "./MethodInfoPage";

export function ImpactMethodView(p: { data: any; json: any }) {
  const { data } = p;
  return (
    <TypeLayout
      map={{
        "General infomation": MethodInfoPage,
      }}
      data={data}
    />
  );
}
