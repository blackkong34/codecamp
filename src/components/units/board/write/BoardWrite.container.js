import { useMutation } from '@apollo/client'; 
import { useRouter } from 'next/router';
import { CREATE_BOARD } from './BoardWrite.quires'; 
import BoardWriteUI from './BoardWrite.presenter'; 

export default function Boards() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD); 

  const onSubmit = async (data) => { 
  if(data)  {
    try{ 
      const result = await createBoard({ 
         variables : {
           CreateBoardInput : {
             writer : data.writer,
             password : data.password,
             title : data.Title,
             contents : data.contents,
            }
          }
        });
        router.push(`/boards/${result.data.createBoard._id}`) 
      } catch (error) {
        alert(error.message);
      }  
    }
  }

  return(
    <BoardWriteUI 
      onSubmit = {onSubmit}>
    </BoardWriteUI>
  )

}