import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-left: 12px;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BodyTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  padding-bottom: 20px;
`;
export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 14px;
`;
export const InputText = styled.input`
  width: 180px;
  height: 52px;
  padding: 14px 0;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
`;

export const Star = styled(Rate)`
  padding-top: 8px;
`;

export const BodyMiddle = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  position: relative;
`;

export const InputTextarea = styled.textarea`
  width: 100%;
  height: 67%;
  border: none;
  font-size: 16px;
  padding: 20px;
  border-bottom: 1px solid #f2f2f2;
  resize: none;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Count = styled.span`
  height: 100%;
  padding: 14px 20px;
  color: #bdbdbd;
  font-size: 16px;
`;

export const SubmitBtn = styled.button`
  width: 97px;
  height: 100%;
  padding: 14px 16px;
  background: #000;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
export const Error = styled.span`
  font-size: 14px;
  color: red;
`;
