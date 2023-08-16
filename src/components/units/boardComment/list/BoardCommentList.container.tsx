import { useQuery, useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import type {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId },
    skip: boardId === "",
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onClickDelete = (e: MouseEvent<HTMLImageElement>) => {
    setIsOpen(true);
    setBoardCommentId(e.currentTarget.id);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
    setIsOpen(false);
  };

  return (
    <div>
      <BoardCommentListUI
        data={data}
        //모달관련
        isOpen={isOpen}
        onClose={onClose}
        onClickDelete={onClickDelete}
        onClickDeleteComment={onClickDeleteComment}
        onChangePassword={onChangePassword}
        //수정
      />
    </div>
  );
}
