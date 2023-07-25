import styled from "@emotion/styled";

export const ItemWrapper = styled.ul`
  width: 1200px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
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
// export const Rate = styled.div`;
//   display: flex;
//   justify-content: conter;
//   align-items: center;
//   width: 100%;
// `;
// export const StarIcon = styled.span`
//   display: inline-flex;
//   margin-right: 5px;
// `;
export const WriterBox = styled.div`
  display: flex;
`;
export const Writer = styled.span`
  font-weight: 500;
  padding-right: 16px;
  padding-bottom: 4px;
`;
export const Contents = styled.span`
  color: #4f4f4f;
`;
export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
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
