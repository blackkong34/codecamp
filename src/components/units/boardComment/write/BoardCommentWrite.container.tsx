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

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  if (!router || typeof router.query.boardId !== "string") return <></>;
  const onSubmitComment = async (formData: IFormValue) => {
    if (formData) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: formData.writer,
              password: formData.password,
              contents: formData.contents,
              rating: +formData.rating,
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId: router.query.boardId,
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
