import styled from "@emotion/styled";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import NavigateNextIcon from "../../../../../public/assets/icons/Banner/navigate_next.svg";
import NavigateprevIcon from "../../../../../public/assets/icons/Banner/navigate_before.svg";
import EllipseIcon from "../../../../../public/assets/icons/Banner/Ellipse.svg";

export const BannerWrapper = styled.section`
  width: 100%;
`;
export const BannerTitle = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;
export const StyledSlider = styled(Slider)`
  .slick-arrow {
    cursor: pointer;

    &::before {
      /* display: none; */
    }
  }
  .slick-next {
    right: 20%;
    z-index: 4;
  }
  .slick-prev {
    left: 20%;
    z-index: 4;
  }
  .slick-dots {
    bottom: 32px;
  }
`;
export const BannerImg = styled.img`
  height: 400px;
  width: inherit;
  object-fit: cover;
`;
export const PrevTo = styled.span``;
export const PrevEllipse = styled(EllipseIcon)`
  position: relative;
`;
export const PrevArrow = styled(NavigateprevIcon)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
`;
export const NextTo = styled.span``;

export const NextEllipse = styled(EllipseIcon)`
  position: relative;
`;
export const NextArrow = styled(NavigateNextIcon)`
  position: absolute;
  margin: 12px;
  top: 0;
  left: 0;
`;
