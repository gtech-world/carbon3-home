import { AttrsFull } from "@components/items/attrs";

export function PcInventoryLevel3(p: { data: any }) {
  const { data } = p;
  return (
    <div className="bg-white p-5 rounded-lg w-0 flex-1 ml-5">
      <div className="text-base font-semibold leading-normal whitespace-normal">{data.name}</div>
      <div className="mt-[.625rem] mb-4 text-sm text-gray-6">{`Total: ${data.carbon_emission}kg / ${data.items} items`}</div>
      {(data.boms as any[]).map((item, i) => (
        <AttrsFull
          key={`attrs_source_${i}`}
          title={`#${i+1} ${item.name}*${item.count}`}
          tit_r={`${item.carbon_emission}kg`}
          sub={item.calc}
          badge={[
            { type: "blue", txt: `${item.count}` },
            { type: "orange", txt: item.refData ? "RefData" : "Supplier" },
          ]}
        />
      ))}
    </div>
  );
}
