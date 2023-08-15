import styled from "@emotion/styled";

export const Pagination = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  & > span {
    color: #4f4f4f;
    cursor: pointer;
  }
`;

export const PageNum = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#1344ff" : "#4f4f4f")};
  border: 1px solid ${(props) => (props.isActive ? "#1344ff" : "none")};
  padding: 5px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;
