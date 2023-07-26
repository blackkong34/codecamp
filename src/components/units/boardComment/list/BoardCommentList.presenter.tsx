import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentListUI } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUI) {
  const { data, onClickDeleteComment } = props;
  return (
    <S.ItemWrapper>
      {data?.fetchBoardComments?.map((el) => (
        <S.Item key={el._id}>
          <S.Avatar src="/assets/icons/profile.png" alt="댓글프로필" />
          <S.ItemMain>
            <S.WriterBox>
              <S.Writer>{el.writer}</S.Writer>
            </S.WriterBox>
            <S.Contents>{el.contents} </S.Contents>
            <S.Date>작성일자 : {getDate(el.createdAt)}</S.Date>
          </S.ItemMain>
          <S.IconsBox>
            <S.Icon src="/assets/icons/pencil.png" />
            <S.Icon
              id={el._id}
              onClick={onClickDeleteComment}
              src="/assets/icons/clear.png"
            />
          </S.IconsBox>
        </S.Item>
      ))}
    </S.ItemWrapper>
  );
}
