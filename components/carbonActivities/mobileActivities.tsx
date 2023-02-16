import { Activities } from "@components/items/activity";
import React from "react";
import { ActivityUIProps } from "./types";

export function MobileActivites(p: ActivityUIProps) {
  const { data } = p;
  return (
    <div className="w-full flex flex-col items-center">
      <Activities data={data} />
    </div>
  );
}
