import _ from "lodash";
import useSWR from "swr";

export function useProductSystem(psId: number, interval: number = 0) {
  return useSWR<ProduceSystemController.ListRecords>(`/api/product-system/${psId}/detail`, {
    refreshInterval: interval,
  });
}

export function useVerifyRecord(id?: number) {
  return useSWR<any>(!_.isNil(id) ? `/api/verifyRecord/${id}/detail` : null);
}

export function useInventoryLiteAll(load?: boolean) {
  return useSWR<any[]>(load ? "/api/inventory/all" : null);
}

export function useVerifiers(load?: boolean) {
  return useSWR<any[]>(load ? "/api/verifyRecord/verifiers" : null);
}
