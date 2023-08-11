import { MobileActL2 } from "@components/carbonActivities/mobileActL2";
import { StepProgress } from "@components/common/progress";
import { PHASE } from "@components/const";
import { InventoryPhase } from "@lib/@types/type";
import { useT } from "@lib/hooks/useT";
import { ftmCarbonEmission } from "@lib/utils";
import classNames from "classnames";
import { BsArrowRightShort } from "react-icons/bs";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalCircle } from "react-icons/io5";
import { useToggle } from "react-use";

export function MobleInventoryLevel1Item(p: { data: InventoryPhase; index: number }) {
  const { data, index } = p;
  const { t } = useT();
  const [open, toggle] = useToggle(false);
  return (
    <div
      className={classNames("w-full p-5 bg-white rounded-lg text-black cursor-pointer [&:nth-child(n+2)]:mt-5")}
      onClick={() => toggle(true)}>
      <StepProgress index={index} className="my-5" />
      <div className="w-full whitespace-normal font-bold text-base">{t(data.name)}</div>
      <div className="w-full whitespace-nowrap text-sm mt-[.625rem]">{`${ftmCarbonEmission(data.carbon_emission)} / ${
        data.progress
      }%`}</div>
      <div className="flex justify-between items-center mt-3">
        {data.carbon_emission > 0 && data.name !== PHASE[PHASE.length - 1] ? (
          <IoCheckmarkCircleOutline className="text-2xl " />
        ) : (
          <IoEllipsisHorizontalCircle className="text-2xl" />
        )}
        <BsArrowRightShort className="text-2xl text-green-2" />
      </div>
      {open && (
        <MobileActL2
          data={data}
          onBack={(e) => {
            toggle();
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}

export function MobileInventoryBreakdown(p: { data: InventoryPhase[] }) {
  const { data } = p;
  return (
    <div className="rounded-lg w-full flex flex-col">
      {data.map((item, i) => (
        <MobleInventoryLevel1Item index={i} key={`mo_inventory_item_${i}`} data={item} />
      ))}
    </div>
  );
}
