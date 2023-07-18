import * as S from './BoardList.styles'
import {useForm} from 'react-hook-form';


export default function BoardListUI({data, onClickNewBoard, onClickDetailBoard}) {
  const {register} = useForm();
  return(
    <S.Wrapper>
      <S.Header>
        <S.Title>베스트 게시글</S.Title>
        <S.CardsWrapper>
          {data?.fetchBoardsOfTheBest?.map(item => (
            <S.Card key = {item._id} id = {item._id} onClick = {onClickNewBoard}>
              <S.CardImg src = {item.images[0] ?? "/assets/images/car.jpg"}/>
              <S.CardContents>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardInfo>
                  <S.CardProfile>
                    <S.AvatarBox>
                      <S.Icon src = "/assets/icons/profile.png" alt = "작성자프로필"/>
                      <S.CardWriter>{item.writer}</S.CardWriter>
                    </S.AvatarBox>
                    <S.CardCreatedAt>Date : {(item.createdAt).slice(0).substring(0,10)}</S.CardCreatedAt>
                  </S.CardProfile>
                  <S.LikeBox>
                    <S.Like src = '/assets/icons/thumb_up.png' alt = "좋아요"/>
                    <S.Count>{item.likeCount}</S.Count>
                  </S.LikeBox>
                </S.CardInfo>
              </S.CardContents>
            </S.Card>
          ))}   
        </S.CardsWrapper>
      <S.Body>
        <S.BodyHeader>
          <S.Search type = "text" placeholder='제목을 검색해주세요'
          // {...register("search", {
          //   required : "검색어가 입력되지 않았습니다",
          //   minLength : {
          //     value : 2,
          //     message : "검색어는 최소 2글자 이상이어야 합니다"}
          //   })}
            />
          <S.DateBox>
            <S.Date type = "date" required data-placeholder = "YYYY.MM.DD" 
            // {...register ("startDate", {
            //   pattern : "\d{4}-\d{2}-\d{2}",
            //   message : "년-월-일을 모두 입력해주세요"
            // })}
            /><S.DateLine>~</S.DateLine> 
            <S.Date type = "date" required data-placeholder = "YYYY.MM.DD" />
          </S.DateBox>
          <S.SubmitBtn type = "submit">검색하기</S.SubmitBtn>
        </S.BodyHeader>
        <S.BodyTable>
          <thead>
            <S.Row>
              <S.HeaderBasic>번호</S.HeaderBasic>
              <S.HeaderTitle>제목</S.HeaderTitle>
              <S.HeaderBasic>작성자</S.HeaderBasic>
              <S.HeaderBasic>날짜</S.HeaderBasic>
            </S.Row>  
          </thead>
          <tbody>
          {data?.fetchBoards.slice().reverse().map((item, idx) => ( <S.Row key = {item._id}>
            <S.Column>{item._id.slice(-4).toUpperCase()}</S.Column>
            <S.ColumnTitle id = {item._id} onClick={onClickDetailBoard}>{item.title}</S.ColumnTitle>
            <S.Column>{item.writer}</S.Column>
            <S.Column>{(item.createdAt).slice(0).substring(0,10)}</S.Column>
            </S.Row>
          ))}
          </tbody>
        </S.BodyTable>
        <S.Footer>
          <S.Pagination>
            <S.Icon src = '/assets/icons/navigate_before.png' alt = "이전 페이지"/>
            <S.PageNum>1</S.PageNum>
            <S.PageNum>2</S.PageNum>
            <S.Icon src = '/assets/icons/navigate_next.png' alt = "이전 페이지"/>
          </S.Pagination>
          <S.NewBtn onClick={onClickNewBoard}>
            <S.Icon src="/assets/icons/create.png"></S.Icon>게시물 등록하기</S.NewBtn>
        </S.Footer>
      </S.Body>
      </S.Header>
    </S.Wrapper>
  )
}