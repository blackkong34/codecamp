import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import type { IQuery } from "../../../../commons/types/generated/types";
import CommentItem from "../CommentItem";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const router = useRouter();

  const boardId =
    typeof router.query.boardId !== "string" ? router.query.boardId : "";

  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">>(
    FETCH_BOARD_COMMENTS,
    { variables: { boardId: router.query.boardId } },
  );

  return (
    <>
      {data?.fetchBoardComments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </>
  );
}
