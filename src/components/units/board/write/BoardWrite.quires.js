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
  mutation updateBoard($UpdateBoardInput : UpdateBoardInput!, $password : String, $BoardId : ID!){
    updateBoard (
      updateBoardInput : $UpdateBoardInput,
      password : $password,
      boardId : $BoardId,
      ) {  
        _id
        writer
        title
        contents
        likeCount
        createdAt
      }
}
`