import LayoutHeader from "./Header/LayoutHeader.container";
import LayoutBanner from "./Banner/LayoutBanner.container";
import LayoutNavigation from "./Navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
// import { useRouter } from "next/router";

const Body = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
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
      {/* <LayoutHeader /> */}
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
    </>
  );
}
