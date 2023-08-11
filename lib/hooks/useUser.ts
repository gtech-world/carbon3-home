import { useStore } from "@components/common/context";

export function useIsVerifier(): boolean {
  const { userData, inited } = useStore();
  return inited && userData?.role === "verify";
}

export function useUnVerifier(): boolean {
  const { userData, inited } = useStore();
  return inited && userData?.role !== "verify";
}
