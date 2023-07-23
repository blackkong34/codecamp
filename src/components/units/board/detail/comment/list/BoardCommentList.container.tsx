import { useQuery, useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import BoardCommentListUI from "./BoardCommenList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../../commons/types/generated/types";
import {
  IBoardCommentListUI,
  IDeleteCommentValues,
} from "./BoardCommentList.types";

export default function BoardCommentList() {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== "string") return <></>;
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDeleteComment = async (e: FormEvent<HTMLElement>) => {
    const password: string = prompt("비밀번호를 입력해주세요");
    const res = await deleteBoardComment({
      variables: {
        password,
        boardCommentId: e.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
