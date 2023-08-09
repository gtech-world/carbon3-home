
declare namespace VerificationManagementController {
  type VerificationManagementModal = {
    closeModal: (success: boolean) => void;
    recordId?: number;
    type: "new" | "editor" | "verify";
  };

  type ViewVerificationManagementModal = {
    closeModal: () => void;
  }


  type ListPage = {
    current?:number
    optimizeCountSql?:boolean
    orders?:[]
    pages:number
    records:VerificationRecord[]
    searchCount:boolean
    size:number
    total:number
  }

  type VerificationRecord  ={
    attachmentFileList:{
      downloadUrl:string
      fileName:string
    }[],
    createTime?:string,
    createUser:{
      admin:boolean
      id:string
      name:string
      system:boolean
    };
    createUserId:number
    description:string
    id:number;
    inventory:{
      loadName:string
    };
    loadNumber:string
    name:string
    orgId:number;
    organization:{
      id:number
      name:string
    };
    state:number
    updateTime:string 
    uuid:string
    verifyFileList?:[]
    verifyUser:{
      admin:boolean
      id:number
      name:string
      system:boolean
    };
    verifyUserId:number

  }



}
