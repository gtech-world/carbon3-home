import { upFile } from "@lib/http";
import _ from "lodash";
import { useRef } from "react";

export function useUpFiles(tasks: number = 5): [(files: FileList) => Promise<number[]>, () => void] {
  const abort = useRef(new AbortController());
  const upFiles = (files: FileList) => {
    let list = files as unknown as File[];
    const next = () => {
      if (list.length === 0) return undefined;
      const file = list[0];
      list = _.drop(list);
      return {
        file,
        index: files.length - list.length - 1,
      };
    };

    const count = _.min([tasks, list.length]) as number;
    const res: number[] = _.range(files.length);
    const task = async () => {
      while (true) {
        const nInfo = next();
        if (nInfo) {
          const { file, index } = nInfo;
          const id = await upFile(file, { signal: abort.current.signal });
          res[index] = id;
        } else {
          return;
        }
      }
    };
    return Promise.all(_.range(count).map(() => task())).then(() => res);
  };
  return [
    upFiles,
    () => {
      try {
        abort.current.abort();
      } catch (error) {
        console.info("abort upfiles");
      }
    },
  ];
}
