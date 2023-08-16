import { useState } from "react";
import { getDate } from "../../../commons/libraries/utils";
import type { IBoardComment } from "../../../commons/types/generated/types";
import * as S from "./CommentItem.styles";
import BoardCommentWrite from "./write/BoardCommentWrite.container";

interface ICommentItemProps {
  comment: IBoardComment;
}

export default function CommentItem(props: ICommentItemProps) {
  const { comment } = props;
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  console.log(isEdit);
  return (
    <S.ItemWrapper>
      {/* <S.PasswordModal
        title="댓글을 삭제하시겠습니까?"
        onOk={onClickDeleteComment}
        onCancel={onClose}
        open={isOpen}
        okText={"확인"}
        cancelText={"취소"}
      >
        패스워드를 입력해주세요
        <S.PasswordInput
          type="password"
          autoComplete="new-password"
          onChange={onChangePassword}
        />
      </S.PasswordModal> */}
      {!isEdit ? (
        <S.Item key={comment._id}>
          <S.FlexWrapper>
            <S.Avatar src="/assets/icons/profile.png" alt="댓글프로필" />
            <S.ItemMain>
              <S.WriterBox>
                <S.Writer>{comment.writer}</S.Writer>
                <S.StarRate value={comment.rating} disabled />
              </S.WriterBox>
              <S.Contents>{comment.contents} </S.Contents>
              <S.Date>
                {comment.updatedAt
                  ? `작성일자 : ${getDate(comment.createdAt)}`
                  : `수정일자 : ${getDate(comment.updatedAt)}`}
              </S.Date>
            </S.ItemMain>
            <S.IconsBox>
              <S.Icon src="/assets/icons/pencil.png" onClick={onClickEdit} />
              <S.Icon
                id={comment._id}
                // onClick={onClickDelete}
                src="/assets/icons/clear.png"
              />
            </S.IconsBox>
          </S.FlexWrapper>
          {/* <BoardNestedComment /> */}
        </S.Item>
      ) : (
        <BoardCommentWrite />
      )}
    </S.ItemWrapper>
  );
}
