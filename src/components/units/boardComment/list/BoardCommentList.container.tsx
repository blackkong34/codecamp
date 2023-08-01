import { useQuery, useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import {
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

  const onClickDeleteComment = async (
    e: FormEvent<HTMLElement>,
  ): Promise<void> => {
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
        isOpen={isOpen}
        onClose={onClose}
        onClickDelete={onClickDelete}
        onClickDeleteComment={onClickDeleteComment}
        onChangePassword={onChangePassword}
      />
    </div>
  );
}
