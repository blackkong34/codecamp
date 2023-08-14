import { useQuery, useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentEdit.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
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

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>): void => {
    setClickedIdx(Number(e.currentTarget.id));
  };

  return (
    <div>
      <BoardCommentListUI
        data={data}
        isOpen={isOpen}
        onClose={onClose}
        onClickDelete={onClickDelete}
        onChangePassword={onChangePassword}
      />
    </div>
  );
}
