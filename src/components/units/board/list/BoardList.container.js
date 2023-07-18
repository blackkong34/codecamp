import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_AND_BOARDS_OF_BEST } from "./BoardList.queries";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS_AND_BOARDS_OF_BEST);
  const router = useRouter();
  
  const onClickNewBoard = () => {
    router.push('/boards/new');
  }

  const onClickDetailBoard = (e) => {
    router.push('boards/e.target.id')
  }

  return (
    <>
      <BoardListUI data = {data}
      onClickNewBoard = {onClickNewBoard}
      onClickDetailBoard = {onClickDetailBoard}/>
    </>
  )
}