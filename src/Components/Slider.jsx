import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fresas from "../assets/agricultura/fresas.webp";
import maceta from "../assets/agricultura/maceta.webp";
import girasoles from "../assets/agricultura/girasol.webp";
import cesped from "../assets/agricultura/cesped.webp";



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
    <div className="w-full mt-16 md:h-[450px] lg:h-[500px]  ">
      <Slider {...settings}>

        <div className="my-2 flex w-screen">
          <img
            src={fresas}
             className="max-sm:h-[290px] sm:h-[380px] w-full h-[250px] md:h-[450px] lg:h-[500px] "
            alt="fresas"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={girasoles}
             className="max-sm:h-[290px] sm:h-[380px] w-full h-[250px] md:h-[450px] lg:h-[500px] "
            alt="cultivar"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={cesped}
             className="max-sm:h-[290px] sm:h-[380px] w-full h-[250px] md:h-[450px] lg:h-[500px] "
            alt="cesped"
          />
        </div>
        <div className="my-2 flex">
          <img
            src={maceta}
             className="max-sm:h-[290px] sm:h-[380px] w-full h-[250px] md:h-[450px] lg:h-[500px] "
            alt="maceta"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderImg;
