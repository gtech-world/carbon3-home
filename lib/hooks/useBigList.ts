import { chunk } from "lodash";
import { useEffect, useState } from "react";

export function useBigList<T>(_list: T[], size: number = 50): T[] {
  const [list, setList] = useState<T[]>([]);
  useEffect(() => {
    let stop = false;
    setList([]);
    const chunks = chunk(_list, size);
    const fillList = () => {
      requestIdleCallback((idel) => {
        if (idel.timeRemaining() > 1) {
          setList((old) => {
            const index = Math.floor(old.length / size);
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
