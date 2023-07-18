import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries' 

export default function BoardDetail() {
  
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables : {boardId : router.query.boardId},
  });
  const [ deleteBoard ] = useMutation(DELETE_BOARD);

  const onClickDeleteBoard = async (e) => {
    confirm("삭제하시겠습니까?")
    try {
    if(e.target.id){
    const res = await deleteBoard({
      variables : {ID : e.target.id} 
      })
      }} catch(err) {
      console.log(err)
    }
    router.push('/boards')
  }

  return (
    <BoardDetailUI data = {data}
    onClickDeleteBoard = {onClickDeleteBoard}
    />
  )
}