import LayoutHeader from "./Header/LayoutHeader.container";
import LayoutBanner from "./Banner/LayoutBanner.container";
import styled from "@emotion/styled";
// import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  background: rgb(249, 249, 249);
  font-family: "Noto Sans KR", sans-serif;
`;

// const HIDDEN_COMMON = [];
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  // const router = useRouter();
  // const isHiddenHeader = HIDDEN_COMMON.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {/* <LayoutBanner /> */}
      <Body>
        <div>{props.children}</div>
      </Body>
    </>
  );
}
