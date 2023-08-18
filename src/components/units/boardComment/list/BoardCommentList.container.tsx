import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { FETCH_BOARDS } from "../../board/list/BoardList.queries";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IQuery,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId },
      skip: boardId === "",
    },
  );

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLoadMore = () => {
    if (!data) return;
    void fetchMore({
      variables: {
        boardId,
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const handleDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      });
      Modal.info({ title: "댓글이 삭제되었습니다." });
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
    // setIsOpen(false);
  };

  return (
    <div>
      <BoardCommentListUI
        data={data}
        setBoardCommentId={setBoardCommentId}
        onChangePassword={onChangePassword}
        handleDelete={handleDelete}
        onLoadMore={onLoadMore}
      />
    </div>
  );
}
