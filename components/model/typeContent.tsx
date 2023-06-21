import { Loading } from "@components/common/loading";
import { Descriptor, ModelType } from "@lib/@types/lca";
import { useSafe } from "@lib/hooks/useSafe";
import { parseRefJson, sleep } from "@lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import { JsonView } from "./common/jsonView";
import { useSelectNavs } from "./context";
import { ProductSystemView } from "./product/productSystemView";
import { typeTestData } from "@lib/testData";

const TypeContentMap: { [k: string]: FC<{ data: any }> } = {
  [ModelType.PRODUCT_SYSTEM]: ProductSystemView,
};

const TypeCache: {
  [k: string]: Promise<any>;
} = {};

export function TypeContent() {
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
      TypeCache[key] = sleep(1000).then(() => [
        parseRefJson(typeTestData[active.modelType]),
        typeTestData[active.modelType],
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
  }, [active]);
  const Dom = TypeContentMap[active?.modelType || ""] || JsonView;
  if (!active) return null;
  if (loading) return <Loading />;
  if (!value) return null;
  return <Dom data={TypeContentMap[active?.modelType || ""] ? value : jsonValue} />;
}
