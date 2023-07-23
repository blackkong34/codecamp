import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import BoardCommentWrite from "./comment/write/BoardCommentWrite.container";
import BoardCommentList from "./comment/list/BoardCommentList.container";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDeleteBoard = async (e) => {
    const answer = confirm("삭제하시겠습니까?");
    if (answer) {
      try {
        if (e.target.id) {
          const res = await deleteBoard({
            variables: { ID: e.target.id },
          });
        }
      } catch (err) {
        console.log(err);
      }
      router.push("/boards");
    } else {
      e.preventDefault();
    }
  };

  const onclickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDeleteBoard={onClickDeleteBoard}
        onclickMoveToEdit={onclickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
      />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
