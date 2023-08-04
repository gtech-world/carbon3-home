declare namespace ProduceSystemController {
  type ProduceSystemList = Page &{
    records: ListRecords[];
  }

  type ListRecords = {
    createTime: string;
    createUserId?: number;
    description?: string;
    historyList?: ListRecords[];
    id: number;
    imageUrl?: number;
    model?: ModelInfo;
    name?: string;
    org?: string;
    orgId: number;
    partNumber?: number;
    state?: number;
    updateTime?: string;
    updateUser: RecordUpdateUserList;
    updateUserId: number;
    uuid: number;
    version: string;
  }

  type RecordUpdateUserList = {
    address?: string;
    admin: boolean;
    apiKeyId?: number;
    createTime?: string;
    email?: string;
    id?: number;
    lastLoginTime?: string;
    mobile?: string;
    name: string;
    orgId?: number;
    password?: string;
    privateKey?: number;
    publicKey?: number;
    role?: string;
    siteId?: number;
    system: boolean;
    updateTime?: string;
  };

  type ModelInfo = {
    baseModelPath?: string;
    createTime?: string;
    createUserId?: number;
    description?: string;
    id: number;
    state: number;
    lastUpdateUserId?: number;
    modelDbPath?: string;
    modelName: string;
    modelUuid: string;
    paramDetail: string;
    productId: 1;
    productSystemUuid?: string;
    updateTime?: string;
  };
}
