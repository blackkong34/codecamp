import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.quires";
import { FormEvent } from "react";
import { IBoardsProps, FormValues } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
export default function Boards(props: IBoardsProps) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onSubmitCreate = async (formData: Required<FormValues>) => {
    if (formData) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: formData.writer,
              password: formData.password,
              title: formData.title,
              contents: formData.contents,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickMoveToBack = (e: FormEvent<HTMLElement>) => {
    confirm("게시글 수정을 취소하시겠습까?")
      ? router.back()
      : e.preventDefault();
  };

  const onSubmitUpdate = async (formData: FormValues) => {
    if (!formData.title && !formData.contents) {
      alert("수정할 내용이 없습니다.");
      return;
    }
    if (!formData.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateVariables: FormValues = {};
    if (formData.title) updateVariables.title = formData.title;
    if (formData.contents) updateVariables.contents = formData.contents;

    try {
      if (router.query.boardId !== "string") {
        alert("시스템에 문제가 발생했습니다.");
        return;
      }
      const res = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: formData.password,
          updateBoardInput: updateVariables,
        },
      });
      alert("게시글이 수정되었습니다");
      router.push(`/boards/${router.query.boardId}/`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      data={props.data}
      onSubmitCreate={onSubmitCreate}
      onSubmitUpdate={onSubmitUpdate}
      onClickMoveToBack={onClickMoveToBack}
    />
  );
}
