import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../../commons/types/generated/types";
import { createCommnetValues } from "./BoardCommentWrite.types";

export default function BoardCommentWrite() {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  if (!router || typeof router.query.boardId !== "string") return <></>;
  const onSubmitComment = async (formData: createCommnetValues) => {
    if (formData) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: formData.writer,
              password: formData.password,
              contents: formData.contents,
              rating: Number(formData.rating),
            },
            boardId: String(router.query.boardId),
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return <BoardCommentWriteUI onSubmitComment={onSubmitComment} />;
}
