import { ModelType } from '@lib/@types/lca';


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
}