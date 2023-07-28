import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";
import * as S from "./BoardCommentWrite.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  writer: yup.string().required("작성자를 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
  contents: yup
    .string()
    .required("내용을 입력해주세요")
    .max(100, "댓글은 100자를 초과할 수 없습니다"),
  rating: yup.number().required("평점을 입력해주세요"),
});
export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps,
): JSX.Element {
  const { onSubmitComment } = props;
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful, errors },
    watch,
    reset,
  } = useForm<Required<ICreateBoardCommentInput>>({
    resolver: yupResolver(schema),
    defaultValues: { writer: "", password: "", contents: "" },
  });

  const { contents } = watch();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Icon src="/assets/icons/review.png" />
        <S.Title>댓글</S.Title>
      </S.Header>
      <S.Body onSubmit={handleSubmit(onSubmitComment)}>
        <S.BodyTop>
          <S.InputWrapper>
            <Controller
              name="writer"
              control={control}
              render={({ field }) => (
                <S.InputText {...field} type="text" placeholder="작성자" />
              )}
            />
            {errors?.writer && <S.Error>{errors.writer.message}</S.Error>}
          </S.InputWrapper>
          <S.InputWrapper>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <S.InputText
                  {...field}
                  type="password"
                  placeholder="비밀번호"
                  autoComplete="none"
                />
              )}
            />
            {errors?.password && <S.Error>{errors.password.message}</S.Error>}
          </S.InputWrapper>
          <S.InputWrapper>
            <Controller
              control={control}
              name="rating"
              render={({ field }) => <S.Star {...field} />}
            />
            {errors?.rating && <S.Error>{errors.rating.message}</S.Error>}
          </S.InputWrapper>
        </S.BodyTop>
        <S.BodyMiddle>
          {/* <S.InputWrapper> */}
          <Controller
            control={control}
            name="contents"
            render={({ field }) => (
              <S.InputTextarea
                {...field}
                wrap="on"
                placeholder="개인정보를 공유 및 요청하거나 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며 이에 대한 민형사상 책임은 게시자에게 있습니다."
                // {...register("contents", {
                //   required: "댓글 내용을 입력해주세요",
                //   maxLength: {
                //     value: 100,
                //     message: "댓글은 100자를 초과할 수 없습니다.",
                //   },
                // })}
              />
            )}
          />
          {/* </S.InputWrapper> */}
          <S.BtnWrapper>
            <S.Count>{contents?.length}/100</S.Count>
            <S.SubmitBtn type="submit">등록하기</S.SubmitBtn>
          </S.BtnWrapper>
        </S.BodyMiddle>
        {errors?.contents && <S.Error>{errors.contents.message}</S.Error>}
      </S.Body>
    </S.Wrapper>
  );
}
