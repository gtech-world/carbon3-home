import { useCurrentActivity } from "@components/carbonActivities/context";
import { Progress } from "@components/common/progress";
import { InventoryPhase } from "@lib/@types/type";
import classNames from "classnames";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalCircle } from "react-icons/io5";

export function PcInventoryLevel1Item(p: { data: InventoryPhase }) {
  const { data } = p;
  const { activity, update } = useCurrentActivity();
  const selected = activity === data;
  return (
    <div
      className={classNames("w-0 flex-1 text-black cursor-pointer [&:nth-child(n+2)]:ml-5", {
        "text-gray-9": !selected,
      })}
      onClick={() => update({ activity: data, sourcing: 0 })}
    >
      <Progress value={30} className="my-5" />
      <div className="w-full whitespace-normal font-bold text-xl">{data.name}</div>
      <div className="w-full whitespace-nowrap text-base mt-[.625rem]">{`${data.carbon_emission} / ${data.progress}%`}</div>
      {data.progress >= 100 ? (
        <IoCheckmarkCircleOutline className="text-2xl mt-3" />
      ) : (
        <IoEllipsisHorizontalCircle className="text-2xl mt-3" />
      )}
    </div>
  );
}

export function PcInventoryLevel1(p: { data: InventoryPhase[] }) {
  const { data } = p;
  return (
    <div className="bg-white p-5 rounded-lg w-full flex">
      {data.map((item, i) => (
        <PcInventoryLevel1Item key={`pc_inventory_item_${i}`} data={item} />
      ))}
    </div>
  );
}
