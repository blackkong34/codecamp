import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FormEvent } from "react";
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

  const onClickMoveToNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToDetail = (e: FormEvent<HTMLElement>) => {
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
