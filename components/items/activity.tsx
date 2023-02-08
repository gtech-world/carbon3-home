import { useCurrentActivity } from "@components/carbonActivities/context";
import { SouringModal } from "@components/carbonActivities/sourcingModal";
import { useIsMobile } from "@components/common/context";
import SvgArrowDown from "@public/arrow-down.svg";
import classNames from "classnames";
import { Fragment } from "react";
import { useToggle } from "react-use";

export function Activity(p: { data: any }) {
  const { data } = p;
  const { activity, update } = useCurrentActivity();
  const selected = activity === data;

  return (
    <div
      className="w-full h-[6.875rem] pr-[.625rem] relative cursor-pointer "
      onClick={() => update({ activity: data, sourcing: 0 })}
    >
      <div
        className={classNames(
          "bg-white w-full h-full px-5 rounded-lg flex items-center justify-center border border-solid border-transparent",
          {
            "border-green-2": selected,
          }
        )}
      >
        <div
          className={classNames(
            "font-bold grow-0 text-xl w-full whitespace-normal text-center break-words overflow-hidden",
            { "text-green-2": selected }
          )}
        >
          {data.name}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #227A30",
          borderRight: "1px solid #227A30",
          display: selected ? "block" : "none",
        }}
        className="w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[2.99555rem] rotate-45"
      />
    </div>
  );
}

export function MobileActivity(p: { data: any }) {
  const { data } = p;
  const [open, toggle] = useToggle(false);
  return (
    <div
      className="bg-white grow-0 w-full h-[6.875rem] cursor-pointer px-5 rounded-lg flex items-center justify-center"
      onClick={() => toggle(true)}
    >
      <div
        className={classNames(
          "font-bold grow-0 text-xl whitespace-normal text-center break-words overflow-hidden"
        )}
      >
        {data.name}
      </div>
      {open && (
        <SouringModal
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

export function Activities(p: { data: any[] }) {
  const { data } = p;
  const isMobile = useIsMobile();
  return (
    <>
      {data.map((item, i) => (
        <Fragment key={`activites_root_${i}`}>
          {isMobile ? <MobileActivity data={item} /> : <Activity data={item} />}
          {i < data.length - 1 && <SvgArrowDown className="text-green-2 text-lg my-[.625rem]" />}
        </Fragment>
      ))}
    </>
  );
}
