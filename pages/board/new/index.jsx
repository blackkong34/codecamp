import {Container, Wrapper, Title, WriteWrapper, InputWrapper, InputWrapper2, UserWrapper, User, Password, Subject, Content, ZipcodeWrapper, Zipcode, ZipcodeBtn, Address, Youtube, UploadWrapper, Plus, PicUpload, SettingWrapper, RadioLabel, Label, 
RadioBtn, BtnWrapper, SubmitBtn, Error} from '../../../styles/boardNew'
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, gql} from '@apollo/client';

const CREATE_BOARD = gql`
  mutation createBoard($CreateBoardInput : CreateBoardInput!){
    createBoard(createBoardInput : $CreateBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`

export default function Boards() {
  const {register,watch, formState : {errors}, handleSubmit} = useForm();
  // console.log(watch('content'));

  const [createBoard] = useMutation(CREATE_BOARD);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  
  const onSubmit = async (data) => {

    setUser(data.user);
    setPassword(data.password);
    setSubject(data.subject);
    setContent(data.content);

    if(user && password && subject && content) {
      const result = await createBoard({
        variables : {
          CreateBoardInput : {
            writer : user,
            password,
            title : subject,
            contents : content,
          }
        }
      });
    }
    console.log(result);
  }

//비밀번호 확인하기
// const password = useRef();
// password.current = watch('password');

  return(
    <Container>
      <Wrapper>
        <Title>게시물 등록</Title>
        <WriteWrapper onSubmit={handleSubmit(onSubmit)}>
          <UserWrapper>
            <InputWrapper2>
              <Label>작성자</Label>
              <User type="text" placeholder="이름을 입력해주세요."
                {...register('user', {required : true})}/>
                {errors.user?.type === 'required' && (<Error>이름이 입력되지 않았습니다</Error>)}       
            </InputWrapper2>
            <InputWrapper2>
              <Label>비밀번호</Label>
              <Password type="password" placeholder='영문, 숫자, 특수문자를 혼용하여 8~16자를 입력해주세요.' 
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
            {/* <InputWrapper2>
              <Label>비밀번호 확인</Label>
              <Password type="password" placeholder='비밀번호를 한 번 더 입력하세요.' 
              {...register('passwordConfirm', {
                required : "비밀번호를 확인해주세요.",
                validate : (value) => {
                    value === password.current
                }
                })}/>
                {errors.passwordConfirm && <Error>{errors.passwordConfirm.message}</Error>}
              {errors.password && (<Error>{errors.password.message}</Error>)}
            </InputWrapper2> */}
          </UserWrapper>
          <InputWrapper> 
            <Label>제목</Label>
            <Subject type = "text" placeholder='제목을 작성해주세요.'
              {...register("subject", {required : true})}/>
            {errors.subject?.type === "required" && (<Error>제목이 입력되지 않았습니다</Error>)}
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <Content type = "textarea" placeholder='내용을 작성해주세요.'
            {...register("content", {required : true})}/>
            {errors.content?.type === "required" && (<Error>내용이 입력되지 않았습니다</Error>)}
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
              <RadioBtn type = "radio" id ="유튜브"/>
              <RadioLabel htmlFor="유튜브">유튜브</RadioLabel>
              <RadioBtn type = "radio" id ="사진"/>
              <RadioLabel htmlFor="사진">사진</RadioLabel>
            </SettingWrapper>
          </InputWrapper>
          <BtnWrapper>
            <SubmitBtn>등록하기</SubmitBtn>
          </BtnWrapper>
        </WriteWrapper> 
      </Wrapper>
    </Container>
  )

}