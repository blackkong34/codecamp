import styled from "@emotion/styled";

export const BoardDetailWrapper = styled.article`
  width: 1200px;
  margin-top: 80px;
`;

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 80px 102px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 80px;
  border-bottom: 1px solid #bdbdbd;
`;

export const AvatarWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.span`
  color: #000;
  font-size: 24px;
  font-weight: 500;
`;

export const CreatedAt = styled.span`
  color: #828282;
`;

// export const HeaderIcons = styled.div`

// `

export const HeaderIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 20px;
`;

export const Body = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;

export const BoardTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;

export const ImageBox = styled.div`
  height: 480px;
  background: #f2f2f2;
  margin-bottom: 40px;
`;
export const Content = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;
export const VideoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;
export const Video = styled.div`
  width: 486px;
  height: 240px;
  background: url("/assets/images/video.png");
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const PlayIcon = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 51px;
  margin-left: 20px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Like = styled.span`
  color: #ffd600;
  font-size: 18px;
`;

export const Dislike = styled.span`
  color: #828282;
  font-size: 18px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 80px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const Btn = styled.button`
  padding: 14px 60px;
  margin-left: 40px;
  gap: 8px;
  background: #fff;
  border-style: none;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
