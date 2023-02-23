export interface Site {
  name: string;
  displayName: string;
}

export interface Organization {
  id: number;
  name: string;
  imageUrl: string;
  displayName: string;
  type: string;
  sitList: Site[];
  createTime: string;
  updateTime: string;
}

export interface UserData {
  id: number;
  apiKeyId: number;
  name: string;
  password: string;
  role: string;
  authLevel: number;
  lastLoginTime: string;
  loginTime: number;
  createTime: string;
  updateTime: string;
  loginToken: string;
  organization: Organization;
}

export interface Product {
  id: number;
  name: string;
  uuid: string;
  type: string;
  imageUrl: string;
  manufacturingStatus: number;
  displayName: string;
  topLevelPartNumberId: number;
  orgId: number;
  organization: Organization;
  createTime: string;
  updateTime: string;
}

export interface ProductBom {
  id: number;
  partNumber: string;
  partName: string;
  partType: string;
  supplierName: string;
  supplierId: number;
  partDisplayName: string;
  material: string;
  measurement: string;
  extras: string;
  orgId: number;
  parentPartNumberId: number;
  count: number;
  createTime: string;
  updateTime: string;
  children: ProductBom[];

  // code add
  deep: number;
  parent: ProductBom;
}

export interface ActivityType {
  id: number;
  partNumberId: number;
  name: string;
  displayName: string;
  description: string;
  extraInfo: string;
  scope: number;
  processId: number;
  createTime: string;
  updateTime: string;
}

export interface ProductProcess {
  id: number;
  name: string;
  phase: string;
  displayName: string;
  description: string;
  createTime: string;
  updateTime: string;
  activityTypes: ActivityType[];
}

export interface Phase {
  name: string;
  processList: ProductProcess[];
}

export interface InventoryActivity {
  id: 0;
  serialNumber: string;
  partNumberId: 0;
  activityTypeId: 0;
  ghgEmission: 0;
  orgId: 0;
  createTime: "2023-02-15 09:21:23";
  updateTime: "2023-02-15 09:21:23";
}

export interface InventoryActivityType extends ActivityType {
  inventoryActivityList: InventoryActivity[];

  // code add
  carbon_emission: number;
}

export interface InventoryProductProcess extends ProductProcess {
  activityTypes: InventoryActivityType[];

  // code add
  carbon_emission: number;
}

export interface InventoryPhase extends Phase {
  processList: InventoryProductProcess[];
  progress: number; // 0 -> 100
  carbon_emission: number;
}

export interface SbtInfo {
  id: number;
  serialNumber: string;
  productId: number;
  partNumberId: number;
  orgId: number;
  sbtNetwork: string;
  sbtAddress: string;
  sbtTokenId: string;
  sbtMetadataUrl: string;
  sbtMintTimestamp: number;
  createTime: string;
  updateTime: string;
  productName: string;
  imageUrl: string;
}

export interface SbtEmissionInventory {
  id: number;
  name: string;
  phase: string;
  displayName: string;
  description: string;
  createTime: string;
  updateTime: string;
  ghgEmission: number;
}

export interface SbtPhase {
  name: string;
  progress: number; // 0 -> 100
  carbon_emission: number;
  verified: boolean;
}
