import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import type {
  IFormValue,
  IBoardCommentWriteProps,
} from "./BoardCommentWrite.types";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardCommentWrite(
  props: IBoardCommentWriteProps,
): JSX.Element {
  const { comment, isEdit, setIsEdit } = props;
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  //통신
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

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

  const onUpdateComment = async (formData: IFormValue) => {
    const updateBoardCommentInput: Partial<IFormValue> = {};
    if (formData?.contents)
      updateBoardCommentInput.contents = formData.contents;
    if (formData?.rating) updateBoardCommentInput.rating = formData.rating;
    const boardCommentId =
      typeof props?.comment?._id === "string" ? props.comment._id : "";
    if (!formData || !boardCommentId) return;
    try {
      await updateBoardComment({
        variables: {
          boardCommentId,
          password: formData.password,
          updateBoardCommentInput: updateBoardCommentInput,
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
      setIsEdit && setIsEdit(false);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  const onClickCancel = () => {
    setIsEdit && setIsEdit(false);
  };

  return (
    <BoardCommentWriteUI
      comment={comment}
      isEdit={isEdit}
      onSubmitComment={onSubmitComment}
      onUpdateComment={onUpdateComment}
      onClickCancel={onClickCancel}
    />
  );
}
