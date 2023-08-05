import * as S from "./LayoutNavigation.styles";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationMenu = [
  { id: "boards", name: "자유게시판", path: "/boards" },
  { id: "usedMarket", name: "중고마켓", path: "/" },
  { id: "myPage", name: "마이페이지", path: "/" },
];
export default function LayoutNavigationUI(): JSX.Element {
  const router = useRouter();
  return (
    <S.Navigation>
      <ul>
        {NavigationMenu.map((menu) => (
          <li key={menu.id}>
            <Link href={menu.path}>
              <S.MenuLink
                style={{
                  color: menu.path === router.pathname ? "#514400" : "#ab9000",
                }}
              >
                {menu.name}
              </S.MenuLink>
            </Link>
          </li>
        ))}
      </ul>
    </S.Navigation>
  );
}
