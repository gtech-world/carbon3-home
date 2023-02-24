import { useCurrentActivity } from "@components/carbonActivities/context";
import { InventoryProductProcess } from "@lib/@types/type";
import { ftmCarbonEmission } from "@lib/utils";
import classNames from "classnames";

export function PcInventoryLevel2Item(p: { data: InventoryProductProcess; index: number }) {
  const { data, index } = p;
  const { sourcing, update } = useCurrentActivity();
  const selected = sourcing === index;
  return (
    <div
      className={classNames("relative w-full pr-[.625rem] cursor-pointer [&:nth-child(n+2)]:mt-5")}
      onClick={() => update({ sourcing: index })}
    >
      <div className="w-full p-3 rounded-lg" style={{ border: selected ? "1px solid #227A30" : "1px solid #000000" }}>
        <div
          className={classNames(
            {
              "text-green-2": selected,
            },
            "text-base leading-normal w-full text-ellipsis whitespace-nowrap overflow-hidden"
          )}
        >
          {data.name}
        </div>
        <div
          className={classNames(selected ? "text-green-2" : "text-gray-6", "text-sm mt-[.625rem]")}
        >{`${ftmCarbonEmission(data.carbon_emission)} / ${data.activityTypes.length} items`}</div>
      </div>
      {selected && (
        <div
          style={{
            borderTop: "1px solid #227A30",
            borderRight: "1px solid #227A30",
          }}
          className="w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[calc(50%_-_.4419rem)] rotate-45"
        />
      )}
    </div>
  );
}

export function PcInventoryLevel2(p: { data: InventoryProductProcess[] }) {
  const { data } = p;
  return (
    <div className="bg-white p-5 rounded-lg w-0 flex-1">
      {data.map((item, i) => (
        <PcInventoryLevel2Item key={`pc_inventory_item_${i}`} data={item} index={i} />
      ))}
    </div>
  );
}
