import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Link from "next/link";

export default function BoardListUI(props: IBoardListUIProps) {
  const { data, onClickMoveToDetail } = props;
  return (
    <S.Wrapper>
      <Link href="/boards/new">
        <S.NewBoard>새로운 글 작성하기</S.NewBoard>
      </Link>
      <S.BodyHeader>
        <S.SearchBar
          id="search"
          type="text"
          placeholder="제목을 검색해주세요"
          // {...register("search", {
          //   required : "검색어가 입력되지 않았습니다",
          //   minLength : {
          //     value : 2,
          //     message : "검색어는 최소 2글자 이상이어야 합니다"}
          //   })}
        />
        <div>
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
            <span>~</span>
            <S.Date type="date" required data-placeholder="YYYY.MM.DD" />
          </S.DateBox>
          <S.SearchBtn type="submit">검색하기</S.SearchBtn>
        </div>
      </S.BodyHeader>
      <S.CardsWrapper>
        {data?.fetchBoards?.map((item) => (
          <S.Card key={item._id} id={item._id} onClick={onClickMoveToDetail}>
            <S.CardWrapper>
              <div>
                <S.CardHeader>
                  <img
                    src={item.user?.picture ?? "/assets/icons/profile.png"}
                    alt="작성자프로필"
                  />
                  <S.CardProfile>
                    <span>{item.writer}</span>
                    <S.CreatedAt>
                      작성일자 : {getDate(item.createdAt)}
                    </S.CreatedAt>
                  </S.CardProfile>
                </S.CardHeader>
                <S.CardBody>
                  <h2>{item.title}</h2>
                  <span>{item.contents}</span>
                  <img src={item.images?.[0]} />
                  <S.Overflow />
                </S.CardBody>
              </div>
              <S.CardFooter>
                <S.Like src="/assets/icons/thumb_up.png" alt="좋아요" />
                <span>{item.likeCount}</span>
              </S.CardFooter>
            </S.CardWrapper>
          </S.Card>
        ))}
      </S.CardsWrapper>
    </S.Wrapper>
  );
}
