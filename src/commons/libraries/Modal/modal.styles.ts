import styled from "@emotion/styled";
//모달
export const Overlay = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 5;
`;
export const ModalWrapper = styled.div`
  width: 480px;
  aspect-ratio: 5/2;
  margin: 0 auto;
`;
export const Modal = styled.div`
  background: white;
  width: inherit;
  height: 100%;
  border-radius: 20px;
  /* overflow: hidden; */
  position: relative;
`;
export const ModalHeader = styled.header`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  font-size: 25px;
`;
export const ModalBody = styled.header`
  padding: 0 20px;
`;
export const BtnsWrapper = styled.div`
  width: inherit;
  height: 30%;
  position: absolute;
  left: 0;
  bottom: 0;
`;
export const ModalCancelBtn = styled.button`
  background: #fff;
  width: 50%;
  height: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    background: #bdbdbd;
    color: #fff;
  }
`;

export const ModalSubmitBtn = styled(ModalCancelBtn)`
  color: red;
`;
