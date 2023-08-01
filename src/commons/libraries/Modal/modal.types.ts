import { ReactNode, ReactPortal } from "react";
import { MouseEvent } from "react";

// export interface IPortalProps {
//   children: ReactNode | JSX.Element;
//   isOpen?: boolean;
//   onClose?: () => void;
//   getValue?: (value: string) => void;
// }

// export interface IModalUIProps {
//   children?: ReactNode;
//   isOpen?: boolean;
//   handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
//   mounted: boolean;
// }

export interface IModalFormValue {
  commentPw: string;
}

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  type?: string;
  onClickSubmitModal?: (formData: IModalFormValue, e: MouseEvent) => void;
  // onToggleModal?: () => void;
}
