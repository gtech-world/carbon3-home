
declare namespace VerificationManagementController {
  type VerificationManagementModal = {
    closeModal: (success: boolean) => void;
    recordId?: number;
    type: "new" | "editor" | "verify";
  };

  type ViewVerificationManagementModal = {
    closeModal: () => void;
    fileList:AttachmentFileList[]
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
  type AttachmentFileList = {
    downloadUrl:string
    fileName:string
  }

  type VerificationRecord  ={
    attachmentFileList:AttachmentFileList[]
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
    verifyFileList:{
      fileName: string,
      downloadUrl: string
    }[]
    verifyUser:{
      admin:boolean
      id:number
      name:string
      system:boolean
    };
    verifyUserId:number

  }



}
