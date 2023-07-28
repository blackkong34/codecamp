import * as S from "./BoardWrite.styles";
import { useForm } from "react-hook-form";
import { FormValues, IBoardWriteUIProps } from "./BoardWrite.types";
import { useEffect, useMemo, useState } from "react";
import { ICreateBoardInput } from "../../../../commons/types/generated/types";
import Modal from "../../../../commons/libraries/Modal/modal";
export default function BoardWriteUI(props: IBoardWriteUIProps) {
  const {
    isEdit,
    data,
    onSubmitCreate,
    onSubmitUpdate,
    onClickMoveToBack,
    errMsg,
    showModal,
    getValue,
    onClickClose,
  } = props;
  const {
    register,
    reset,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
  } = useForm<ICreateBoardInput>({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      writer: data?.fetchBoard.writer ?? "",
      title: data?.fetchBoard.title ?? "",
      contents: data?.fetchBoard.contents ?? "",
      youtubeUrl: data?.fetchBoard.youtubeUrl ?? "",
    },
  });
  // useMemo(() => {
  //   return data?.fetchBoard;
  // }, [data]),
  useEffect(() => {
    reset(data?.fetchBoard);
  }, [data?.fetchBoard, reset]);

  return (
    <S.Wrapper>
      <Modal isOpen={showModal} getValue={getValue} onClose={onClickClose}>
        {errMsg}
      </Modal>
      <S.Title>{isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
      <S.WriteWrapper
        onSubmit={handleSubmit(isEdit ? onSubmitUpdate! : onSubmitCreate!)}
      >
        <S.UserWrapper>
          <S.InputWrapper2>
            <S.Label>작성자</S.Label>
            <S.User
              type="text"
              placeholder="이름을 입력해주세요."
              disabled={isEdit}
              {...register("writer")}
            />
            {errors.writer && <S.Error>{errors?.writer.message}</S.Error>}
          </S.InputWrapper2>
          <S.InputWrapper2>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              autoComplete="off"
              placeholder="영문, 숫자, 특수문자를 혼용하여 8~16자를 입력해주세요."
              {...register("password", {
                required: "비밀번호가 입력되지 않았습니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상 입력해야 합니다. ",
                },
                maxLength: {
                  value: 16,
                  message: "비밀번호는 최대 16자까지 입력 가능합니다.",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/,
                  message: "영문, 숫자, 특수문자를 모두 포함해야 합니다.",
                },
              })}
            />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
          </S.InputWrapper2>
        </S.UserWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            {...register("title", { required: "제목이 입력되지 않았습니다" })}
          />
          {errors.title?.type === "required" && (
            <S.Error>{errors.title.message}</S.Error>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Content
            placeholder="내용을 작성해주세요."
            {...register("contents", {
              required: "내용이 입력되지 않았습니다",
            })}
          />
          {errors.contents?.type === "required" && (
            <S.Error>{errors.contents.message}</S.Error>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode type="text" placeholder="07250" />
            <S.ZipcodeBtn type="button">우편번호 검색</S.ZipcodeBtn>
          </S.ZipcodeWrapper>
          <S.Address type="text" />
          <S.Address type="text" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube type="text" placeholder="링크를 복사해주세요." />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadWrapper>
            <S.PicUpload type="button">
              <S.Plus>+</S.Plus>Upload
            </S.PicUpload>
            <S.PicUpload type="button">
              <S.Plus>+</S.Plus>Upload
            </S.PicUpload>
            <S.PicUpload type="button">
              <S.Plus>+</S.Plus>Upload
            </S.PicUpload>
          </S.UploadWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>메인 설정</S.Label>
          <S.SettingWrapper>
            <S.RadioBtn
              type="radio"
              id="유튜브"
              name="mainSetting"
              defaultChecked={true}
            />
            <S.RadioLabel htmlFor="유튜브">유튜브</S.RadioLabel>
            <S.RadioBtn type="radio" name="mainSetting" id="사진" />
            <S.RadioLabel htmlFor="사진">사진</S.RadioLabel>
          </S.SettingWrapper>
        </S.InputWrapper>
        <S.BtnWrapper>
          {isEdit && (
            <S.CancealBtn type="reset" onClick={onClickMoveToBack}>
              취소하기
            </S.CancealBtn>
          )}
          <S.SubmitBtn
            type="submit"
            disabled={
              isEdit
                ? !(
                    (dirtyFields.password && dirtyFields.contents) ||
                    (dirtyFields.password && dirtyFields.title)
                  )
                : !isValid
            }
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.BtnWrapper>
      </S.WriteWrapper>
    </S.Wrapper>
  );
}
