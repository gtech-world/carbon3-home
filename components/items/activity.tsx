import { useCurrentActivity } from "@components/carbonActivities/context";
import { MobileActL2 } from "@components/carbonActivities/mobileActL2";
import { ActivityUIProps } from "@components/carbonActivities/types";
import { useIsMobile } from "@components/common/context";
import { Phase } from "@lib/@types/type";
import SvgArrowDown from "@public/arrow-down.svg";
import classNames from "classnames";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useToggle } from "react-use";

export function PcActivity(p: { data: Phase }) {
  const { data } = p;
  const { activity, update } = useCurrentActivity();
  const selected = activity === data;
  const { t } = useTranslation();
  return (
    <div
      className="w-full h-[6.875rem] pr-[.625rem] relative cursor-pointer "
      onClick={() => update({ activity: data, sourcing: 0 })}
    >
      <div
        style={{ border: selected ? "1px solid #29953A" : "1px solid transparent" }}
        className={classNames("bg-white w-full h-full px-5 rounded-lg flex items-center justify-center")}
      >
        <div
          className={classNames(
            "font-bold grow-0 text-xl w-full whitespace-normal text-center break-words overflow-hidden",
            { "text-green-2": selected }
          )}
        >
          {t(data.name)}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #29953A",
          borderRight: "1px solid #29953A",
          display: selected ? "block" : "none",
        }}
        className="w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[2.99555rem] rotate-45"
      />
    </div>
  );
}

export function MobileActivity(p: { data: Phase }) {
  const { data } = p;
  const { t } = useTranslation();
  const [open, toggle] = useToggle(false);
  return (
    <div
      className="bg-white grow-0 w-full h-[6.875rem] cursor-pointer px-5 rounded-lg flex items-center justify-center"
      onClick={() => toggle(true)}
    >
      <div className={classNames("font-bold grow-0 text-xl whitespace-normal text-center break-words overflow-hidden")}>
        {t(data.name)}
      </div>
      {open && (
        <MobileActL2
          data={data}
          onBack={(e) => {
            toggle(false);
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}

export function Activities(p: ActivityUIProps) {
  const { data } = p;
  const isMobile = useIsMobile();
  return (
    <>
      {data.map((item, i) => (
        <Fragment key={`activites_root_${i}`}>
          {isMobile ? <MobileActivity data={item} /> : <PcActivity data={item} />}
          {i < data.length - 1 && <SvgArrowDown className="text-green-2 text-lg my-[.625rem]" />}
        </Fragment>
      ))}
    </>
  );
}
