import { Loading } from "@components/common/loading";
import { Modal } from "@components/common/modal";
import { Attrs } from "@components/items/attrs";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getProductBomActivityTypes } from "@lib/http";
import { HTMLAttributes, MouseEventHandler, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useToggle } from "react-use";
import { PartInfos } from "./pcbom";
import { BomUIProps } from "./types";

export function BomNodeModal(p: BomUIProps & { onBack: MouseEventHandler<HTMLButtonElement> }) {
  const { node, onBack } = p;
  const { t } = useTranslation();
  const { value: actTypes, loading } = useAsyncM(() => getProductBomActivityTypes(node.id), [node.id]);
  const currentAttrs = useMemo(() => {
    if (!actTypes) return [];
    return actTypes.map((item) => ({
      title: item.displayName,
      sub: item.name,
    }));
  }, [actTypes]);

  return (
    <Modal className="">
      <div className="sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white">
        <button className="text-2xl" onClick={onBack}>
          <IoChevronBackOutline />
        </button>
        <span className="flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4">
          {node.partDisplayName}
        </span>
        <div className="w-6" />
      </div>
      <div className="p-5">
        {(node.children as any[]).map((node, i) => (
          <BomItem key={`bomItem_${i}`} node={node} />
        ))}
        {(node.children as any[]).length > 0 && <div className="h-5" />}
        <PartInfos node={node} />
        <div className="text-[.9375rem] font-bold mt-5 mb-[.875rem]">{t("Attributable to Carbon Activities")}:</div>
        {loading && <Loading />}
        {currentAttrs.map((attr, i) => (
          <Attrs key={`attrs_${i}`} {...attr} />
        ))}
      </div>
    </Modal>
  );
}

export function BomItem(p: BomUIProps & HTMLAttributes<HTMLDivElement>) {
  const { node } = p;
  const [open, toggle] = useToggle(false);
  return (
    <div
      onClick={() => {
        toggle(true);
        console.info("open bom modal");
      }}
      className="cursor-pointer flex justify-between items-end w-full px-5 py-3 border border-solid border-black rounded-lg [&:nth-child(n+2)]:mt-5"
    >
      <div className="text-lg flex-grow-0 whitespace-nowrap overflow-hidden text-ellipsis">{node.partDisplayName}</div>
      <IoChevronForwardOutline className="text-2xl flex-shrink-0" />
      {open && (
        <BomNodeModal
          node={node}
          onBack={(e) => {
            toggle(false);
            console.info("close bom modal");
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}
