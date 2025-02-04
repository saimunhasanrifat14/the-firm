import React from "react";
import Container from "./CommonComponent/Container";
import Button from "./CommonComponent/Button";
import StudyImage from "../assets/studiesImage.png";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Studies = () => {

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
              color: "Black",
              backgroundColor: "var(--yellow_color)",
              position: "absolute",
              left: "0px",
              top : "50px",
              borderTopRightRadius : "50%",
              borderBottomRightRadius : "50%",
              zIndex: "10",
              opacity: "100%"
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
              color: "Black",
              backgroundColor: "var(--yellow_color)",
              position: "absolute",
              content: "",
              left: "-40px",
              top : "50px",
              borderTopLeftRadius : "50%",
              borderBottomLeftRadius : "50%",
              zIndex: "10",
              opacity: "40%"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  return (
    <Container>
      <div className="py-[100px]">
        <h3 className="text-[40px] text-center font-black text-text_black_color font-nunito mb-[18px]">
          Our Research & Case <span className="heading">Studies</span>
        </h3>
        <p className="m-auto w-[864px] text-center text-[18px] font-normal mb-[44px] font-lora mb-[40px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <div className="flex justify-between items-center">
          <div className="w-[45%]">
            <h4 className="font-bold text-[30px] font-nunito mb-[13px]">
              Lorem Ipsum is simply
            </h4>
            <p className="text-[18px] font-lora text-text_black_color mb-[23px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <Button btnContent={"Read More"} />
          </div>
          <div className="slider-container slider-perent m-auto rounded-[32px] border-[12px] border-white border-solid shadow-xl studie_slide">
        <Slider {...settings}>
          <div className="slider-item rounded-[32px]">
            <img className="" src={StudyImage} alt="" />
          </div>
          <div className="slider-item rounded-[32px]">
            <img className="" src={StudyImage} alt="" />
          </div>
          <div className=" slider-item rounded-[32px]">
            <img className="" src={StudyImage} alt="" />
          </div>
        </Slider>
      </div>
        </div>
      </div>

    </Container>
  );
};

export default Studies;
