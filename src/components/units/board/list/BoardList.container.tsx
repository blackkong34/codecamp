import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS_AND_BOARDS_OF_BEST } from "./BoardList.queries";
import type { FormEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI2 from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest" | "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS_AND_BOARDS_OF_BEST);

  const onClickMoveToDetail = (e: FormEvent<HTMLElement>) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };
  return (
    <>
      <BoardListUI2 data={data} onClickMoveToDetail={onClickMoveToDetail} />
    </>
  );
}
