import { gql } from "@apollo/client";
// * query문 2개 받아오기
export const FETCH_BOARDS_AND_BOARDS_OF_BEST = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      likeCount
      createdAt
    }
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      images
      createdAt
    }
  }
`;