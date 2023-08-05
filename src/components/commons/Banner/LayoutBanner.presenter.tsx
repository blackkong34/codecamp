import * as S from "./LayoutBanner.styles";
import React, { Component } from "react";
// import "/node_modules/slick-carousel/slick/slick-theme.css";
// import "/node_modules/slick-carousel/slick/slick.css";

const CarouselImg = [
  { idx: 1, src: "/assets/images/Carousel/carousel (1).jpg" },
  { idx: 2, src: "/assets/images/Carousel/carousel (2).jpg" },
  { idx: 3, src: "/assets/images/Carousel/carousel (3).jpg" },
  { idx: 4, src: "/assets/images/Carousel/carousel (4).jpg" },
];

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    draggable: true,
    // prevArrow: (
    //   <S.PrevTo>
    //     <S.PrevEllipse />
    //     <S.PrevArrow />
    //   </S.PrevTo>
    // ),
    // nextArrow: (
    //   <S.NextTo>
    //     <S.NextEllipse />
    //     <S.NextArrow />
    //   </S.NextTo>
    // ),
  };
  return (
    <S.BannerWrapper>
      <S.BannerTitle>배너영역</S.BannerTitle>
      <S.StyledSlider {...settings}>
        {CarouselImg.map((el) => {
          <div key={el.idx}>
            <S.BannerImg src={el.src} />
          </div>;
        })}
      </S.StyledSlider>
    </S.BannerWrapper>
  );
}

// <S.StyledSlider {...settings}>
//   {CarouselImg.map((el) => (
//     <div key={el.idx}>
//       <S.BannerCardImg src={el.src} />
//     </div>
//   ))}
// </S.StyledSlider>
