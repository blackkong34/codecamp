import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 102px 100px 102px;
  width: 1200px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  padding-bottom: 60px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const WriteWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InputWrapper2 = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Label = styled.span`
  display: inline-block;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const User = styled.input`
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Content = styled.textarea`
  height: 480px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  resize: none;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Zipcode = styled.input`
  width: 77px;
  margin-right: 16px;
  padding: 14px 16px;
`;

export const ZipcodeBtn = styled.button`
  padding: 14px 16px;
  background: #000;
  color: #fff;
  border-style: none;
  cursor: pointer;
`;

export const Address = styled.input`
  padding: 14px 16px;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PicUpload = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: none;
  background: #bdbdbd;
  color: #4f4f4f;
  font-size: 12px;
  cursor: pointer;
`;

export const Plus = styled.span`
  font-size: 24px;
  color: #4f4f4f;
`;

export const SettingWrapper = styled.div`
  width: 996px;
`;

export const RadioBtn = styled.input`
  margin-right: 8px;
`;

export const RadioLabel = styled.label`
  font-weight: 500;
  margin-right: 20px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
export const CancealBtn = styled.button`
  padding: 14px 60px;
  background: #bdbdbd;
  color: #4f4f4f;
  font-weight: 500;
  border-style: none;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  padding: 14px 60px;
  background: ${(props) => (props.disabled ? "#BDBDBD" : "#FFD600")};
  color: black;
  font-weight: 500;
  border-style: none;
  cursor: ${(props) => (props.disabled ? "default " : "pointer")};
`;

export const Error = styled.span`
  font-size: 14px;
  color: red;
`;
