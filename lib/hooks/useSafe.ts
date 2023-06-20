import { useEffect, useRef } from "react";

export function useSafe() {
  const safeRef = useRef(true);
  useEffect(() => {
    safeRef.current = true;
    return () => {
      safeRef.current = false;
    };
  }, []);
  return safeRef;
}
