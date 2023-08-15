import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();
  const [pageNum, setPageNum] = useState<number>(1);

  const { data: boardsData, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: bestBoardsData } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_OF_BEST);

  const { data: boardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToNew = (): void => {
    router.push("/boards/new");
  };

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>): void => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  return (
    <>
      <BoardListUI
        boardsData={boardsData}
        bestBoardsData={bestBoardsData}
        onClickMoveToNew={onClickMoveToNew}
        onClickMoveToDetail={onClickMoveToDetail}
        refetch={refetch}
        boardsCount={boardsCount}
      />
    </>
  );
}
