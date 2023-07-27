import styled from "@emotion/styled";
import { Rate } from "antd";

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
export const StarRate = styled(Rate)`
  padding-bottom: 5px;
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
