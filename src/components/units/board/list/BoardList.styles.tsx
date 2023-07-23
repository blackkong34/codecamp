import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

export const Header = styled.header`
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 80px;
`;

export const Card = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;

  &:hover > img {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }

  &:hover > div > h2 {
    text-decoration: underline;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

export const CardContents = styled.div`
  width: 100%;
  height: 137px;
  padding: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  text-align: center;
`;

export const CardWriter = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const CardCreatedAt = styled.span`
  font-size: 12px;
  color: #828282;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Like = styled(Icon)`
  margin-bottom: 2px;
`;

export const Count = styled.span`
  font-weight: 400;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const BodyHeader = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const Search = styled.input`
  width: 776px;
  height: 52px;
  padding: 14px;
  background: #f2f2f2;
  border-style: none;
  border-radius: 10px;
  flex-shrink: 0;

  &::placeholder {
    background-image: url("/assets/icons/search.png");
    color: #000;
    font-weight: 400;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 1px center;
    text-indent: 32px;
  }
`;
export const DateBox = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;
export const Date = styled.input`
  margin: 0;
  border-style: none;
  text-align: center;
  position: relative;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &::before {
    content: attr(data-placeholder);
    width: 100%;
    color: #bdbdbd;
  }

  &:valid::before {
    display: none;
  }
`;
export const DateLine = styled.span`
  margin: 0 8px;
  color: #bdbdbd;
`;
export const SubmitBtn = styled.button`
  width: 94px;
  height: 52px;
  padding: 14px 16px;
  background: #000;
  border-radius: 10px;
  border-style: none;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;
export const BodyTable = styled.table`
  width: 100%;
  margin-bottom: 54px;
  border-collapse: collapse;
  border: 1px solid #000;
  border-left: none;
  border-right: none;
`;
export const Row = styled.tr`
  padding: 11px 0;
  height: 52px;
`;
export const HeaderBasic = styled.th`
  width: 15%;
  font-size: 18px;
  font-weight: 500;
`;
export const HeaderTitle = styled(HeaderBasic)`
  width: 55%;
`;
export const Column = styled.td`
  font-weight: 400;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-left: none;
  border-right: none;
`;
export const ColumnTitle = styled(Column)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const Pagination = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const PageNum = styled.span`
  color: #4f4f4f;
`;
export const NewBtn = styled.button`
  width: 171px;
  height: 52px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  top: -50%;
  cursor: pointer;
`;
