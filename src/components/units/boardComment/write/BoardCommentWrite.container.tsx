import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  ICreateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import { IFormValue } from "./BoardCommentWrite.types";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardCommentWrite(): JSX.Element {
  const router = useRouter();

  //통신
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const onSubmitComment = async (formData: IFormValue) => {
    if (formData) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: formData.writer,
              password: formData.password,
              contents: formData.contents,
              rating: +formData.rating,
            },
            boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId,
              },
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return <BoardCommentWriteUI onSubmitComment={onSubmitComment} />;
}
