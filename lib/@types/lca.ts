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

export type UncertaintyType = "NONE" | "LOG_NORMAL" | "NORMAL" | "UNIFORM" | "TRIANGLE";

export type Uncertainty = {
  distributionType: UncertaintyType;
  parameter1: number;
  parameter2: number;
  parameter3: number;
};

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

  fromMethod?: boolean;
};

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

  fromMethod?: boolean;
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
  tags?: string;
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
  description: string;
  tags?: string;
  documentation?: any;
  location: Location;
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
  dqSystem?: DqSystem;
  exchangeDqSystem?: DqSystem;
  socialDqSystem?: DqSystem;
  dqEntry?: string;
};

export type Flow = {
  category: Category;
  flowPropertyFactors: any[];
  flowProperty?: FlowProperty;
  flowType: string;
  fromLibrary: boolean;
  description: string;
  tags?: string;
  id: number;
  infrastructureFlow: boolean;
  lastChange: number;
  name: string;
  refId: string;
  referenceFactor: any;
  referenceFlowProperty: any;
  referenceUnit: any;
  casNumber?: string;
  formula?: string;
  synonyms?: string;
  location?: Location;
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
  description: string;
  tags?: string;
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

export type ImpactFactor = {
  flow: Flow;
  formula?: string;
  flowPropertyFactor: any;
  id: number;
  unit: UnitGroup;
  value: number;
  uncertainty?: Uncertainty;
};
export type ImpactCategory = {
  name: string;
  category?: Category;
  description: string;
  tags?: string;
  source?: Source;
  code?: string;
  impactFactors?: ImpactFactor[];
  referenceUnit: string;
  isInput?: boolean;
  direction?: "INPUT" | "OUTPUT";
};

export type ImpactMethod = {
  name: string;
  category?: Category;
  description: string;
  tags?: string;
  source?: Source;
  code?: string;
  impactCategories?: ImpactCategory[];
};
