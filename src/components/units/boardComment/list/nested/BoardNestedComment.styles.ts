import styled from "@emotion/styled";
import arrowRight from "/public/assets/icons/comment/arrow_right.svg";
import Answer from "/public/assets/icons/comment/question_answer.svg";

export const NestedWrapper = styled.section`
  margin: 20px 0 20px 60px;
`;

export const FlexWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NestedItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ArrowIcon = styled(arrowRight)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export const ItemMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-bottom: 4px;
`;

export const Writer = styled.span`
  font-weight: 500;
  white-space: nowrap;
`;

export const Contents = styled.span`
  color: #4f4f4f;
`;

export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const AnswerIcon = styled(Answer)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BodyMiddle = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const BodyWrite = styled.div`
  width: 1095px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const InputTextarea = styled.textarea`
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Count = styled.span`
  height: 100%;
  padding: 14px 20px;
  color: #bdbdbd;
  font-size: 16px;
`;

export const SubmitBtn = styled.button`
  padding: 14px 16px;
  background: #ffd600;
  border: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
export const Error = styled.span`
  font-size: 14px;
  color: red;
`;
