import { useQuery, useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IModalFormValue } from "../../../../commons/libraries/Modal/Modal.types";
export default function BoardCommentList() {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  //모달관련
  const [isOpen, setIsOpen] = useState(false);
  const [modalContents, setModalContents] = useState({ text: "", type: "" });
  const [value, setValue] = useState<IModalFormValue>();

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const getValue = (formData: IModalFormValue) => {
    setValue(formData);
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId },
    skip: boardId === "",
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async (
    e: FormEvent<HTMLElement>,
  ): Promise<void> => {
    onToggleModal();
    setModalContents({
      ...modalContents,
      text: "비밀번호를 입력하세요",
      type: "password",
    });
    console.log(value);
    if (value) {
      try {
        const res = await deleteBoardComment({
          variables: {
            password: "123",
            boardCommentId: e.currentTarget.id,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      }
    }
  };
  return (
    <div>
      <BoardCommentListUI
        data={data}
        onClickDeleteComment={onClickDeleteComment}
        modalContents={modalContents}
        isOpen={isOpen}
        onToggleModal={onToggleModal}
        getValue={getValue}
        onToggleModal={setIsOpen}
      />
    </div>
  );
}
