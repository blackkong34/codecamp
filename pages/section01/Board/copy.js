
    <BoardWrapper>
      <BoardBox>
        <BoardTitle>게시물 등록</BoardTitle>
        <div className="writeWrapper">
          <TextBox2>
            <InputBox>
              <InputTitleShadow>작성자</InputTitleShadow>
              <TextInput2 type="text" placeholder='이름을 입력해주세요.'/>
            </InputBox>
            <InputBox>
            <InputTitle>비밀번호</InputTitle>
            <TextInput2 type="password" placeholder='비밀번호를 입력해주세요.'/>
            </InputBox>
          </TextBox2>
          <div className="textBox1"> 
            <div className="inputTitle">제목</div>
            <input type="text" className="textInput1" placeholder='제목을 작성해주세요.'/>
          </div>
          <div className="textBox1">
            <div className="inputTitle">내용</div>
            <input type="textarea" className="textInput1" placeholder='내용을 작성해주세요.'/>
          </div>
          <div className="textBox1">
            <div className="inputTitle">주소</div>
            <div className="textBoxLeft">
              <input type="text" placeholder='07250' />
              <button>우편번호 검색</button>
            </div>
            <input type="text" className="textInput1"/>
            <input type="text" className="textInput1"/>
          </div>
          <div className="textBox1">
            <div className="inputTitle">내용</div>
            <input type="textarea" className="textInput1" placeholder='내용을 작성해주세요.'/>
          </div>
          </div>
      </BoardBox>
    </BoardWrapper>
  
