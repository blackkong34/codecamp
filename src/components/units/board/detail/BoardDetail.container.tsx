import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FormEvent } from "react";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDeleteBoard = async (e: FormEvent<HTMLElement>) => {
    console.log(e.target);
    const answer = confirm("삭제하시겠습니까?");
    if (answer === false) {
      e.preventDefault();
      return;
    }
    if (answer && e.currentTarget.id) {
      try {
        const res = await deleteBoard({
          variables: { boardId: e.currentTarget.id },
        });
      } catch (err) {
        console.log(err);
      }
      alert("삭제되었습니다.");
      router.push("/boards");
    }
  };

  const onclickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDeleteBoard={onClickDeleteBoard}
        onclickMoveToEdit={onclickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
      />
    </>
  );
}
