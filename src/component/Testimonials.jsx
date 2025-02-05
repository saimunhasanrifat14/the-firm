import React from "react";
import Container from "../component/CommonComponent/Container";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  var profile = [
    {
      id: 1,
      img: "/src/assets/testimoniaImg1.png",
      nam: "Jenny Wilson | ",
      role: "Digital Agency",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg2.png",
      id: 2,
      nam: "Jenny Wilson | ",
      role: "Digital Agency",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg3.png",
      id: 3,
      nam: "Jenny Wilson | Digital Agency",
      role: "Digital Agency",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg4.png",
      id: 4,
      nam: "Jenny Wilson | Digital Agency",
      role: "Digital Agency",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      img: "/src/assets/testimoniaImg5.png",
      id: 5,
      nam: "Jenny Wilson | Digital Agency",
      role: "Digital Agency",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };

  return (
    <Container>
      <div>
        <h3 className="text-[40px] font-black text-text_black_color font-nunito mb-[22px]">
          Frustration of <span className="heading">Clients</span>
        </h3>
        <div className="slider-container">
          <Slider {...settings}>
            {profile.map((data) => (
              <div key={data.id} className="">
                <img src={data.img} alt={data.name} />
                <p>{data.summary}</p>
                <h2><span>{data.nam}</span>{data.role}</h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
