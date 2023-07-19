import { useMutation } from '@apollo/client'; 
import { useRouter } from 'next/router';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.quires'; 
import BoardWriteUI from './BoardWrite.presenter'; 

export default function Boards(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD); 
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const updateVariables = {
    boardId : router.query.boardId,
  }
  // UpdateBoardInput : {
  //   title, 
  //   contents,
  //   youtubeUrl,
  //   boardAddress,
  //   images,
  // }
  // console.log(formData)

  const onSubmitCreate = async (formData) => { 
  if(formData)  {
    try{ 
      const result = await createBoard({ 
         variables : {
           CreateBoardInput : {
             writer : formData.writer,
             password : formData.password,
             title : formData.Title,
             contents : formData.contents,
            }
          }
        });
        router.push(`/boards/${result.data.createBoard._id}`) 
      } catch (error) {
        alert(error.message);
      }  
    }
  }
  const onClickMoveToBack = () => {
    router.back();
  }
  const onSubmitUpdate = () => {
    //gkatn
  }

  return(
    <BoardWriteUI 
      isEdit = {props.isEdit}
      data = {props.data}
      onSubmitCreate = {onSubmitCreate}
      onSubmitUpdate = {onSubmitUpdate}
      onClickMoveToBack = {onClickMoveToBack}
      >
    </BoardWriteUI>
  )

}