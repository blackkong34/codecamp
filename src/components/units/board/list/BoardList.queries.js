import { gql } from "@apollo/client";

export const FETCH_BOARDS_AND_BOARDS_OF_BEST= gql`
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
`

