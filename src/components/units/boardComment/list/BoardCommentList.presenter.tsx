import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import CommentItem from "../../../commons/comment/CommentItem";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          setBoardCommentId={props.setBoardCommentId}
          handleDelete={props.handleDelete}
          onChangePassword={props.onChangePassword}
        />
      ))}
    </>
  );
}
