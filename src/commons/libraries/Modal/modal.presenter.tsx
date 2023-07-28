import * as S from "./modal.styles";
import { IModalUIProps } from "./modal.types";
import { createPortal } from "react-dom";

export default function ModalUI(props: IModalUIProps) {
  const { children, isOpen, handleClose, mounted } = props;

  const modal = isOpen ? (
    <S.Overlay>
      <S.ModalWrapper>
        <S.Modal>
          <S.ModalHeader></S.ModalHeader>
          <S.ModalBody>{children}</S.ModalBody>
          <S.BtnsWrapper>
            <S.ModalCancelBtn
              type="button"
              value="cancel"
              onClick={handleClose}
            >
              취소
            </S.ModalCancelBtn>
            <S.ModalSubmitBtn
              type="button"
              value="confirm"
              onClick={handleClose}
            >
              확인
            </S.ModalSubmitBtn>
          </S.BtnsWrapper>
        </S.Modal>
      </S.ModalWrapper>
    </S.Overlay>
  ) : null;

  return mounted
    ? createPortal(modal, document.querySelector!("#portal")!)
    : null;
}
