import { chunk } from "lodash";
import { useEffect, useState } from "react";

function createReqHasRenderTime(call: (has: boolean) => void, size: number) {
  if (!!window.requestIdleCallback) {
    return () => window.requestIdleCallback((idel) => call(idel.timeRemaining() > 1));
  } else if (!!window.requestAnimationFrame) {
    return () => window.requestAnimationFrame(() => call(true));
  } else {
    return () => window.setTimeout(() => call(true), size * 2);
  }
}

export function useBigList<T>(_list: T[], size: number = 50): T[] {
  const [list, setList] = useState<T[]>([]);
  useEffect(() => {
    let stop = false;
    setList([]);
    const chunks = chunk(_list, size);
    const requestHasRenderTime = createReqHasRenderTime((has) => {
      if (has && !stop) {
        setList((old) => {
          const index = Math.floor(old.length / size);
          if (index >= chunks.length) {
            stop = true;
            return old;
          }
          return old.concat(chunks[index]);
        });
      }
      !stop && requestHasRenderTime();
    }, size);
    requestHasRenderTime();
    return () => {
      stop = true;
    };
  }, [_list, size]);
  return list;
}
