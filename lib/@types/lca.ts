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

export type ProcessLink = {
  exchangeId: number;
  flowId: number;
  processId: number;
  providerId: number;
  providerType: number;
};
export type ProductSystem = {
  category: Category;
  description: string;
  fromLibrary: boolean;
  id: number;
  lastChange: number;
  name: string;
  parameterSets: any[];
  process: boolean;
  processLinks: ProcessLink[];
  processes: number[];
  productSystem: boolean;
  refId: string;
  referenceExchange: any;
  referenceProcess: any;
  targetAmount: number;
  targetFlowPropertyFactor: any;
  targetUnit: any;
  version: number;
};

export type Process = {
  allocationFactors: any[];
  category: Category;
  documentation: any;
  exchanges: any[];
  fromLibrary: boolean;
  id: number;
  infrastructureProcess: boolean;
  lastChange: number;
  lastInternalId: number;
  name: string;
  parameters: any[];
  process: boolean;
  processType: string;
  productSystem: boolean;
  quantitativeReference: any;
  refId: string;
  socialAspects: any[];
  version: number;
};

export type Flow = {
  category: Category;
  flowPropertyFactors: any[];
  flowType: string;
  fromLibrary: boolean;
  id: number;
  infrastructureFlow: boolean;
  lastChange: number;
  name: string;
  refId: string;
  referenceFactor: any;
  referenceFlowProperty: any;
  referenceUnit: any;
  version: number;
};

export type DqSystem = {
  fromLibrary: boolean;
  hasUncertainties: boolean;
  id: number;
  indicators: any[];
  lastChange: number;
  name: string;
  refId: string;
  scoreCount: number;
  version: number;
};

export type FlowProperty = {
  category: Category;
  flowPropertyType: string;
  fromLibrary: boolean;
  id: number;
  infrastructureFlow: boolean;
  lastChange: number;
  name: string;
  refId: string;
  referenceUnit: any;
  unitGroup: UnitGroup;
  version: number;
};

export type UnitGroup = {
  category: Category;
  defaultFlowProperty: FlowProperty;
  fromLibrary: boolean;
  id: number;
  lastChange: number;
  name: string;
  refId: string;
  referenceUnit: any;
  units: any[];
};

export type Actore = {
  address: string;
  category: Category;
  email: string;
  fromLibrary: boolean;
  id: number;
  lastChange: number;
  name: string;
  refId: string;
  telefax: string;
  telephone: string;
  version: number;
  website: string;
};

export type Source = {
  category: Category;
  externalFile: string;
  fromLibrary: boolean;
  id: number;
  lastChange: number;
  name: string;
  refId: string;
  textReference: string;
  version: number;
};

export type Location = {
  code: string;
  description: string;
  fromLibrary: boolean;
  geodata: string;
  id: number;
  lastChange: number;
  latitude: number;
  longitude: number;
  name: string;
  refId: string;
  version: number;
};
