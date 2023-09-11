declare namespace InventoryController {
  interface InventoryAddRealDataModalProps {
    onOpenModal: () => void;
    realData: (val) => val;
    tableData: InventoryController.InventoryRealDataList[]
    realArr?:LcaParamList[]
  }
  type InventoryResultModalProps ={
    openResultModal: () => void
    getList: () => void
  }

  type InventoryProductSystemList = {
    id:number | string;
    name:string;
  }

  type InventoryRealDataAllList = {
    paramDetail:string
  }

  type InventoryRealDataList = {
    context:InventoryRealDataListContext;
    isProtected:boolean;
    name:string;
    value:number;
    inputValue?:any
  }

  type InventoryRealDataListContext = {
    '@id':string;
    name:string;
    '@type': string;
    category: string;
    flowType:string;
    name:string;
    processType:string
  }

  type uploadResult ={
    loadName:string;
    productId:string;
    lcaParamList?: LcaParamList[];
  }
  type LcaParamList = {
    dateTime:string;
    paramName:string;
    paramValue:string;
    processId:string;
  }


  type InventoryList = Page &{
  records:Records[]
  }

  interface Records  {
    calculateSuccessTime:string
    loadName:string
    loadNumber:string
    operator:string
    orgName:string
    orgSerialNumber:string
    param:string
    paramDetail:string
    productDescription:string
    productName:string
    productUuid:string
    productVersion:string
    state:number
  }

  type InventoryDetail = {
    calculateSuccessTime:string
    createTime?:string
    id:number
    lcaMethodId:number
    lcaResult:string
    lcaTagResult: string
    loadNumber:string
    loadName: string
    modelId:number
    orgId:number
    siteId?:number
    state:number
    updateTime:string
  }

  type ParamDetailType =  { 
  inputData: string;
  data: string 
  }
}
