import { ModelType, Process } from "@lib/@types/lca";
import { ftmMilliTime } from "@lib/utils";
import { Infomation } from "../common/infomation";
import { Line } from "../common/line";
import { ModelIconName } from "../common/modelIconName";

export function InfoPage(p: { data: Process }) {
  const { data } = p;
  return (
    <>
      <Infomation
        title="General information"
        infos={[
          ["Name", data.name],
          [
            "Category",
            <ModelIconName key={`info_2`} type={`folder-${ModelType.PROCESS}`} name={data.category?.name} def="none" />,
          ],
          ["Description", data.description || "none"],
          ["Tags", data.tags || ""],
          ["Infrastructure process", data.infrastructureProcess ? "true" : "false"],
        ]}
      />
      <Line />
      <Infomation
        title="Time"
        infos={[
          ["Start date", ftmMilliTime(data.documentation?.validFrom)],
          ["End date", ftmMilliTime(data.documentation?.validUntil)],
          ["Description", data.documentation?.time || ""],
        ]}
      />
      <Line />
      <Infomation
        title="Geography"
        infos={[
          ["Location", data.location?.name || "none"],
          ["Description", data.documentation?.geography || ""],
        ]}
      />
      <Line />
      <Infomation title="Technology" infos={[["Description", data.documentation?.technology || ""]]} />
      <Line />
      <Infomation
        title="Data quality"
        infos={[
          ["Process schema", data.location?.name || "none"],
          ["Data quality entry", data.dqEntry || "(not specified)"],
          ["Flow schema", data.exchangeDqSystem?.name || "none"],
          ["Social schema", data.socialDqSystem?.name || "none"],
        ]}
      />
    </>
  );
}
