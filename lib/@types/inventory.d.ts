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
    loadName:string
    productId:number,
    lcaParamList:{
      dateTime:string
      paramName:string
      paramValue:string
      processId:string
    }
  }

}
