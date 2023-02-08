import { Activities } from "@components/items/activity";
import React from "react";

export function MobileActivites(p: { data: any[] }) {
  const { data } = p;
  return (
    <div className="w-full flex flex-col items-center">
      <Activities data={data} />
    </div>
  );
}
