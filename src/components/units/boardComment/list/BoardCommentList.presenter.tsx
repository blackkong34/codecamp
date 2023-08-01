import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardNestedComment from "./nested/BoardNestedComment.container";
import Modal from "../../../../commons/libraries/Modal/Mordal.container";
import Portal from "../../../../commons/libraries/Modal/Portal";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const {
    data,
    onClickDeleteComment,
    modalContents,
    isOpen,
    setIsOpen,
    onToggleModal,
    getValue,
  } = props;

  // todo 지워야할 것

  return (
    <div>
      <Portal>
        <Modal
          isOpen={isOpen}
          getValue={getValue}
          onToggleModal={onToggleModal}
          type={modalContents?.type}
          setIsOpen={setIsOpen}
        >
          {modalContents.text}
          {/* <input type="password" autoComplete="none" /> */}
        </Modal>
      </Portal>
      <S.ItemWrapper>
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
                  onClick={onClickDeleteComment}
                  src="/assets/icons/clear.png"
                />
              </S.IconsBox>
            </S.FlexWrapper>
            <BoardNestedComment />
          </S.Item>
        ))}
      </S.ItemWrapper>
    </div>
  );
}
