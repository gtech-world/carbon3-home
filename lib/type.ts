export interface Site {
  name: string;
  displayName: string;
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
  organization: {
    id: number;
    name: string;
    imageUrl: string;
    displayName: string;
    type: string;
    sitList: Site[];
    createTime: string;
    updateTime: string;
  };
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
  carbon_emission: number
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
