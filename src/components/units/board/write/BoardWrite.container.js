import { useMutation } from '@apollo/client'; 
import { useRouter } from 'next/router';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.quires'; 
import BoardWriteUI from './BoardWrite.presenter'; 
import { useState } from 'react';
import { validate } from 'graphql';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Boards(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD); 
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [isValidEdit, setIsValidEdit] = useState(true)

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

  // const handleIsValidEdit = (formData) => {
  //   if(formData.password && formData.title && formData.contents) {
  //     setIsValidEdit(prev => !prev);
  //   }
  // }
  
  const onSubmitUpdate = async (formData) => {
    const updateVariables = {}
    if(formData.title) updateVariables.title = formData.title;
    if(formData.contents) updateVariables.contents = formData.contents;
    try {
      const res = await updateBoard({
        variables : {
          boardId : router.query.boardId,
          password : formData.password,
          updateBoardInput: updateVariables,
        }
      });
      alert("게시글이 수정되었습니다")
      router.push(`/boards/${router.query.boardId}/`)
    } catch(error) {
        alert(error)
      }
  }


  return(
     <BoardWriteUI 
      isEdit = {props.isEdit}
      // isValidEdit = {isValidEdit}
      // handleIsValidEdit = {handleIsValidEdit}
      data = {props.data}
      onSubmitCreate = {onSubmitCreate}
      onSubmitUpdate = {onSubmitUpdate}
      onClickMoveToBack = {onClickMoveToBack}
      />

  )

}