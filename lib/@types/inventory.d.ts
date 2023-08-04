declare namespace InventoryController {
  interface InventoryAddRealDataModalProps {
    onOpenModal: () => void;
    productId: number;
    realData: (val) => val;
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
    productId:number;
    lcaParamList?: LcaParamList[];
  }
  type LcaParamList = {
    dateTime:string;
    paramName:string;
    paramValue:string;
    processId:string;
  }


  type InventoryList = Page &{
   records:{
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
   }[]
  }

  

}
