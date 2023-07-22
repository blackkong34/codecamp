import { useForm } from "react-hook-form";
import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI() {
  const { register } = useForm();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Icon src="/assets/icons/review.png" />
        <S.Title>댓글</S.Title>
      </S.Header>
      <S.Body>
        <S.BodyTop>
          <S.InputText
            type="text"
            placeholder="작성자"
            {...register("reviweWriter")}
          />
          <S.InputText
            type="password"
            placeholder="비밀번호"
            autoComplete="none"
            {...register("reviwePassword")}
          />
          <S.StarWrapper>
            ★★★★★
            <S.Star>★★★★★</S.Star>
          </S.StarWrapper>
        </S.BodyTop>
        <S.BodyMiddle>
          <S.InputTextarea
            type="textarea"
            wrap="on"
            placeholder="개인정보를 공유 및 요청하거나 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며 이에 대한 민형사상 책임은 게시자에게 있습니다."
            {...register("comments")}
          />
          <S.BodyBottom>
            <S.Count>0/100</S.Count>
            <S.SubmitBtn type="submit">등록하기</S.SubmitBtn>
          </S.BodyBottom>
        </S.BodyMiddle>
      </S.Body>
    </S.Wrapper>
  );
}
