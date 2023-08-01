import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.quires";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { IBoardsProps, FormValues } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  ICreateBoardInput,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";

export default function Boards(props: IBoardsProps) {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const router = useRouter();
  // 게시글 생성하기 - 통신
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  // 게시글 수정하기 - 통신
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // 모달 스위치
  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  // 게시글 생성하기 - 이벤트
  const onSubmitCreate = async (formData: ICreateBoardInput): Promise<void> => {
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

        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        alert(error);
      }
    }
  };
  //취소버튼 눌렀을 때
  const onClickMoveToBack = (e: FormEvent<HTMLElement>): void => {
    confirm("수정을 취소하시겠습니까?")
      ? router.push("/boards/")
      : e.preventDefault();
  };
  // 게시글 수정하기 -이벤트
  const onSubmitUpdate = async (formData: ICreateBoardInput): Promise<void> => {
    if (!formData.title && !formData.contents) {
      alert("수정할 내용이 없습니다.");
      return;
    }

    if (!formData.password) {
      prompt("비밀번호를 입력해주세요.");
      alert("비밀번호");
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
    <div>
      <BoardWriteUI
        isEdit={props.isEdit}
        data={props.data}
        onSubmitCreate={onSubmitCreate}
        onSubmitUpdate={onSubmitUpdate}
        onClickMoveToBack={onClickMoveToBack}
      />
    </div>
  );
}
