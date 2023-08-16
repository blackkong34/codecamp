import { gql, useQuery } from "@apollo/client";
import BoardCommentWrite from "./write/BoardCommentWrite.container";
import BoardCommentList from "./write/BoardCommentWrite.container";
import { IQuery } from "../../../commons/types/generated/types";

export default function Comments() {
  return (
    <>
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
