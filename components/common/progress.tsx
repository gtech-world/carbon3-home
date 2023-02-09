import classNames from "classnames";

export function Progress(p: { value: number; bg?: string; color?: string; className?: string }) {
  const { value, bg = "#dddddd", color = "#227A30", className } = p;
  return (
    <div className={classNames(className, "w-full h-[.625rem]")} style={{ background: bg }}>
      <div style={{ width: `${value}%`, transition: "width 200ms ease", background: color }} className="h-full" />
    </div>
  );
}
