import { ProductSystem } from "@lib/@types/lca";
import { Fragment, useMemo } from "react";
import { Infomation } from "../common/infomation";
import { Table } from "../common/table";
import _ from "lodash";
import { Line } from "../common/line";

export function ParametersPage(p: { data: ProductSystem }) {
  const { data } = p;
  const items = useMemo(() => {
    let base = data.parameterSets?.find((s) => s.isBaseLine);
    if (!base) {
      base = {
        name: "Baseline",
        description: "",
        head: ["Context", "Parameter", "Amount", "Uncertainty", "Description"],
        infos: [],
      };
    }
    const others = _.sortBy(
      (data.parameterSets || []).filter((item) => item !== base),
      ["isBaseline", "name"]
    );

    return others.map((item) => ({
      name: item.name,
      description: item.description,
      head: ["Context", "Parameter", "Amount", "Uncertainty", "Description"],
      infos: [

      ],
    }));
  }, [data]);

  return (
    <>
      {items.map((item, i) => (
        <Fragment key={`parameter_${i}`}>
          {i > 0 && <Line />}
          <Infomation
            title={item.name}
            infos={[
              ["Name", item.name],
              ["Description", item.description],
              <Table key={1} className="ml-5" title="Parameters" head={item.head} infos={item.infos} />,
            ]}
          />
        </Fragment>
      ))}
    </>
  );
}
