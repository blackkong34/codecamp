import styled from "@emotion/styled";

export const Header = styled.section`
  height: 52px;
  background: ${(props) => props.theme.color.white};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: auto;
  max-width: 1280px;
`;

export const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`;

export const HeaderNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

export const NavTab = styled.span`
  padding: 12px 0;
  color: ${(props) => props.theme.color.gray};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.blue};
    border-bottom: 2px solid ${(props) => props.theme.color.blue};
  }
`;

export const MenuLink = styled.a`
  display: block;
  width: 100%;
  font-weight: 500;
`;

export const Login = styled.span`
  background-color: #0f6ca6;
  font-weight: 700;
  border: 1px solid #ced4da;
  background: white;
  color: #ced4da;

  border-radius: 20px;

  padding: ${(props) => props.theme.padding.sm};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #1344ff;
    color: #1344ff;
  }
`;

export const SignUp = styled.span`
  border: 1px solid white;
  padding: ${(props) => props.theme.padding.sm};
  background: ${(props) => props.theme.color.blue};
  border-radius: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: white;
    color: #1344ff;
    border: 1px solid #1344ff;
  }
`;
