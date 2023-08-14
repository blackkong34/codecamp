import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_BOARDS_AND_BOARDS_OF_BEST } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest" | "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS_AND_BOARDS_OF_BEST);

  const onClickMoveToNew = (): void => {
    router.push("/boards/new");
  };

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>): void => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        onClickMoveToNew={onClickMoveToNew}
        onClickMoveToDetail={onClickMoveToDetail}
      />
    </>
  );
}
