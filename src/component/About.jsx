import React from "react";
import Container from "./CommonComponent/Container";
import Button2 from "./CommonComponent/Button2";

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
      </Container>
    </div>
  );
};

export default About;
