import { IBoardDetailUIProps } from "./BoardDetail.types";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import Youtube from "../../../../commons/libraries/YouTube";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const {
    data,
    onClickDeleteBoard,
    onclickMoveToEdit,
    onClickMoveToList,
    onClickLike,
    onClickDislike,
  } = props;
  console.log(data);
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
            <Tooltip
              title={
                `${data?.fetchBoard.boardAddress?.address ?? ""} ${
                  data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }` ?? "주소가 없습니다."
              }
            >
              <S.HeaderIcon src="/assets/icons/location.png" />
            </Tooltip>
          </div>
        </S.Header>
        <S.Body>
          <S.BoardTitle>{data?.fetchBoard?.title}</S.BoardTitle>
          <S.ImageBox></S.ImageBox>
          <S.Content>{data?.fetchBoard?.contents}</S.Content>
          <S.VideoBox>
            {data?.fetchBoard.youtubeUrl ? (
              <Youtube
                videoId={
                  data?.fetchBoard.youtubeUrl?.split("v=")[1].split("&")[0] ??
                  ""
                }
              />
            ) : (
              ""
            )}
          </S.VideoBox>
        </S.Body>
        <S.Bottom>
          <S.IconBox>
            <S.LikeBtn type="button" onClick={onClickLike}>
              <S.LikeIcon src="/assets/icons/thumb_up.png" />
              <S.Like>{data?.fetchBoard.likeCount}</S.Like>
            </S.LikeBtn>
          </S.IconBox>
          <S.IconBox>
            <S.DislikeBtn type="button" onClick={onClickDislike}>
              <S.DislikeIcon src="/assets/icons/thumb_down.png" />
              <S.Dislike>{data?.fetchBoard.dislikeCount}</S.Dislike>
            </S.DislikeBtn>
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
