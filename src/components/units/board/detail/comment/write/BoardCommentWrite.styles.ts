import styled from "@emotion/styled";

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
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
`;
export const InputText = styled.input`
  width: 180px;
  height: 52px;
  padding: 14px 0;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
`;
export const StarWrapper = styled.input`
  display: inline-block;
  position: relative;
  font-size: 24px;
  color: #bdbdbd;
  padding-bottom: 6px;
`;
export const Star = styled.span`
  width: 0;
  position: absolute;
  left: 0;
  color: red;
  overflow: hidden;
  pointer-events: none;
  cursor: pointer;
`;
export const BodyMiddle = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  margin-bottom: 40px;
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

export const BodyBottom = styled.div`
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
  width: 95=7px;
  height: 100%;
  padding: 14px 16px;
  background: #000;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
