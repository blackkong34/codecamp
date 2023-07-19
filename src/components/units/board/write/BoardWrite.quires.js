import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
  mutation createBoard($CreateBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $CreateBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!) {
    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {
      _id
    }
  }
`;