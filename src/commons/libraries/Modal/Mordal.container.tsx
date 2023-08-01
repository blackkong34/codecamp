import { ReactNode } from "react";
import ModalUI from "./Modal.presenter";
import { useState } from "react";
import { IModalFormValue } from "./Modal.types";
interface IPortal {
  children: ReactNode;
  getValue: (data: IModalFormValue) => void;
  isOpen: boolean;
  type?: string;
  onToggleModal: () => void;
  setIsModal: boolean;
}
interface IModalData {
  commentPw: string;
}
export default function Modal(props: IPortal): JSX.Element {
  const { children, getValue, isOpen, onToggleModal, type } = props;

  const onClickSubmitModal = (formData: IModalFormValue, e: MouseEvent) => {
    getValue(formData);
    e.preventDefault();
    onToggleModal();
  };

  return (
    <ModalUI
      isOpen={isOpen}
      type={type}
      onClickSubmitModal={onClickSubmitModal}
    >
      {children}
    </ModalUI>
  );
}
