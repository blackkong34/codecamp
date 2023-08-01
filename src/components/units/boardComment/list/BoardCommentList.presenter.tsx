import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardNestedComment from "./nested/BoardNestedComment.container";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const {
    data,
    isOpen,
    onClose,
    onClickDelete,
    onChangePassword,
    onClickDeleteComment,
  } = props;

  // todo 지워야할 것

  return (
    <S.ItemWrapper>
      <S.PasswordModal
        title="비밀번호를 입력해주세요"
        onOk={onClickDeleteComment}
        onCancel={onClose}
        open={isOpen}
        okText={"확인"}
        cancelText={"취소"}
        destroyOnClose
      >
        <S.PasswordInput
          type="password"
          autoComplete="off"
          onChange={onChangePassword}
        />
      </S.PasswordModal>
      {data?.fetchBoardComments?.map((el) => (
        <S.Item key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/assets/icons/profile.png" alt="댓글프로필" />
            <S.ItemMain>
              <S.WriterBox>
                <S.Writer>{el.writer}</S.Writer>
                <S.StarRate value={el.rating} disabled />
              </S.WriterBox>
              <S.Contents>{el.contents} </S.Contents>
              <S.Date>
                {el.updatedAt
                  ? `작성일자 : ${getDate(el.createdAt)}`
                  : `수정일자 : ${getDate(el.updatedAt)}`}
              </S.Date>
            </S.ItemMain>
            <S.IconsBox>
              <S.Icon src="/assets/icons/pencil.png" />
              <S.Icon
                id={el._id}
                onClick={onClickDelete}
                src="/assets/icons/clear.png"
              />
            </S.IconsBox>
          </S.FlexWrapper>
          <BoardNestedComment />
        </S.Item>
      ))}
    </S.ItemWrapper>
  );
}
