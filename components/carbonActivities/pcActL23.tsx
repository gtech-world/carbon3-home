import { useCurrentActivity } from "@components/carbonActivities/context";
import { AttrsFull } from "@components/items/attrs";
import { ProductProcess } from "@lib/@types/type";
import classNames from "classnames";
import { Fragment } from "react";

export function PcActL2Item(p: { data: ProductProcess; index: number }) {
  const { data, index } = p;
  const { sourcing, update } = useCurrentActivity();
  const selected = sourcing === index;

  return (
    <div
      className="w-full h-[4.5rem] pr-[.625rem] relative cursor-pointer"
      style={{ marginTop: index > 0 ? "1.25rem" : "0px" }}
      onClick={() => update({ sourcing: index })}>
      <div
        className={classNames(
          "bg-white w-full h-full px-3 rounded-lg flex items-center border border-solid border-black",
          {
            "border-green-2": selected,
          },
        )}>
        <div
          style={{
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
          className={classNames(
            " grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis",
            {
              "text-green-2": selected,
            },
          )}>
          {data.name}
        </div>
      </div>
      {selected && (
        <div
          style={{
            borderTop: "1px solid #29953A",
            borderRight: "1px solid #29953A",
          }}
          className="w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[1.81rem] rotate-45"
        />
      )}
    </div>
  );
}

export function PcActL2(p: { data: ProductProcess[] }) {
  const { data } = p;
  return (
    <div className="flex-1 w-0 h-full overflow-y-auto ml-[.625rem] bg-white p-5 rounded-lg">
      {data.map((item, i) => (
        <Fragment key={`sourcing_item_${i}`}>
          <PcActL2Item data={item} index={i} />
        </Fragment>
      ))}
    </div>
  );
}

export function PcActL3(p: { data?: ProductProcess }) {
  const { data } = p;
  return (
    <div className="flex-1 w-0 h-full ml-[.625rem] flex flex-col bg-white p-5 rounded-lg overflow-y-auto">
      <div className="bg-white shrink-0 leading-normal text-black text-base font-semibold w-full whitespace-normal pb-5">
        {data?.name || ""}
      </div>
      <div className="w-full h-0 flex-1 overflow-y-auto">
        {data?.activityTypes.map((item, i) => (
          <AttrsFull
            key={`attrs_source_${i}`}
            title={`#${i + 1} ${item.displayName}`}
            sub={item.description}
            // badge={[
            //   { type: "blue", txt: `${2}` },
            //   { type: "orange", txt: item.scope ? "RefData" : "Supplier" },
            // ]}
          />
        ))}
      </div>
    </div>
  );
}
