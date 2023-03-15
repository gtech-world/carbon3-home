import autoAnimate, { AutoAnimateOptions, AutoAnimationPlugin } from "@formkit/auto-animate";
import { MutableRefObject, useEffect, useRef } from "react";

export type AutoAnimPluginsKeys = "t-side" | "scale";
export const AutoAnimPlugins: { [k in AutoAnimPluginsKeys]: AutoAnimationPlugin } = {
  "t-side": (el, action) => {
    return new KeyframeEffect(
      el,
      [
        ...(action === "add"
          ? [
              { transform: "scaleY(0)", transformOrigin: "0 0", opacity: 0 },
              { transform: "scaleY(1)", transformOrigin: "0 0", opacity: 1 },
            ]
          : action === "remove"
          ? [
              { transform: "scaleY(1)", transformOrigin: "0 0", opacity: 1 },
              { transform: "scaleY(0)", transformOrigin: "0 0", opacity: 0 },
            ]
          : []),
      ],
      { duration: 300, easing: "ease-in-out" }
    );
  },
  scale: (el, action) => {
    return new KeyframeEffect(
      el,
      [
        ...(action === "add"
          ? [
              { transform: "scale(0.8)", opacity: 0 },
              { transform: "scale(1)", opacity: 1 },
            ]
          : action === "remove"
          ? [
              { transform: "scale(1)", opacity: 1 },
              { transform: "scale(0.8)", opacity: 0 },
            ]
          : []),
      ],
      { duration: 300, easing: "ease-in-out" }
    );
  },
};

export function useAutoAnim<T extends HTMLElement | null>(
  config: Partial<AutoAnimateOptions> | AutoAnimationPlugin | AutoAnimPluginsKeys = "scale"
) {
  const ref: MutableRefObject<T | null> = useRef<T>(null);
  useEffect(() => {
    ref.current && autoAnimate(ref.current, typeof config === "string" ? AutoAnimPlugins[config] : config);
  }, [ref.current]);
  return ref;
}
