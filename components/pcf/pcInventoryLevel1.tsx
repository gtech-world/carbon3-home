import { useCurrentActivity } from "@components/carbonActivities/context";
import { StepProgress } from "@components/common/progress";
import { PHASE } from "@components/const";
import { InventoryPhase } from "@lib/@types/type";
import { ftmCarbonEmission } from "@lib/utils";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalCircle } from "react-icons/io5";

export function PcInventoryLevel1Item(p: { data: InventoryPhase; index: number }) {
  const { data, index } = p;
  const { t } = useTranslation();
  const { activity, update } = useCurrentActivity();
  const selected = activity === data;
  return (
    <div
      className={classNames("w-0 flex-1 text-black cursor-pointer [&:nth-child(n+2)]:ml-5", {
        "text-gray-9": !selected,
      })}
      onClick={() => update({ activity: data, sourcing: 0 })}
    >
      <StepProgress full={true} color={selected ? "#227A30" : "transparent"} index={index} className="my-5" />
      <div className="w-full whitespace-normal font-bold text-xl">{t(data.name)}</div>
      <div className="w-full whitespace-nowrap text-base mt-[.625rem]">{`${ftmCarbonEmission(data.carbon_emission)} / ${data.progress}%`}</div>
      {data.carbon_emission > 0 && data.name !== PHASE[PHASE.length - 1] ? (
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
        <PcInventoryLevel1Item index={i} key={`pc_inventory_item_${i}`} data={item} />
      ))}
    </div>
  );
}
