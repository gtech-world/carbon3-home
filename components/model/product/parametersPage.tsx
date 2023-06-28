import { ProductSystem } from "@lib/@types/lca";
import { Fragment, useContext, useMemo } from "react";
import { Infomation } from "../common/infomation";
import { Table } from "../common/table";
import _ from "lodash";
import { Line } from "../common/line";
import { NavigationTreeContext } from "../context";
import { uncertaintyName } from "@lib/lca";

export function ParametersPage(p: { data: ProductSystem }) {
  const { data } = p;
  const { descriptores } = useContext(NavigationTreeContext);
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
    const getContext = (type: string, id: number) => {
      return _.chain(descriptores[type])
        .values()
        .flatten()
        .find((item) => item.id === id).value;
    };
    return others.map((item) => ({
      name: item.name,
      description: item.description,
      head: ["Context", "Parameter", "Amount", "Uncertainty", "Description"],
      infos: (item.parameters || []).map((p: any) => [
        getContext(p.contextType, p.contextId)?.name || "",
        p.name || "",
        p.value || "",
        uncertaintyName(item.uncertainty),
        p.description || "",
      ]),
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
