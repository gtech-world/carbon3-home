import { useT } from "@lib/hooks/useT";
import { FiX } from "react-icons/fi";
import { useShowHeadTip } from "./context";

export function HeaderTip() {
  const { show_header_tip, setShowHeaderTip } = useShowHeadTip();
  const { t } = useT();
  if (!show_header_tip) return null;
  return (
    <div className="w-full mo:hidden h-[4.25rem] relative z-50 flex p-6 bg-white text-black">
      <div className="flex-1" />
      <div
        className="text-base"
        dangerouslySetInnerHTML={{
          __html: t(
            "The AICD site is under development. This version is for demonstration purpose only and the data is not real. For more information, please contract email hi@gtech.world."
          ).replace(
            "hi@gtech.world",
            `<a class="underline" target="_blank" href="mailto:hi@gtech.world">hi@gtech.world</a>`
          ),
        }}
      />
      <div className="flex-1" />
      <FiX className="text-xl cursor-pointer" onClick={() => setShowHeaderTip(false)} />
    </div>
  );
}
