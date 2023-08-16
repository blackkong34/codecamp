import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
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
import { Modal } from "antd";
import { time } from "console";
import { title } from "process";

export default function BoardCommentWrite(
  props: IBoardCommentWriteProps,
): JSX.Element {
  const router = useRouter();

  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  //통신
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

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

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onUpdateComment = async (formData: IFormValue) => {
    const boardCommentId =
      typeof props?.comment?._id === "string" ? props.comment._id : "";
    // if (!formData || boardCommentId) return;
    try {
      await updateBoardComment({
        variables: {
          boardCommentId,
          password: formData.password,
          updateBoardCommentInput: {
            contents: formData.contents,
            rating: formData.rating,
          },
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
      props.setIsEdit(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickCancel = () => {
    props.setIsEdit(false);
  };

  return (
    <BoardCommentWriteUI
      onSubmitComment={onSubmitComment}
      comment={props.comment}
      isEdit={props.isEdit}
      onUpdateComment={onUpdateComment}
      onClickCancel={onClickCancel}
    />
  );
}
