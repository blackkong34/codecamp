import { useQuery } from "@apollo/client/react";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommenList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  console.log(router.query.boardId);
  console.log(data);

  return <BoardCommentListUI data={data} />;
}
