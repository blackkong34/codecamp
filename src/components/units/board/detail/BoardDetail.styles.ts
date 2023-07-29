import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

const bounce = keyframes`
 from, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -25px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-10px,0);
  }
`;

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

export const HeaderIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 20px;
`;

export const Body = styled.div`
  width: 100%;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 100%;
  margin-bottom: 120px;
  display: block;
  width: 486px;
  margin: 0 auto;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const IconBox = styled.div`
  width: 40px;
  height: 51px;
`;

export const LikeBtn = styled.button`
  width: inherit;
  height: inherit;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover > img {
    animation: ${bounce} 0.5s linear 1;
  }
`;

export const DislikeBtn = styled(LikeBtn)``;

export const LikeIcon = styled.img`
  transition: all 0.2s ease-in-out;
  width: 36px;
  height: 36px;
`;
export const DislikeIcon = styled(LikeIcon)``;

export const Like = styled.span`
  color: #ffd600;
  font-size: 18px;
`;

export const Dislike = styled(Like)`
  color: #828282;
  text-align: center;
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
    background: #ffd600;
    border: 1px solid #ffd600;
  }
`;
