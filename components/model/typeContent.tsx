import { Loading } from "@components/common/loading";
import { Descriptor, ModelType } from "@lib/@types/lca";
import { useSafe } from "@lib/hooks/useSafe";
import { getLcaModelItem } from "@lib/http";
import { parseRefJson } from "@lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import { JsonView } from "./common/jsonView";
import { useSelectNavs } from "./context";
import { ProcessView } from "./process/processView";
import { ProductSystemView } from "./product/productSystemView";
import { FlowView } from "./flow/flowView";

const TypeContentMap: { [k: string]: FC<{ data: any; json: any }> } = {
  [ModelType.PRODUCT_SYSTEM]: ProductSystemView,
  [ModelType.PROCESS]: ProcessView,
  [ModelType.FLOW]: FlowView,
};

const TypeCache: {
  [k: string]: Promise<any>;
} = {};

function DefView(p: { json: any }) {
  return (
    <div className="flex-1 p-5 overflow-auto">
      <JsonView data={p.json} />
    </div>
  );
}

export function TypeContent(p: { id: string }) {
  const { id } = p;
  const { active } = useSelectNavs();
  const firstRef = useRef(true);
  const [[value, jsonValue], setValue] = useState<[any, any]>([undefined, undefined]);
  const [loading, setLoading] = useState(false);
  const safeRef = useSafe();
  useEffect(() => {
    // first clear cache;
    if (firstRef.current) {
      for (const key in TypeCache) {
        delete TypeCache[key];
      }
      firstRef.current = false;
    }
    // safe check
    if (!active || !active.data) return () => {};
    // cache load
    const des = active.data as Descriptor;
    const key = `${active.modelType}_${des.id}`;
    setLoading(true);
    if (!TypeCache[key]) {
      // TODO replace get type data api
      TypeCache[key] = getLcaModelItem(id, active.modelType, (active.data as Descriptor).id).then((data) => [
        parseRefJson(data),
        data,
      ]);
    }
    TypeCache[key]
      .then((data) => {
        safeRef.current && setValue(data);
      })
      .catch(() => {
        delete TypeCache[key];
      })
      .finally(() => {
        console.info("first:", safeRef.current);
        safeRef.current && setLoading(false);
      });
  }, [active, id]);
  const Dom = TypeContentMap[active?.modelType || ""] || DefView;
  if (!active) return null;
  if (loading) return <Loading />;
  if (!value) return null;
  return <Dom data={TypeContentMap[active?.modelType || ""] ? value : jsonValue} json={jsonValue} />;
}
