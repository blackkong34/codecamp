import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
`;

export const NewBoard = styled.a`
  margin-left: calc(100% - 180px);
  margin-bottom: 25px;
  max-width: 180px;
  padding: 14px;
  border: 1px solid ${(props) => props.theme.color.blue};
  border-radius: 10px;
  background: ${(props) => props.theme.color.white};
  text-align: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffd600;
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.blue};
    transition: all 0.2s ease-in-out;
  }
`;

export const BodyHeader = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;

export const SearchBar = styled.input`
  flex: 1 1 0;
  max-width: 840px;
  padding: ${(props) => props.theme.padding.sm};
  border-radius: 10px;
  background: ${(props) => props.theme.color.white};

  &::placeholder {
    background: url("/assets/icons/search.png") no-repeat 1px center;
    background-size: contain;
    text-indent: 32px;
  }
`;

export const DateBox = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 230px;
  margin-right: 8px;
  padding: ${(props) => props.theme.padding.sm};
  border: 1px solid #bdbdbd;

  > span {
    margin: 0 8px;
    color: #bdbdbd;
  }
`;

export const Date = styled.input`
  position: relative;
  text-align: center;

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

export const SearchBtn = styled.button`
  padding: ${(props) => props.theme.padding.sm};
  border-radius: 10px;
  border: 1px solid #000;
  background: #000;
  font-weight: 500;
  color: #fff;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
    background: #fff;
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export const Card = styled.div`
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.1);
    transform: translate(-1px, -3px);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;

  & > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 42px;
`;

export const CreatedAt = styled.span`
  font-size: 12px;
  color: #828282;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;

  & > h2 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }

  & > img {
    width: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
`;

export const Overflow = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgb(255, 255, 255) 100%
  );
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const Like = styled.img`
  width: 24px;
  height: 24px;
  text-align: center;
`;
