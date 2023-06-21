import { useSelectState } from "@components/common/select";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getProductList } from "@lib/http";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function useProductsState() {
  const { value: products, loading } = useAsyncM(getProductList);
  const list = useMemo(() => (products || []).map((p:any) => ({ ...p, text: p.displayName })), [products]);
  const { query } = useRouter();
  const initIndex = useMemo(() => {
    const pid = query["product_id"];
    if (pid) {
      const fi = list.findIndex((p:any) => `${p.id}` == pid);
      if (fi >= 0) return fi;
    }
    return 0;
  }, [query, list]);
  const { current, items, onChange } = useSelectState(list, initIndex);
  const current_product = list[current];

  return { products, current, items, onChange, current_product, loading }
}