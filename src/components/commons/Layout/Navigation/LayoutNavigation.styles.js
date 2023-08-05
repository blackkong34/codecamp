import styled from "@emotion/styled";

export const Navigation = styled.nav`
  width: 100%;
  height: 64px;
  background: #ffd600;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }

  & > ul > li {
    float: left;
    line-height: 64px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;

    &:first-child > a::before {
      display: none;
    }
  }
`;

export const MenuLink = styled.a`
  display: block;
  width: 100%;
  font-weight: 500;

  &::before {
    content: "|";
    margin-right: 40px;
    color: #fff;
  }
`;
