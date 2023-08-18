import { gql } from "@apollo/client";

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoard($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;
export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
