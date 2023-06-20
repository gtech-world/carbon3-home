import classNames from "classnames";
import { FC, useState } from "react";
import { JsonView } from "./jsonView";

export function TypeLayout(p: { map: { [k: string]: FC<{ data: any }> | { json: any } }; data: any }) {
  const { map, data } = p;
  const tabs = Object.keys(map);
  const [tab, setTab] = useState(tabs[0]);
  const json = (map[tab] as { json: any }).json;
  const Dom = !json ? (map[tab] as FC<{ data: any }>) : null;
  return (
    <div className="flex flex-col h-full">
      <div className="h-0 flex-1 flex flex-col overflow-auto p-5 gap-5">
        {!!Dom ? <Dom data={data} /> : <JsonView data={json} />}
      </div>
      <div className="flex flex-shrink-0 overflow-x-auto">
        {tabs.map((item, i) => (
          <div
            key={`type_tab_${i}`}
            onClick={() => setTab(item)}
            className={classNames(
              "leading-[34px] text-sm px-[10px] border border-solid border-gray-14 cursor-pointer whitespace-nowrap",
              {
                "text-green-2 border-transparent": item === tab,
                "text-black": item !== tab,
              }
            )}
          >
            {item}
          </div>
        ))}
        <div className="flex-1 border border-solid border-gray-14" />
      </div>
    </div>
  );
}
