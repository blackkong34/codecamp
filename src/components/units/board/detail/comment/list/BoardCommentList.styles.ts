import styled from "@emotion/styled";

export const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;
export const ItemWrapper = styled.ul`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  width: 1200px;
`;
export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const Avatar = styled.img`
  width: 48px;
  margin-right: 12px;
`;
export const ItemMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 1100px;
  flex-grow: 1;
`;
export const Writer = styled.span`
  font-weight: 500;
  margin-right: 16px;
`;
export const Star = styled.span`
  width: 24px;
  height: 24px;
`;
export const WriterBox = styled.div`
  display: flex;
`;
export const Contents = styled.span`
  color: #4f4f4f;
`;
export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Date = styled.span`
  color: #bdbdbd;
  padding-top: 20px;
`;
