import { DependencyList } from "react";
import { useAsync } from "react-use";
import { FunctionReturningPromise } from "react-use/lib/misc/types";
export function useAsyncM<T extends FunctionReturningPromise>(fn: T, deeps?: DependencyList) {
  const state = useAsync(fn, deeps);
  if (state.error || state.loading) state.value = undefined;
  return state;
}
