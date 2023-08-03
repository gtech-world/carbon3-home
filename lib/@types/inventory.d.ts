
declare namespace InventoryController {
  interface InventoryAddRealDataModalProps {
    onOpenModal: () => void;
    productId: number;
  }
  type InventoryResultModalProps ={
    openResultModal: () => void
  }

  type InventoryProductSystemList = {
    id:number | string;
    name:string;
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

}
