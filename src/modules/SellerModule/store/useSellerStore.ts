import { create } from "zustand";
import { LegalProfileResponseData } from "../../../shared/interfaces";

interface SellerStore {
  legalFormMode: "create" | "update";
  setLegalFormMode: (v: "create" | "update") => void;

  editingLegalProfile: LegalProfileResponseData | null;
  setEditingLegalProfile: (v: LegalProfileResponseData | null) => void;

  showLegalProfileFormDrawer: boolean;
  setShowLegalProfileFormDrawer: (v: boolean) => void;

  showShopDrawer: boolean;
  setShowShopDrawer: (v: boolean) => void;

  showVerificationDrawer: boolean;
  setShowVerificationDrawer: (v: boolean) => void;
}

export const useSellerStore = create<SellerStore>((set) => ({
  legalFormMode: "create",
  setLegalFormMode: (v) => set({ legalFormMode: v }),

  editingLegalProfile: null,
  setEditingLegalProfile: (v) => set({ editingLegalProfile: v }),

  showLegalProfileFormDrawer: false,
  setShowLegalProfileFormDrawer: (v) => set({ showLegalProfileFormDrawer: v }),

  showShopDrawer: false,
  setShowShopDrawer: (v) => set({ showShopDrawer: v }),

  showVerificationDrawer: false,
  setShowVerificationDrawer: (v) => set({ showVerificationDrawer: v }),
}));
