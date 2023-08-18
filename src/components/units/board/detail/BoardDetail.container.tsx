import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();

  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId },
    skip: boardId === "",
  });

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
    await likeBoard({
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
    await dislikeBoard({
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
  //모달창 확인 버튼 클릭시 게시글이 삭제되도록 함수 분리
  const onClickDeleteBoard = (e: MouseEvent<HTMLButtonElement>) => {
    let boardId = e.currentTarget.id;

    Modal.confirm({
      content: "삭제하시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onCancel: () => router.back(),
      onOk: () => {
        handleDeleteBoard(boardId);
      },
    });
  };
  const handleDeleteBoard = async (boardId: string) => {
    if (boardId) {
      try {
        await deleteBoard({
          variables: { boardId },
        });
      } catch (error) {
        Modal.warn({
          title: error,
        });
      }
      Modal.info({
        title: "삭제되었습니다.",
        onOk: () => {
          router.back();
        },
      });
    }
  };
  const onclickMoveToEdit = (): void => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToList = (): void => {
    router.back();
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
