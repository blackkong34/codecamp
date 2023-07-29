import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FormEvent } from "react";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId },
      skip: boardId === "",
    },
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickLike = async (): Promise<void> => {
    const result = await likeBoard({
      variables: { boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId,
          },
        },
      ],
    });
  };
  const onClickDislike = async (): Promise<void> => {
    const result = await dislikeBoard({
      variables: { boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId,
          },
        },
      ],
    });
  };
  const onClickDeleteBoard = async (
    e: FormEvent<HTMLElement>,
  ): Promise<void> => {
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

  const onclickMoveToEdit = (): void => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToList = (): void => {
    router.push("/boards");
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDeleteBoard={onClickDeleteBoard}
        onclickMoveToEdit={onclickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
      />
    </>
  );
}
