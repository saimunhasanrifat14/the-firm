import React from "react";
import Container from "./CommonComponent/Container";
import PerterLogo1 from "../assets/PerterLogo1.png";
import PerterLogo2 from "../assets/PerterLogo2.png";
import PerterLogo3 from "../assets/PerterLogo3.png";
import PerterLogo4 from "../assets/PerterLogo4.png";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Partner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "grey",
          position: "absolute",
          right: "-40px",
          borderRadius: "50%",
          zIndex: "10",
          opacity: "50%"
        }}
        onClick={onClick}
      >
        <IoIosArrowForward />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "grey",
          position: "absolute",
          content: "",
          left: "-40px",
          borderRadius: "50%",
          zIndex: "10",
          opacity: "50%"
        }}
        onClick={onClick}
      >
        <IoIosArrowBack />
      </div>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <Container>
      <div className="mb-[100px]">
        <h3 className="text-[40px] font-black text-text_black_color text-center font-nunito mb-[50px] mt-[100px]">
          Our <span className="heading">Partner</span>
        </h3>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="sliderItem">
              <picture className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                <img src={PerterLogo1} alt={PerterLogo1} />
              </picture>
            </div>
            <div className="sliderItem ">
              <picture className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                <img src={PerterLogo2} alt={PerterLogo2} />
              </picture>
            </div>
            <div className="sliderItem ">
              <picture className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                <img src={PerterLogo3} alt={PerterLogo3} />
              </picture>
            </div>
            <div className="sliderItem ">
              <picture className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                <img src={PerterLogo4} alt={PerterLogo4} />
              </picture>
            </div>
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Partner;
