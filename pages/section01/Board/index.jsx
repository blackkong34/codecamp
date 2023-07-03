import {BoardContainer, Wrapper, Title, InputWrapper, InputWrapper2, UserWrapper, User, Password, Subject, Content, ZipcodeWrapper, Zipcode, ZipcodeBtn, Address, Youtube, UploadWrapper, Plus, PicUpload, SettingWrapper, RadioLabel, Label, 
RadioBtn, BtnWrapper, SubmitBtn} from '../../../styles/boardNew'

export default function Board() {

  return(
      <Wrapper>
        <Title>게시물 등록</Title>
        <div className="writeWrapper">
          <UserWrapper>
            <InputWrapper2>
              <Label>작성자</Label>
              <User type="text" placeholder="이름을 입력해주세요"/>
            </InputWrapper2>
            <InputWrapper2>
              <Label>비밀번호</Label>
              <Password type="password" placeholder='비밀번호를 입력해주세요.'/>
            </InputWrapper2>
          </UserWrapper>
          <InputWrapper> 
            <Label>제목</Label>
            <Subject placeholder='제목을 작성해주세요.'/>
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <Content type = "textarea" placeholder='내용을 작성해주세요.'/>
          </InputWrapper>
          <InputWrapper>
              <Label>주소</Label>
              <ZipcodeWrapper>
                {/* <InputWrapper> */}
                  <Zipcode type="text" placeholder='07250' />
                  <ZipcodeBtn>우편번호 검색</ZipcodeBtn>
                {/* </InputWrapper> */}
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
            <SubmitBtn >등록하기</SubmitBtn>
          </BtnWrapper>
        </div> 
      </Wrapper>
  )

}