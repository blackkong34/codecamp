import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query ($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      likeCount
      images
      createdAt
    }
  }
`;
