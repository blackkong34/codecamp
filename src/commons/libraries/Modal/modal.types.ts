import { ReactNode } from "react";
import { MouseEvent } from "react";

export interface PortalProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  getValue: (value: string) => void;
}

export interface IModalUIProps {
  children?: ReactNode;
  isOpen?: boolean;
  handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
  mounted: boolean;
}
