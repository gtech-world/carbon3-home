import classNames from "classnames";
import mermaid, { MermaidConfig } from "mermaid";
import { useEffect } from "react";

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: true,
  theme: "forest",
  logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
  },

  themeVariables: {
    primaryColor: "#00ff00",
    primaryTextColor: "#fff",
    primaryBorderColor: "#7C0000",
    lineColor: "black",
    secondaryColor: "#006100",
    tertiaryColor: "#fff",
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 420,
    height: 400,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
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
};

export function Mermaid(p: { className?: string; data?: string; ref?: any }) {
  const { className, data = "", ref } = p;
  mermaid.initialize(DEFAULT_CONFIG);
  useEffect(() => {
    mermaid.contentLoaded();
  }, [data]);
  return (
    <pre ref={ref} className={classNames("mermaid", className)}>
      {data}
    </pre>
  );
}
