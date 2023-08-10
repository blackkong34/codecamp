import * as S from "./LayoutHeader.styles";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationMenu = [
  { id: "boards", name: "자유게시판", path: "/boards" },
  { id: "usedMarket", name: "중고마켓", path: "/" },
  { id: "myPage", name: "마이페이지", path: "/" },
];

export default function LayoutHeaderUI(): JSX.Element {
  const router = useRouter();
  return (
    <S.Header>
      <S.HeaderInner>
        <Link href={"/boards"}>
          <S.Logo src="/assets/icons/header/wedo.png" />
        </Link>
        <nav>
          <S.HeaderNav>
            {NavigationMenu.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.path}>
                  <S.NavTab
                  // style={{
                  //   color:
                  //     menu.path === router.pathname ? "#514400" : "#ab9000",
                  // }}
                  >
                    {menu.name}
                  </S.NavTab>
                </Link>
              </li>
            ))}
            <li>
              <Link href={"/login"}>
                <S.Login>로그인</S.Login>
              </Link>
            </li>
            <li>
              <S.SignUp>회원가입</S.SignUp>
            </li>
          </S.HeaderNav>
        </nav>
      </S.HeaderInner>
    </S.Header>
  );
}
