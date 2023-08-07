import { authGetResData } from "@lib/http";
import useSWR from "swr";

export function useProductSystem(psId: number, interval: number = 0) {
  return useSWR<ProduceSystemController.ListRecords>(`/api/product-system/${psId}/detail`, authGetResData, {
    refreshInterval: interval,
  });
}
