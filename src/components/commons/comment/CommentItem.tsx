import { useState } from "react";
import type { IBoardComment } from "../../../commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";
import { getDate } from "../../../commons/libraries/utils";
import BoardCommentWrite from "../../units/boardComment/write/BoardCommentWrite.container";
import PasswordModal from "./passwordModal";
import * as S from "./CommentItem.styles";

interface ICommentItemProps {
  comment: IBoardComment;
  handleDelete: () => Promise<void>;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  setBoardCommentId: React.Dispatch<React.SetStateAction<string>>;
}

export default function CommentItem(props: ICommentItemProps) {
  const { comment, handleDelete, setBoardCommentId, onChangePassword } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickDelete = (e: MouseEvent<HTMLImageElement>) => {
    setIsOpen(true);
    setBoardCommentId(e.currentTarget.id);
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <S.ItemWrapper>
      <PasswordModal
        handleDelete={handleDelete}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onChangePassword={onChangePassword}
      />
      {!isEdit ? (
        <S.Item key={comment._id}>
          <S.FlexWrapper>
            <S.Avatar
              src={comment.user?.picture ?? "/assets/icons/profile.png"}
              alt="댓글프로필"
            />
            <S.ItemMain>
              <S.WriterBox>
                <S.Writer>{comment.writer}</S.Writer>
                <S.StarRate value={comment.rating} disabled />
              </S.WriterBox>
              <S.Contents>{comment.contents} </S.Contents>
              <S.Date>
                {comment.updatedAt
                  ? `수정일자 : ${getDate(comment.updatedAt)}`
                  : `작성일자 : ${getDate(comment.createdAt)}`}
              </S.Date>
            </S.ItemMain>
            <S.IconsBox>
              <S.Icon src="/assets/icons/pencil.png" onClick={onClickEdit} />
              <S.Icon
                id={comment._id}
                onClick={onClickDelete}
                src="/assets/icons/clear.png"
              />
            </S.IconsBox>
          </S.FlexWrapper>
          {/* <BoardNestedComment /> */}
        </S.Item>
      ) : (
        <BoardCommentWrite
          comment={comment}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </S.ItemWrapper>
  );
}
