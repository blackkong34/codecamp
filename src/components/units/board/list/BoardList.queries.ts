import { gql } from "@apollo/client";
// * query문 2개 받아오기
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

export const FETCH_BOARDS_OF_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      images
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
