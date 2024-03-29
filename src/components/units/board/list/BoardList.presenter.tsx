import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Pagination from "../../../commons/pagination/paginaton.container";

export default function BoardListUI(props: IBoardListUIProps) {
  const {
    boardsData,
    bestBoardsData,
    onClickMoveToNew,
    onClickMoveToDetail,
    refetch,
    boardsCount,
  } = props;

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>베스트 게시글</S.Title>
        <S.CardsWrapper>
          {bestBoardsData?.fetchBoardsOfTheBest?.map((board) => (
            <S.Card
              key={board._id}
              id={board._id}
              onClick={onClickMoveToDetail}
            >
              <S.CardImg
                src={board.images ? board.images[0] : "/assets/images/car.jpg"}
              />
              <S.CardContents>
                <S.CardTitle>{board.title}</S.CardTitle>
                <S.CardInfo>
                  <S.CardProfile>
                    <S.AvatarBox>
                      <S.Icon
                        src="/assets/icons/profile.png"
                        alt="작성자프로필"
                      />
                      <S.CardWriter>{board.writer}</S.CardWriter>
                    </S.AvatarBox>
                    <S.CardCreatedAt>
                      Date : {getDate(board.createdAt)}
                    </S.CardCreatedAt>
                  </S.CardProfile>
                  <S.LikeBox>
                    <S.Like src="/assets/icons/thumb_up.png" alt="좋아요" />
                    <S.Count>{board.likeCount}</S.Count>
                  </S.LikeBox>
                </S.CardInfo>
              </S.CardContents>
            </S.Card>
          ))}
        </S.CardsWrapper>
        <S.Body>
          <S.BodyHeader>
            <S.SearchBar
              type="text"
              placeholder="제목을 검색해주세요"
              // {...register("search", {
              //   required : "검색어가 입력되지 않았습니다",
              //   minLength : {
              //     value : 2,
              //     message : "검색어는 최소 2글자 이상이어야 합니다"}
              //   })}
            />
            <S.DateBox>
              <S.Date
                type="date"
                required
                data-placeholder="YYYY.MM.DD"
                // {...register ("startDate", {
                //   pattern : "\d{4}-\d{2}-\d{2}",
                //   message : "년-월-일을 모두 입력해주세요"
                // })}
              />
              <S.DateLine>~</S.DateLine>
              <S.Date type="date" required data-placeholder="YYYY.MM.DD" />
            </S.DateBox>
            <S.SearchBtn type="submit">검색하기</S.SearchBtn>
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
              {boardsData?.fetchBoards
                .slice(0)
                // .reverse()
                .map((board) => (
                  <S.RowBody
                    key={board._id}
                    id={board._id}
                    onClick={onClickMoveToDetail}
                  >
                    <S.Column>{board._id.slice(-4).toUpperCase()}</S.Column>
                    <S.ColumnTitle>{board.title}</S.ColumnTitle>
                    <S.Column>{board.writer}</S.Column>
                    <S.Column>{getDate(board.createdAt)}</S.Column>
                  </S.RowBody>
                ))}
            </tbody>
          </S.BodyTable>
          <S.Footer>
            <Pagination refetch={refetch} boardsCount={boardsCount} />
            <S.NewBtn onClick={onClickMoveToNew}>
              <S.Icon src="/assets/icons/create.png"></S.Icon>게시물 등록하기
            </S.NewBtn>
          </S.Footer>
        </S.Body>
      </S.Header>
    </S.Wrapper>
  );
}
