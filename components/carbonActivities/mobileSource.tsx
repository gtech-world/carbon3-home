import classNames from "classnames";
import { Fragment } from "react";
import { useToggle } from "react-use";
import { SourceModal } from "./sourceModal";

export function MobileSourcing(p: { data: any; index: number }) {
  const { data, index } = p;
  const [open, toggle] = useToggle(false);
  return (
    <div
      className="w-full h-[4.5rem] cursor-pointer px-3 flex items-center border border-solid border-black rounded-lg"
      style={{ marginTop: index > 0 ? "1.25rem" : "0px" }}
      onClick={() => toggle(true)}
    >
      <div
        style={{
          WebkitLineClamp: 2,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
        className={classNames("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis")}
      >
        {data.name}
      </div>
      {open && (
        <SourceModal
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

export function MobileSourcingList(p: { data: any[] }) {
  const { data } = p;
  return (
    <>
      {data.map((item, i) => (
        <Fragment key={`sourcing_item_${i}`}>
          <MobileSourcing data={item} index={i} />
        </Fragment>
      ))}
    </>
  );
}
