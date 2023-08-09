declare namespace VerificationManagementController {
  type VerificationManagementModal = {
    closeModal: (success: boolean) => void;
    recordId?: number;
    type: "new" | "editor" | "verify";
  };

  type ViewVerificationManagementModal = {
    closeModal: () => void;
  };
}
