import autoAnimate, { AutoAnimateOptions, AutoAnimationPlugin } from "@formkit/auto-animate";
import { MutableRefObject, useEffect } from "react";

export type AutoAnimPluginsKeys = "rt-scale"|'t-side';
export const AutoAnimPlugins: { [k in AutoAnimPluginsKeys]: AutoAnimationPlugin } = {
  "rt-scale": (el, action) => {
    return new KeyframeEffect(
      el,
      [
        ...(action === "add"
          ? [
              { transform: "scale(0)", "transformOrigin": "100% 0", opacity: 0 },
              { transform: "scale(1)", "transformOrigin": "100% 0", opacity: 1 },
            ]
          : action === "remove"
          ? [
              { transform: "scale(1)", "transformOrigin": "100% 0", opacity: 1 },
              { transform: "scale(0)", "transformOrigin": "100% 0", opacity: 0 },
            ]
          : []),
      ],
      { duration: 300, easing: "ease-in-out" }
    );
  },
  "t-side": (el, action) => {
    return new KeyframeEffect(
      el,
      [
        ...(action === "add"
          ? [
              { transform: "scaleY(0)", "transformOrigin": "0 0", opacity: 0 },
              { transform: "scaleY(1)", "transformOrigin": "0 0", opacity: 1 },
            ]
          : action === "remove"
          ? [
              { transform: "scaleY(1)", "transformOrigin": "0 0", opacity: 1 },
              { transform: "scaleY(0)", "transformOrigin": "0 0", opacity: 0 },
            ]
          : []),
      ],
      { duration: 300, easing: "ease-in-out" }
    );
  },
};

export function useAutoAnim<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  config?: Partial<AutoAnimateOptions> | AutoAnimationPlugin | AutoAnimPluginsKeys
) {
  useEffect(() => {
    ref.current && autoAnimate(ref.current, typeof config === "string" ? AutoAnimPlugins[config] : config);
  });
}
