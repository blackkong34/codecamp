import styled from "@emotion/styled";
import { Rate } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin-top: 40px;
  background-color: #fff;
`;
export const Item = styled.div`
  list-style: none;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  align-items: flex-start;
  gap: 14px;
`;

export const EditIcon = styled(EditOutlined)`
  font-size: 24px;
  color: #dfdfdf;
  cursor: pointer;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  font-size: 24px;
  color: #dfdfdf;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Date = styled.span`
  color: #bdbdbd;
  padding: 20px 0;
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

export const PasswordInput = styled.input`
  width: 100%;
  margin: 20px 0;
  padding: 10px 16px;
  background: #bdbdbd;
  border-style: none;
  opacity: 0.5;
`;
