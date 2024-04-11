import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cultivar from "../assets/agricultura/pexels-greta-hoffman-7728082.webp";
import sembrar from "../assets/agricultura/pexels-maarten-van-den-heuvel-2284170.webp";
import vegetales from "../assets/agricultura/pexels-mark-stebnicki-2252584.webp";
import girasoles from "../assets/agricultura/pexels-susanne-jutzeler-sujufoto-1169084.webp";
import Verduras from "../assets/agricultura/verduras1.jpg";

function SliderImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container max-md:w-screen mt-16">
      <Slider {...settings}>
        <div className="my-2 flex">
          <img
            src={cultivar}
            className="max-sm:h-[290px] sm:h-[450px] w-full h-[250px]"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={sembrar}
            className="max-sm:h-[290px] sm:h-[450px] w-full h-[250px]"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={vegetales}
            className="max-sm:h-[290px] sm:h-[450px] w-full h-[250px]"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={girasoles}
            className="max-sm:h-[290px] sm:h-[450px] w-full h-[250px]"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={Verduras}
            className="max-sm:h-[290px] sm:h-[450px] w-full h-[250px]"
            alt="derek"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderImg;
