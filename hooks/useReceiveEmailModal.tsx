import { create } from "zustand";

interface ReceiveEmailModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useReceiveEmailModal = create<ReceiveEmailModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useReceiveEmailModal;
