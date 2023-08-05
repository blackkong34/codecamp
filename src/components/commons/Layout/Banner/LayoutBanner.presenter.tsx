import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    prevArrow: (
      <S.PrevTo>
        <S.PrevEllipse />
        <S.PrevArrow />
      </S.PrevTo>
    ),
    nextArrow: (
      <S.NextTo>
        <S.NextEllipse />
        <S.NextArrow />
      </S.NextTo>
    ),
  };

  return (
    <div>
      <h2> Single Item</h2>
      <S.StyledSlider {...settings}>
        <div>
          <S.Img src="/assets/images/Carousel/carousel (1).jpg" />
        </div>
        <div>
          <S.Img src="/assets/images/Carousel/carousel (2).jpg" />
        </div>
        <div>
          <S.Img src="/assets/images/Carousel/carousel (3).jpg" />
        </div>
        <div>
          <S.Img src="/assets/images/Carousel/carousel (4).jpg" />
        </div>
      </S.StyledSlider>
    </div>
  );
}
