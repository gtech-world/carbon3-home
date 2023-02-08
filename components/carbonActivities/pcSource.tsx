import { useCurrentActivity } from "@components/carbonActivities/context";
import { AttrsForSource, AttrsProps } from "@components/items/attrs";
import classNames from "classnames";
import { Fragment } from "react";

export function PcSourcing(p: { data: any; index: number }) {
  const { data, index } = p;
  const { sourcing, update } = useCurrentActivity();
  const selected = sourcing === index;

  return (
    <div
      className="w-full h-[4.5rem] pr-[.625rem] relative cursor-pointer"
      style={{ marginTop: index > 0 ? "1.25rem" : "0px" }}
      onClick={() => update({ sourcing: index })}
    >
      <div
        className={classNames(
          "bg-white w-full h-full px-3 rounded-lg flex items-center border border-solid border-black",
          {
            "border-green-2": selected,
          }
        )}
      >
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
            }
          )}
        >
          {data.name}
        </div>
      </div>
      {selected && (
        <div
          style={{
            borderTop: "1px solid #227A30",
            borderRight: "1px solid #227A30",
          }}
          className="w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[1.81rem] rotate-45"
        />
      )}
    </div>
  );
}

export function SourcingList(p: { data: any[] }) {
  const { data } = p;
  return (
    <>
      {data.map((item, i) => (
        <Fragment key={`sourcing_item_${i}`}>
          <PcSourcing data={item} index={i} />
        </Fragment>
      ))}
    </>
  );
}

export function Source(p: { data: any }) {
  const { data } = p;
  const items: AttrsProps[] = [
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
    {
      title: "#1 Front Glass*1",
      sub: "Weight*Ref_Factor",
      badge: [
        { txt: "2", type: "blue" },
        { txt: "RefData", type: "orange" },
      ],
    },
  ];
  return (
    <>
      <div className="bg-white shrink-0 leading-normal text-black text-base font-semibold w-full whitespace-normal pb-5">
        {data.name}
      </div>
      <div className="w-full h-0 flex-1 overflow-y-auto">
        {items.map((item, i) => (
          <AttrsForSource key={`attrs_source_${i}`} {...item} />
        ))}
      </div>
    </>
  );
}
