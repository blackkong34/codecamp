import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./BoardCommentWrite.styles";
import { kMaxLength } from "buffer";

export default function BoardCommentWriteUI(props) {
  const { onSubmitComment } = props;
  const { register, handleSubmit, watch } = useForm();

  const { contents } = watch();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Icon src="/assets/icons/review.png" />
        <S.Title>댓글</S.Title>
      </S.Header>
      <S.Body onSubmit={handleSubmit(onSubmitComment)}>
        <S.BodyTop>
          <S.InputText
            type="text"
            placeholder="작성자"
            {...register("writer", { required: "댓글 작성자를 입력해주세요" })}
          />
          <S.InputText
            type="password"
            placeholder="비밀번호"
            autoComplete="none"
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
          <S.StarWrapper type="number" {...register("rating")} />
          <S.Star>★★★★★</S.Star>
        </S.BodyTop>
        <S.BodyMiddle>
          <S.InputTextarea
            wrap="on"
            placeholder="개인정보를 공유 및 요청하거나 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며 이에 대한 민형사상 책임은 게시자에게 있습니다."
            {...register("contents", {
              required: "댓글 내용을 입력해주세요",
              maxLength: {
                value: 100,
                message: "댓글은 100자를 초과할 수 없습니다.",
              },
            })}
          />
          <S.BodyBottom>
            <S.Count>{contents?.length}/100</S.Count>
            <S.SubmitBtn type="submit">등록하기</S.SubmitBtn>
          </S.BodyBottom>
        </S.BodyMiddle>
      </S.Body>
    </S.Wrapper>
  );
}
