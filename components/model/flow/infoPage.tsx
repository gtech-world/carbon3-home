import { Flow } from "@lib/@types/lca";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";

export function InfoPage(p: { data: Flow }) {
  const { data } = p;
  return (
    <>
      <Infomation
        title="General information"
        infos={[
          ["Name", data.name],
          ["Category", data.category?.name || "none"],
          ["Description", data.description || "none"],
          ["Tags", "none"],
          ["Infrastructure flow", data.infrastructureFlow ? "true" : "false"],
        ]}
      />
      {/* <Line />
      <Infomation title="Used in processes" infos={[["Produced by", "none"]]} /> */}
      <Line />
      <Infomation
        title="Additional information"
        infos={[
          ["CAS Number", data.casNumber || "none"],
          ["Formula", data.formula || "none"],
          ["Synonyms", data.synonyms || "none"],
          ["Location", data.location?.name || "none"],
        ]}
      />
    </>
  );
}
