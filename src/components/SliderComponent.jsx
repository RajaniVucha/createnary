import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images }) => {
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="custom-next-arrow" onClick={onClick}>
        <span>&#8594;</span>
      </div>
    );
  };
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        <span>&#8592;</span>
      </div>
    );
  };
  /* const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="custom-next-arrow`" onClick={onClick}>
        <span>&#8592;</span>
      </div>
    );
  };*/
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 2 seconds
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className="slideContainer" key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            width="50%" // Adjust as needed
            height="auto" // Adjust as needed to maintain aspect ratio
          />{" "}
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
