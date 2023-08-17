import { Modal } from "antd";
import styled from "@emotion/styled";

export default function PasswordModal(props: any) {
  const onClose = () => {
    props.setIsOpen(false);
  };

  return (
    <div>
      <Modal
        title="댓글을 삭제하시겠습니까?"
        onOk={props.handleDelete}
        onCancel={onClose}
        open={props.isOpen}
        okText={"확인"}
        cancelText={"취소"}
      >
        패스워드를 입력해주세요
        <PasswordInput
          type="password"
          autoComplete="new-password"
          onChange={props.onChangePassword}
        />
      </Modal>
    </div>
  );
}

export const PasswordInput = styled.input`
  width: 100%;
  margin: 20px 0;
  padding: 10px 16px;
  background: #bdbdbd;
  border-style: none;
  opacity: 0.5;
`;
