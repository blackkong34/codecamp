import * as S from "./Modal.styles";
import { IModalProps } from "./Modal.types";
import { useForm, Controller } from "react-hook-form";

export default function Modal(props: IModalProps) {
  const { children, isOpen, type, onClickSubmitModal } = props;

  const { register, control, handleSubmit } = useForm<IModalProps>();

  return isOpen ? (
    <S.Overlay>
      <S.ModalWrapper>
        <S.Modal>
          <S.ModalHeader>{children}</S.ModalHeader>
          <S.ModalBody>
            {/* <S.ModalBody>
            <span>{children}</span> */}
            {type && type === "password" && (
              <Controller
                control={control}
                name="commentPw"
                render={({ field }) => (
                  <input
                    {...field}
                    autoComplete="off"
                    placeholder="비밀번호를 입력해주세요"
                  />
                )}
              />
            )}
            <S.BtnsWrapper>
              <S.ModalCancelBtn
                type="button"
                value="cancel"
                // onClick={handleClose}
              >
                취소
              </S.ModalCancelBtn>
              <S.ModalSubmitBtn
                type="submit"
                value="confirm"
                // onClick={onClickSubmitModal}
              >
                확인
              </S.ModalSubmitBtn>
            </S.BtnsWrapper>
          </S.ModalBody>
        </S.Modal>
      </S.ModalWrapper>
    </S.Overlay>
  ) : (
    <></>
  );
}
