import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ModalProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  children?: React.ReactNode;
  showButtonClose?: boolean;
}

export const Modal: FC<ModalProps> = ({ title, description, isOpen, onClose, className, showButtonClose = false, children }) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className={cn(`bg-white w-full`, className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
