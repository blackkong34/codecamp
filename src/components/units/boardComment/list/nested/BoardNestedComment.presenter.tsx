import * as S from "./BoardNestedComment.styles";
import { useForm, Controller } from "react-hook-form";

export default function BoardNestedCommentUI() {
  const {
    register,
    control,
    formState: { isSubmitSuccessful, errors },
    watch,
  } = useForm();

  const { CommentContent } = watch();
  return (
    <S.NestedWrapper>
      <S.FlexWrapper>
        <S.NestedItem>
          <S.ArrowIcon />
          <S.Avatar src="/assets/icons/profile.png" alt="댓글프로필" />
          <S.ItemMain>
            <S.WriterBox>
              <S.Writer>작성자</S.Writer>
            </S.WriterBox>
            <S.Contents>내용입니다</S.Contents>
          </S.ItemMain>
          <S.IconsBox>
            <S.AnswerIcon src="/assets/icons/pencil.png" />
          </S.IconsBox>
        </S.NestedItem>
        <S.BodyMiddle>
          <S.ArrowIcon />
          <S.BodyWrite>
            <Controller
              name="CommentContent"
              control={control}
              render={({ field }) => (
                <S.InputTextarea
                  {...field}
                  wrap="on"
                  placeholder="답글을 등록해주세요."
                />
              )}
            />
            <S.BtnWrapper>
              <S.Count>{CommentContent?.length ?? 0}/100</S.Count>
              <S.SubmitBtn type="submit">답글등록</S.SubmitBtn>
            </S.BtnWrapper>
          </S.BodyWrite>
        </S.BodyMiddle>
      </S.FlexWrapper>
    </S.NestedWrapper>
  );
}
