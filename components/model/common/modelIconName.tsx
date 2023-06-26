import { ModelIcon } from "./modelIcon";
import React from "react";

export function ModelIconName(p: { type?: string; name?: string; def?: string }) {
  const { type, name, def = "" } = p;
  if (!name) return <>{def}</>;
  if (!type) return <>{name}</>;
  return (
    <div className="flex items-center gap-1">
      <ModelIcon type={type} />
      {name}
    </div>
  );
}
