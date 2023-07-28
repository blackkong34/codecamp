import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.quires";
import { FormEvent, MouseEvent, useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [errMgs, setErrMsg] = useState("");
  const [value, setValue] = useState("");
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const getValue = (value: string) => {
    setValue(value);
  };
  const onClickClose = () => {
    if (value === "cancel") setShowModal(false);
  };

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

  const onClickMoveToBack = (e: FormEvent<HTMLElement>): void => {
    confirm("게시글 수정을 취소하시겠습까?")
      ? router.back()
      : e.preventDefault();
  };

  const onSubmitUpdate = async (formData: ICreateBoardInput): Promise<void> => {
    if (!formData.title && !formData.contents) {
      setShowModal(true);
      setErrMsg("수정할 내용이 없습니다");
      // alert("수정할 내용이 없습니다.");

      return;
    }
    if (!formData.password) {
      // setShowModal(true);
      // setErrMsg("비밀번호를 입력해주세요.");
      alert("비밀번호");
      return;
    }

    const updateVariables: FormValues = {};
    if (formData.title) updateVariables.title = formData.title;
    if (formData.contents) updateVariables.contents = formData.contents;

    try {
      if (router.query.boardId !== "string") {
        // setShowModal(true);
        setErrMsg("시스템에 문제가 발생했습니다.");
        setShowModal((prev) => !prev);
        return;
      }
      const res = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: formData.password,
          updateBoardInput: updateVariables,
        },
      });
      setShowModal(true);
      setErrMsg("게시글이 수정되었습니다");
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
        errMsg={errMgs}
        showModal={showModal}
        onClickClose={onClickClose}
        getValue={getValue}
      />
    </div>
  );
}
