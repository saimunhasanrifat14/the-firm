import React from "react";
import Container from "../component/CommonComponent/Container";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  var profile = [
    {
      id: 1,
      img: "/src/assets/testimoniaImg3.png",
      nam: "Jenny Wilson | ",
      role: "Digital Agency",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg2.png",
      id: 2,
      nam: "Alice Johnson | ",
      role: "Programmer",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg1.png",
      id: 3,
      nam: "Michael Smith | ",
      role: "Graphic Designer",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg4.png",
      id: 4,
      nam: "Sophia Williams | ",
      role: "UI/UX Designer",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg5.png",
      id: 5,
      nam: "Emma Davis | ",
      role: "Cyber Security Specialist",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <Container>
      <div className="pb-[61px] pt-[100px]">
        <h3 className="text-[40px] text-center font-black text-text_black_color font-nunito">
          Frustration of <span className="heading">Clients</span>
        </h3>
        <div className="slider-container">
          <Slider {...settings}>
            {profile.map((data) => (
              <div key={data.id} className="flex flex-col justify-center items-center pt-[75px]">
                <div className="flex flex-col justify-center items-center">
                <img className="w-[156px] h-[156px]" src={data.img} alt={data.name} />
                <p className="text-text_black_color font-lora text-[18px] w-[864px] text-center py-[30px]">{data.summary}</p>
                <h2 className="text-text_black_color font-lora text-[17px] mb-[25px]"><span className="font-bold">{data.nam}</span>{data.role}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
