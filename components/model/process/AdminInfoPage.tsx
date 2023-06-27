import { ModelType, Process } from "@lib/@types/lca";
import { ftmMilliTime } from "@lib/utils";
import { Infomation } from "../common/infomation";
import { ModelIconName } from "../common/modelIconName";

export function AdminInfoPage(p: { data: Process }) {
  const { data } = p;
  return (
    <>
      <Infomation
        title="Administrative infomation"
        infos={[
          ["Intended application", data.documentation?.intendedApplication || ""],
          [
            "Data set owner",
            <ModelIconName key={1} def="none" type={ModelType.ACTOR} name={data.documentation?.dataSetOwner?.name} />,
          ],
          [
            "Data generator",
            <ModelIconName key={2} def="none" type={ModelType.ACTOR} name={data.documentation?.dataGenerator?.name} />,
          ],
          [
            "Data documentor",
            <ModelIconName key={3} def="none" type={ModelType.ACTOR} name={data.documentation?.dataDocumentor?.name} />,
          ],
          [
            "Publication",
            <ModelIconName key={4} def="none" type={ModelType.SOURCE} name={data.documentation?.publication?.name} /> ||
              "",
          ],
          ["Access and use restrictions", data.documentation?.restrictions || ""],
          ["Creation date", ftmMilliTime(data.documentation?.creationDate)],
          ["Copyright ", data.documentation?.copyright ? "true" : "false"],
        ]}
      />
    </>
  );
}
