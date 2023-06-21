import { useSelectState } from "@components/common/select";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getVINCodes } from "@lib/http";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function useVinCodesState() {
  const { value: vins, loading } = useAsyncM(getVINCodes);
  const list = useMemo(() => (vins || []).map((p) => ({ text: p })), [vins]);
  const { query } = useRouter();
  const initIndex = useMemo(() => {
    const vin = query["vin"];
    if (vin) {
      const fi = list.findIndex((p:any) => p.text == vin);
      if (fi >= 0) return fi;
    }
    return 0;
  }, [query, list]);
  const { current, items, onChange } = useSelectState(list, initIndex);
  const current_vin = list[current]?.text || "";

  return { vins, current, items, onChange, current_vin, loading };
}
