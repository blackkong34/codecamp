import * as S from "./LayoutBanner.styles";
// import Slider from "react-slick";
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
    slide: "img",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
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
      <S.StyledSlider {...settings}>
        {CarouselImg.map((img) => (
          <div key={img.idx}>
            <S.Img src={img.src} />
          </div>
        ))}
      </S.StyledSlider>
    </div>
  );
}
