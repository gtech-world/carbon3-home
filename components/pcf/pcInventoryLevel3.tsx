import { AttrsFull } from "@components/items/attrs";
import { InventoryProductProcess } from "@lib/@types/type";
import { ftmCarbonEmission } from "@lib/utils";

export function PcInventoryLevel3(p: { data?: InventoryProductProcess }) {
  const { data } = p;
  return (
    <div className="bg-white p-5 rounded-lg w-0 flex-1 ml-5">
      <div className="text-base font-semibold leading-normal whitespace-normal">{data?.name}</div>
      <div className="mt-[.625rem] mb-4 text-sm text-gray-6">{`Total: ${
        data?.carbon_emission ? ftmCarbonEmission(data.carbon_emission) : "-"
      } / ${data?.activityTypes.length || "-"} items`}</div>
      {data?.activityTypes.map((item, i) => (
        <AttrsFull
          key={`attrs_source_${i}`}
          title={`#${i + 1} ${item.displayName}`}
          tit_r={`${item.carbon_emission}kg`}
          sub={item.description}
          // badge={[
          //   { type: "blue", txt: `${2}` },
          //   { type: "orange", txt: item.scope ? "RefData" : "Supplier" },
          // ]}
        />
      ))}
    </div>
  );
}
