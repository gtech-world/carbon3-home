import { BomItem } from "./bom";
import { BomUIProps } from "./types";

export function MobileBom(p: BomUIProps) {
  const { node } = p;

  return (
    <div className="w-full bg-white rounded-lg p-5 text-black">
      <div className="text-base font-bold">{node.partDisplayName}</div>
      {(node.children as any[]).map((item, i) => (
        <BomItem key={`bomItem_${i}`} node={item} />
      ))}
    </div>
  );
}
