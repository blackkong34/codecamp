import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils.js";
import { useForm } from "react-hook-form";

export default function BoardDetailUI({
  data,
  onClickDeleteBoard,
  onclickMoveToEdit,
  onClickMoveToList,
}) {
  const { register, handleSubmit } = useForm();

  return (
    <S.BoardDetailWrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/assets/icons/profile.png" alt="프로필사진" />
            <S.AvatarInfo>
              <S.Writer>
                {data?.fetchBoard?.writer ?? "존재하지 않는 게시글입니다"}
              </S.Writer>
              <S.CreatedAt>
                Date : {getDate(data?.fetchBoard.createdAt)}
              </S.CreatedAt>
            </S.AvatarInfo>
          </S.AvatarWrapper>
          <div>
            <S.HeaderIcon src="/assets/icons/link.png" />
            <S.HeaderIcon src="/assets/icons/location.png" />
          </div>
        </S.Header>
        <S.Body>
          <S.BoardTitle>{data?.fetchBoard?.title}</S.BoardTitle>
          <S.ImageBox></S.ImageBox>
          <S.Content>{data?.fetchBoard?.contents}</S.Content>
          <S.VideoBox>
            <S.Video>
              <S.PlayIcon src="/assets/icons/play.png"></S.PlayIcon>
            </S.Video>
          </S.VideoBox>
        </S.Body>
        <S.Bottom>
          <S.IconBox>
            <S.Icon src="/assets/icons/thumb_up.png" />
            <S.Like>1920</S.Like>
          </S.IconBox>
          <S.IconBox>
            <S.Icon src="/assets/icons/thumb_down.png" />
            <S.Dislike>1920</S.Dislike>
          </S.IconBox>
        </S.Bottom>
      </S.CardWrapper>
      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToList}>목록으로</S.Btn>
        <S.Btn onClick={onclickMoveToEdit}>수정하기</S.Btn>
        <S.Btn id={data?.fetchBoard._id} onClick={onClickDeleteBoard}>
          삭제하기
        </S.Btn>
      </S.BtnWrapper>
    </S.BoardDetailWrapper>
  );
}
