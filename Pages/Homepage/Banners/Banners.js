import React from "react";
import Slider from "react-slick";
import "./Banners.css";
import bannar4 from "./img/glu4.jpg";
import bannar0 from "./img/glu3.jpg";
import bannar1 from "./img/glu2.jpg";
import bannar2 from "./img/glu1.jpg";

const Banners = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <div className="slider ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <img src={bannar0} alt="" className="sliderImage" />
              <img src={bannar2} alt="" className="sliderImage" />
              <img src={bannar1} alt="" className="sliderImage" />
              <img src={bannar4} alt="" className="sliderImage" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
