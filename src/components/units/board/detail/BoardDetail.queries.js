import { gql } from '@apollo/client';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId : ID!){
    fetchBoard(boardId : $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($ID : ID!) {
    deleteBoard(boardId : $ID)
}
`