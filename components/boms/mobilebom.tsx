import React from "react";
import { BomItem } from "./bom";

export function MobileBom(p: { data: any }) {
  const { data } = p;

  return (
    <div className="w-full bg-white rounded-lg p-5 text-black">
      <div className="text-base font-bold">{data.name}</div>
      {(data.children as any[]).map((node, i) => (
        <BomItem key={`bomItem_${i}`} data={node} />
      ))}
    </div>
  );
}
