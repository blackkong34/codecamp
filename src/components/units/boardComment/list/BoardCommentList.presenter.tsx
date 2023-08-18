import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "../../../commons/comment/CommentItem";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            setBoardCommentId={props.setBoardCommentId}
            handleDelete={props.handleDelete}
            onChangePassword={props.onChangePassword}
          />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
