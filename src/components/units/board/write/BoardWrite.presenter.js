import {Wrapper, Title, WriteWrapper, InputWrapper, InputWrapper2, UserWrapper, User, Password, Subject, Content, ZipcodeWrapper, Zipcode, ZipcodeBtn, Address, Youtube, UploadWrapper, Plus, PicUpload, SettingWrapper, RadioLabel, Label, 
  RadioBtn, BtnWrapper, SubmitBtn, Error} from './BoardWrite.styles'
import { useForm } from 'react-hook-form';

export default function BoardWriteUI({onSubmit}) {
  const {register,watch, formState : {errors, isValid}, handleSubmit} = useForm({
    mode : 'onChange',
    defaultValues : {
      writer : "",
      password : "",
      title : "",
      contents : "",
    }
  });
  

  return( 
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriteWrapper onSubmit={handleSubmit(onSubmit)}>
        <UserWrapper>
          <InputWrapper2>
            <Label>작성자</Label>
            <User type="text" placeholder="이름을 입력해주세요."
              {...register('writer', {required : "이름이 입력되지 않았습니다"})}/>
              {errors.writer?.type === 'required' && (<Error>{errors.writer.message}</Error>)}       
          </InputWrapper2>
          <InputWrapper2>
            <Label>비밀번호</Label>
            <Password type="password" 
            placeholder='영문, 숫자, 특수문자sd를 혼용하여 8~16자를 입력해주세요.' 
            {...register('password', {
              required : "비밀번호가 입력되지 않았습니다.",
              minLength : {
                value: 8,
                message : "비밀번호는 최소 8자 이상 입력해야 합니다. "
              },
              maxLength : {
                value: 16,
                message: "비밀번호는 최대 16자까지 입력 가능합니다."
              },
              pattern : {
                value : /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/,
                message : "영문, 숫자, 특수문자를 모두 포함해야 합니다."
              }
              })}/>
            {errors.password && (<Error>{errors.password.message}</Error>)}
          </InputWrapper2>
        </UserWrapper>
        <InputWrapper> 
          <Label>제목</Label>
          <Subject type = "text" placeholder='제목을 작성해주세요.'
            {...register("title", {required : "제목이 입력되지 않았습니다"})}/>
          {errors.title?.type === "required" && (<Error>{errors.title.message}</Error>)}
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Content type = "textarea" placeholder='내용을 작성해주세요.'
          {...register("contents", {required : "내용이 입력되지 않았습니다"})}/>
          {errors.contents?.type === "required" && (<Error>{errors.contents.message}</Error>)}
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode type="text" placeholder='07250' />
            <ZipcodeBtn>우편번호 검색</ZipcodeBtn>
          </ZipcodeWrapper>
          <Address type="text"/>
          <Address type="text"/>
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube type="text" placeholder='링크를 복사해주세요.'/>
        </InputWrapper>
        <InputWrapper>
          <Label>사진첨부</Label>
          <UploadWrapper>
            <PicUpload><Plus>+</Plus>Upload</PicUpload>
            <PicUpload><Plus>+</Plus>Upload</PicUpload>
            <PicUpload><Plus>+</Plus>Upload</PicUpload>
          </UploadWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>메인 설정</Label>
          <SettingWrapper>
            <RadioBtn type = "radio" id = "유튜브" name = "mainSetting" checked = "checked"/>
            <RadioLabel htmlFor="유튜브">유튜브</RadioLabel>
            <RadioBtn type = "radio" name = "mainSetting" id ="사진"/>
            <RadioLabel htmlFor="사진">사진</RadioLabel>
          </SettingWrapper>
        </InputWrapper>
        <BtnWrapper>
          <SubmitBtn type = "submit" disabled = {!isValid}>등록하기</SubmitBtn>
        </BtnWrapper>
      </WriteWrapper> 
    </Wrapper>
  )
}