export enum ModelType {
  PRODUCT_SYSTEM = "PRODUCT_SYSTEM",
  PROCESS = "PROCESS",
  FLOW = "FLOW",
  EPD = "EPD",

  // indicators and parameters,
  IMPACT_METHOD = "IMPACT_METHOD",
  IMPACT_CATEGORY = "IMPACT_CATEGORY",
  SOCIAL_INDICATOR = "SOCIAL_INDICATOR",
  PARAMETER = "PARAMETER",
  DQ_SYSTEM = "DQ_SYSTEM",

  // background data
  FLOW_PROPERTY = "FLOW_PROPERTY",
  UNIT_GROUP = "UNIT_GROUP",
  CURRENCY = "CURRENCY",
  ACTOR = "ACTOR",
  SOURCE = "SOURCE",
  LOCATION = "LOCATION",
}

export type Category = {
  id: number;
  refId: string;
  name: string;
  modelType: string;
  version: number;
  lastChange: number;
  fromLibrary: boolean;
  childCategories: Category[];

  category?: Category;
};

export type Ref = { $ref?: string; $refObj?: any };
export type RefCategory = {
  id?: number;
  refId?: string;
  name?: string;
  modelType?: string;
  version?: number;
  lastChange?: number;
  fromLibrary?: boolean;
  childCategories?: RefCategory[];
  category?: RefCategory;
} & Ref;

export type Descriptor = {
  refId: string;
  id: number;
  name: string;
  version: number;
  lastChange: number;
  library?: string;
  tags?: string;
  type: string;
  category?: number;

  fromLibrary?: boolean;
  flowType?: string;
  location?: number;
  processType?: string;
  refFlowPropertyId?: number;
  categoryType?: string;
  code?: string;
};

export type NavNode = {
  id: string;
  children: NavNode[];
  data?: Category | Descriptor;
  type: "folder" | "content";
  modelType: string;
  name: string;
};
