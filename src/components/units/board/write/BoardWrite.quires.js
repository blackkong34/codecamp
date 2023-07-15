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