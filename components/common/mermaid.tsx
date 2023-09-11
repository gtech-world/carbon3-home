import classNames from "classnames";
import mermaid, { MermaidConfig } from "mermaid";
import { useEffect, useMemo, useRef } from "react";
import { useDebounce, useMeasure } from "react-use";
import panzoom from "svg-pan-zoom";

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: true,
  theme: "default",
  logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
  },

  themeVariables: {
    // primaryColor: "#00ff00",
    // primaryTextColor: "#000",
    // primaryBorderColor: "#7C0000",
    // lineColor: "black",
    // secondaryColor: "#006100",
    // tertiaryColor: "#fff",
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 800,
    height: 200,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
    wrapPadding: 20,
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 16,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
  },
  class: {
    titleTopMargin: 20,
    defaultRenderer: "dagre-wrapper",
  },
  pie: {},
};

const refCount = {
  count: 1,
};
export function Mermaid(p: { className?: string; data?: string }) {
  const { className, data = "" } = p;
  const id = useMemo(() => `aicp_mermaid_${refCount.count++}`, []);
  const renderData = async () => {
    try {
      const el = document.querySelector("#" + id);
      if (!el) return;
      mermaid.initialize(DEFAULT_CONFIG);
      const { svg, bindFunctions } = await mermaid.render(id + "-svg", data);
      el.innerHTML = svg;
      bindFunctions?.(el);
      const svgel = document.getElementById(id + "-svg");
      if (!svgel) return;
      svgel.setAttribute("height", "100%");
      svgel.style.maxWidth = "100%";
      panzoom(svgel, { mouseWheelZoomEnabled: false, zoomEnabled: true, controlIconsEnabled: true });
    } catch (error) {
      console.error(error);
    }
  };
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  useDebounce(renderData, 300, [width, data]);
  return <div ref={ref} id={id} className={classNames("mermaid p-2.5", className)} />;
}

export default Mermaid;
