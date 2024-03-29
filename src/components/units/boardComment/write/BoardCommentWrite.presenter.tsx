import { useEffect } from "react";
import type {
  IBoardCommentWriteUIProps,
  IFormValue,
} from "./BoardCommentWrite.types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./BoardCommentWrite.styles";

const schema = yup.object().shape({
  writer: yup.string().required("작성자를 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(4, "비밀번호는 4자이상 입력해주세요"),
  contents: yup
    .string()
    .required("내용을 입력해주세요")
    .max(100, "댓글은 100자를 초과할 수 없습니다"),
  rating: yup.number().required("평점을 입력해주세요"),
});

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps,
): JSX.Element {
  const { comment, isEdit, onSubmitComment, onUpdateComment, onClickCancel } =
    props;
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful, errors },
    watch,
    reset,
  } = useForm<IFormValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      writer: comment?.writer ?? "",
      password: "",
      contents: comment?.contents ?? "",
      rating: comment?.rating ?? 0,
    },
  });

  const { contents } = watch();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <S.Wrapper>
      {!isEdit && (
        <S.Header>
          <S.Icon src="/assets/icons/review.png" />
          <S.Title>댓글</S.Title>
        </S.Header>
      )}
      <S.Body
        onSubmit={handleSubmit(isEdit ? onUpdateComment : onSubmitComment)}
      >
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
                  autoComplete="new-password"
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
          <Controller
            control={control}
            name="contents"
            render={({ field }) => (
              <S.InputTextarea
                {...field}
                wrap="on"
                placeholder="개인정보를 공유 및 요청하거나 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
            )}
          />
          <S.BtnWrapper>
            <S.Count>{contents?.length ?? 0}/100</S.Count>
            <div>
              {isEdit && (
                <S.Btn type="button" onClick={onClickCancel}>
                  취소하기
                </S.Btn>
              )}
              <S.Btn type="submit">{isEdit ? "수정하기" : "등록하기"}</S.Btn>
            </div>
          </S.BtnWrapper>
        </S.BodyMiddle>
        {errors?.contents && <S.Error>{errors.contents.message}</S.Error>}
      </S.Body>
    </S.Wrapper>
  );
}
