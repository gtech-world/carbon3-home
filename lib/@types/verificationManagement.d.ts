declare namespace VerificationManagementController {

  type VerificationManagementModal = {
    closeModal: () => void;
    editInfoData?: any;
    title: string;
    isSingle?:boolean
    singleBtnTitle?:string
  }

  type ViewVerificationManagementModal = {
    closeModal: () => void;
  }




}