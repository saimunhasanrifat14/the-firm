import React from "react";
import Container from "./CommonComponent/Container";
import Button2 from "./CommonComponent/Button2";
import brendingBanner from "../assets/branding.png";
import brendingLogo from "../assets/brandingLogo.png";
import Button3 from "./CommonComponent/Button3";

const About = () => {
  return (
    <div className="bg-bg_gray_three py-[95px]">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[40px] font-black text-text_black_color text-center font-nunito mb-[50px]">
            Reason to Choose <span className="heading">Us</span>
          </h3>
          <p className="text-[18px] font-normal mb-[44px] font-lora mb-[40px] text-center w-[864px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="flex justify-center items-center gap-[76px]">
            <Button2 btnContent={"Market Research"}></Button2>
            <Button2 btnContent={"Market Research"}></Button2>
            <Button2 btnContent={"Market Research"}></Button2>
            <Button2 btnContent={"Market Research"}></Button2>
          </div>
        </div>
        <div className="flex justify-between py-[75px] bg-bg_white rounded-2xl mt-[60px] gap-[50px] px-[45px]">
          <div className=" w-[50%]">
            <picture>
              <img
                className="border-solid border-[10px] border-white shadow-xl rounded-2xl"
                src={brendingBanner}
                alt={brendingBanner}
              />
            </picture>
          </div>
          <div className="flex justify-start items-start w-[50%] gap-[14px]">
            <img src={brendingLogo} alt={brendingLogo} />
            <div>
              <h3 className="text-[30px] font-bold text-text_black_color font-nunito mb-[18px] ">
                {" "}
                <span className="heading">Branding</span>
              </h3>
              <p className="text-[18px] font-normal font-lora mb-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type
              </p>
              <Button3 btnContent={'Read More'}></Button3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
