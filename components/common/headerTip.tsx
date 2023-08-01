import { useT } from "@lib/hooks/useT";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useIsMobile, useShowHeadTip } from "./context";

export function useHeaderTipHeight() {
  const { show_header_tip } = useShowHeadTip();
  const isMobile = useIsMobile();
  const [h, setH] = useState(0);
  useEffect(() => {
    const ht = document.getElementById("header-tip");
    const onResize = () => {
      ht && setH(ht.getBoundingClientRect().height);
    };
    let obs: ResizeObserver;
    if (!isMobile && show_header_tip && ht) {
      setH(ht.clientHeight);
      obs = new ResizeObserver(onResize);
      obs.observe(ht);
      onResize();
    }
    return () => {
      obs && ht && obs.unobserve(ht);
    };
  }, [isMobile, show_header_tip]);
  if (isMobile || !show_header_tip) return 0;
  return h;
}

export function HeaderTip() {
  const { show_header_tip, setShowHeaderTip } = useShowHeadTip();
  const { t } = useT();
  const isMobile = useIsMobile();
  if (!show_header_tip) return null;
  return (
    <div
      id="header-tip"
      style={{
        boxShadow: isMobile ? "0px -3px 15px rgba(0, 0, 0, 0.1)" : "none",
        top: isMobile ? "unset" : "0px",
      }}
      className="w-full sticky h-[4.25rem] z-50 flex p-6 bg-white text-black mo:px-5 mo:pt-[.625rem] mo:pb-8 mo:flex mo:flex-col-reverse mo:h-auto mo:fixed mo:bottom-0">
      <div className="flex-1" />
      <div
        className="text-base mo:text-center mo:px-5"
        dangerouslySetInnerHTML={{
          __html: t(
            "The AICP site is under development. This version is for demonstration purpose only and the data is not real. For more information, please contract email hi@gtech.world.",
          ).replace(
            "hi@gtech.world",
            `<a class="underline" target="_blank" href="mailto:hi@gtech.world">hi@gtech.world</a>`,
          ),
        }}
      />
      <div className="flex-1" />
      <FiX
        className="text-xl cursor-pointer flex-shrink-0 mo:self-end mo:text-2xl mo:mb-[.875rem]"
        onClick={() => setShowHeaderTip(false)}
      />
    </div>
  );
}
