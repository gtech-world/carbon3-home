import { ModelType, Uncertainty } from "@lib/@types/lca";

export const ModelTypeName = {
  [ModelType.PRODUCT_SYSTEM]: "Product systems",
  [ModelType.PROCESS]: "Processes",
  [ModelType.FLOW]: "Flows",
  [ModelType.EPD]: "EPDs",

  [ModelType.IMPACT_METHOD]: "Impact assessment methods",
  [ModelType.IMPACT_CATEGORY]: "Impact categories",
  [ModelType.SOCIAL_INDICATOR]: "Social indicators",
  [ModelType.PARAMETER]: "Global parameters",
  [ModelType.DQ_SYSTEM]: "Data quality systems",

  [ModelType.FLOW_PROPERTY]: "Flow properties",
  [ModelType.UNIT_GROUP]: "Unit groups",
  [ModelType.CURRENCY]: "Currencies",
  [ModelType.ACTOR]: "Actors",
  [ModelType.SOURCE]: "Sources",
  [ModelType.LOCATION]: "Locations",
};

export function flowTypeName(type: string) {
  if (!type) return "";
  if (type === "PRODUCT_FLOW") return "Product";
  if (type === "ELEMENTARY_FLOW") return "Elementary flow";
  return "Waste";
}

export function uncertaintyName(uncert?: Uncertainty) {
  if (!uncert) return "none";
  const { parameter1, parameter2, parameter3 } = uncert;
  switch (uncert.distributionType) {
    case "LOG_NORMAL":
      return `lognormal: gmean=${parameter1} gsigma=${parameter2}`;
    case "NORMAL":
      return `normal: gmean=${parameter1} sigma=${parameter2}`;
    case "UNIFORM":
      return `uniform: min=${parameter1} max=${parameter2}`;
    case "TRIANGLE":
      return `triangular: min=${parameter1} mode=${parameter2} max=${parameter3}`;
    default:
      return "none";
  }
}
