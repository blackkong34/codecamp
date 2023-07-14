import { Container, BoardDetailWrapper, CardWrapper, Header, AvatarWrapper,  Avatar, AvatarInfo, Writer, CreateAt, HeaderIcon, Body, BoardTitle, ImageBox, Content, VideoBox,Video, PlayIcon, Bottom, IconBox, Icon, Like, Dislike, BtnWrapper, Btn, ReviewsWrapper, ReviewHeader, ReviewTitle} from '../../../styles/boardDetail';
// import Profile from "/public/assets/icons/link.svg"


export default function BoardDetailPage() {

    return (
      <Container>
        {/* <Profile width={56} height = {56} /> */}
      <BoardDetailWrapper>
        <CardWrapper>
          <Header>
          <AvatarWrapper>
            <Avatar src = "/assets/icons/profile.png" alt = "프로필사진"/>
            <AvatarInfo>
              <Writer>노원두</Writer>
              <CreateAt>Date : 2021.02.18</CreateAt>
            </AvatarInfo>
          </AvatarWrapper>
            <div>
              <HeaderIcon src = "/assets/icons/link.png"/>
              <HeaderIcon src = "/assets/icons/location.png"/>
            </div>
          </Header>
          <Body>
            <BoardTitle>게시글 제목입니다.</BoardTitle>
            <ImageBox></ImageBox>
            <Content>가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</Content>
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