import { useEffect, useState, ReactNode } from "react";
import { MouseEvent } from "react";
import { PortalProps } from "./modal.types";
import ModalUI from "./modal.presenter";

export default function Modal({
  children,
  isOpen,
  onClose,
  getValue,
}: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = (e: MouseEvent<HTMLButtonElement>): void => {
    getValue(e.currentTarget.value);
    // e.preventDefault();
    // onClose();
  };

  return (
    <ModalUI isOpen={isOpen} handleClose={handleClose} mounted={mounted}>
      {children}
    </ModalUI>
  );
}
