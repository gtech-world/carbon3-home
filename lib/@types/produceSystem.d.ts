declare namespace ProduceSystemController {

  interface ProduceSystemList {
    countId?:number;
    current?:number;
    maxLimit?:number;
    optimizeCountSql?:boolean;
    orders?:[];
    pages?:number;
    records:ListRecords[];
    searchCount?:boolean;
    size:number;
    total:number;
  }

  type ListRecords = {
    createTime:string
    createUserId?:number
    description?:string
    historyList?:[]
    id:number
    imageUrl?:number
    model?:string
    name?:string
    org?:string
    orgId:number
    partNumber?:number
    state?:number
    updateTime?:string
    updateUser:RecordUpdateUserList[]
    updateUserId:number
    uuid:number
    version:string
  }

  type RecordUpdateUserList = {
    address?:string
    admin:boolean
    apiKeyId?:number
    createTime?:string
    email?:string
    id?:number
    lastLoginTime?:string
    mobile?:string
    name:string
    orgId?:number
    password?:string
    privateKey?:number
    publicKey?:number
    role?:string
    siteId?:number
    system:boolean
    updateTime?:string
  }
}