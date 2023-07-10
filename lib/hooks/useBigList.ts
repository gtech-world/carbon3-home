import { chunk } from "lodash";
import { useEffect, useState } from "react";

export function useBigList<T>(_list: T[], size: number = 50): T[] {
  const [list, setList] = useState<T[]>([]);
  useEffect(() => {
    let stop = false;
    setList([]);
    const chunks = chunk(_list, size);
    const fillList = () => {
      const requestHasRenderTime = (call: (has: boolean) => void) => {
        if (!!window.requestIdleCallback) {
          window.requestIdleCallback((idel) => call(idel.timeRemaining() > 1));
        } else if (!!window.requestAnimationFrame) {
          window.requestAnimationFrame(() => call(true));
        } else {
          window.setTimeout(() => call(true), size * 2);
        }
      };
      requestHasRenderTime((has) => {
        if (has) {
          setList((old) => {
            const index = Math.floor(old.length / size);
            console.info("index:", index);
            if (index >= chunks.length) {
              stop = true;
              return old;
            }
            return old.concat(chunks[index]);
          });
        }
        !stop && fillList();
      });
    };
    fillList();
    return () => {
      stop = true;
    };
  }, [_list, size]);
  return list;
}
