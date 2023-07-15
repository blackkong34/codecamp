import { Container, BoardDetailWrapper, CardWrapper, Header, AvatarWrapper, Avatar, AvatarInfo, Writer,CreatedAt, HeaderIcon, Body, BoardTitle, ImageBox, Content, VideoBox, Video, PlayIcon, Bottom, IconBox, Icon, Like, Dislike, BtnWrapper, Btn, ReviewsWrapper, ReviewHeader, ReviewTitle } from './BoardDetail.styles'

export default function BoardDetailUI(props) {
  return(
    <Container>
      <BoardDetailWrapper>
        <CardWrapper>
          <Header>
          <AvatarWrapper>
            <Avatar src = "/assets/icons/profile.png" alt = "프로필사진"/>
            <AvatarInfo>
              <Writer>{props.data?.fetchBoard?.writer ?? "존재하지 않는 게시글입니다"}</Writer>
              <CreatedAt>Date : {props.data?.fetchBoard?.createdAt.substr(0, 10)}</CreatedAt>
            </AvatarInfo>
          </AvatarWrapper>
            <div>
              <HeaderIcon src = "/assets/icons/link.png"/>
              <HeaderIcon src = "/assets/icons/location.png"/>
            </div>
          </Header>
          <Body>
            <BoardTitle>{props.data?.fetchBoard?.title}</BoardTitle>
            <ImageBox></ImageBox>
            <Content>{props.data?.fetchBoard?.contents}</Content>
            <VideoBox>
              <Video>
                <PlayIcon src = "/assets/icons/play.png"></PlayIcon>
              </Video>
            </VideoBox>
          </Body>
          <Bottom>
            <IconBox>
              <Icon src = "/assets/icons/thumb_up.png"/>
              <Like>1920</Like>
            </IconBox>
            <IconBox>
              <Icon src = "/assets/icons/thumb_down.png"/>
              <Dislike>1920</Dislike>
            </IconBox>
          </Bottom>
        </CardWrapper>
        <BtnWrapper>
          <Btn>목록으로</Btn>
          <Btn>수정하기</Btn>
          <Btn>삭제하기</Btn>
        </BtnWrapper>
        <ReviewsWrapper>
          <ReviewHeader>
            <Icon src = "/assets/icons/review.png"/>
            <ReviewTitle>댓글</ReviewTitle>
          </ReviewHeader>
        </ReviewsWrapper>
      </BoardDetailWrapper>  
    </Container>
  )
}