import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Container, Wrapper, Title, WriteWrapper, InputWrapper, InputWrapper2, UserWrapper, User, Password, Subject, Content, ZipcodeWrapper, Zipcode, ZipcodeBtn, Address, Youtube, UploadWrapper, Plus, PicUpload, SettingWrapper, RadioLabel, Label, 
RadioBtn, BtnWrapper, SubmitBtn, Error} from '../../../styles/boardNew'

export default function Boards() {
  const {resiser, watch} = useForm();
  console.log(watch('user'));
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  
  // const [userError, setUserError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [subjectError, setSubjectError] = useState("");
  // const [contentError, setContentError] = useState("");


  // const onChangeUser = (e) => {
  //     setUser(e.target.value);
  //     if(e.target.value !== "") 
  //       setUserError("")
  //     }
      
  //     const onChangePassword= (e) => {
  //       setPassword(e.target.value);
  //       if(e.target.value !== "") 
  //       setPasswordError("")
  //     }
      
  //     const onChangeSubject = (e) => {
  //       setSubject(e.target.value);
  //       if(e.target.value !== "") 
  //       setSubjectError("")
  //     }
      
  //     const onChangeContent = (e) => {
  //       setContent(e.target.value);
  //       if(e.target.value !== "") 
  //       setContentError("")
  //     }
      
  //     const onClickSubmit = (e) => {
  //       console.log(user, password, subject, content);
  //       if(!user) setUserError("*이름이 입력되지 않았습니다")
  //       if(!password) setPasswordError("*비밀번호가 입력되지 않았습니다")
  //       if(!subject) setSubjectError("*제목이 입력되지 않았습니다")
  //       if(!content) setContentError("*내용이 입력되지 않았습니다")
  //       if(user && password && subject && content) alert("게시글이 등록되었습니다.")
  // }


  return(
    <Container>
      <Wrapper>
        <Title>게시물 등록</Title>
        <WriteWrapper>
          <UserWrapper>
            <InputWrapper2>
              <Label>작성자</Label>
              <User type="text" name ="user" placeholder="이름을 입력해주세요" onChange={onChangeUser}/>
              <Error>{userError}</Error>
            </InputWrapper2>
            <InputWrapper2>
              <Label>비밀번호</Label>
              <Password type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}/>
              <Error>{passwordError}</Error>
            </InputWrapper2>
          </UserWrapper>
          <InputWrapper> 
            <Label>제목</Label>
            <Subject placeholder='제목을 작성해주세요.' onChange={onChangeSubject}/
            >
              <Error>{subjectError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <Content type = "textarea" placeholder='내용을 작성해주세요.'onChange={onChangeContent}/>
              <Error>{contentError}</Error>
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
            <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
          </BtnWrapper>
        </WriteWrapper> 
      </Wrapper>
      </Container>
  )

}