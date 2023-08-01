import classNames from "classnames";

export function Progress(p: { value: number; bg?: string; color?: string; className?: string }) {
  const { value, bg = "#dddddd", color = "#29953A", className } = p;
  return (
    <div className={classNames(className, "w-full h-[.625rem]")} style={{ background: bg }}>
      <div
        style={{
          width: `${value}%`,
          transition: "width 200ms ease",
          background: color,
        }}
        className="h-full"
      />
    </div>
  );
}

export function StepProgress(p: { index: number; full?: boolean; bg?: string; color?: string; className?: string }) {
  const { index, full, bg = "#dddddd", color = "#29953A", className } = p;
  // const isMobile = useIsMobile();
  return (
    <div className={classNames(className, "w-full h-[.625rem]")} style={{ background: bg }}>
      <div
        style={{
          marginLeft: !full ? `${index * 25}%` : "0",
          width: full ? "100%" : "25%",
          background: color,
        }}
        className="h-full"
      />
    </div>
  );
}
