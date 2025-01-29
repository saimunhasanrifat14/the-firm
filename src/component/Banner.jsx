import React from "react";
import Container from "./CommonComponent/Container";
import banner from "../assets/banner.png";
import Button from "./CommonComponent/Button";

const Banner = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mt-[100px]">
        <div className="w-3/6">
          <h1 className="text-[48px] font-nunito font-black leading-[133%] mb-[28px]">Get Bussiness <br /> Solutions with TheFirm.</h1>
          <p className="text-[18px] font-normal mb-[44px] font-lora pr-[140px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <Button btnContent="Get In Touch"></Button>
        </div>
        <picture className="w-3/6">
          <img src={banner} alt="" />
        </picture>
      </div>
    </Container>
  );
};

export default Banner;
